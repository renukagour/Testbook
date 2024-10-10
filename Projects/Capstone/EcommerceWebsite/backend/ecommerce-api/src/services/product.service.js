const Category = require("../models/category.model");
const Product = require("../models/product.model");

async function createProduct(reqData) {
    try {
        let topLevel = await Category.findOne({ name: reqData.topLevelCategory });
        if (!topLevel) {
            topLevel = new Category({
                name: reqData.topLevelCategory,
                level: 1,
            });
            await topLevel.save();
        }


        // checking second level category has and has parent category as top level category
        let secondLevel = await Category.findOne({
            name: reqData.secondLevelCategory,
            parentCategory: topLevel._id,
        });
        //if not create
        if (!secondLevel) {
            secondLevel = new Category({
                name: reqData.secondLevelCategory,
                level: 2,
                parentCategory: topLevel._id,
            });
            await secondLevel.save();
        }

        let thirdLevel = await Category.findOne({
            name: reqData.thirdLevelCategory,
            parentCategory: secondLevel._id,
        });

        if (!thirdLevel) {
            thirdLevel = new Category({
                name: reqData.thirdLevelCategory,
                parentCategory: secondLevel._id,
                level: 3,
            });
            await thirdLevel.save();
        }

        const product = new Product({
            title: reqData.title,
            color: reqData.color,
            description: reqData.description,
            discountedPrice: reqData.discountedPrice,
            discountPercent: reqData.discountPercent,
            imageUrl: reqData.imageUrl,
            brand: reqData.brand,
            price: reqData.price,
            sizes: reqData.size,
            quantity: reqData.quantity,
            category: thirdLevel._id,

        });

        return await product.save();
    } catch (error) {
        console.error("Error creating product", error);
        throw error;
    }
}


async function deleteProduct(productId) {
    try {
        const product = await findProductById(productId);

        await Product.findByIdAndDelete(productId);
        return "Product deleted successfully";

    } catch (error) {
        console.error("Error deleting product", error);
        throw error;
    }
}

async function updateProduct(productId, reqData) {
    try {
        return await Product.findByIdAndUpdate(productId, reqData);
    } catch (error) {
        throw new Error(error.message);
    }
}

async function findProductById(productId) {
    try {
        const product = await Product.findById(productId).populate("category").exec();
        if (!product) {
            throw new Error("Product not found with id " + productId);
        }
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
}

// methods for searching ,sorting , pagination

async function getAllProducts(reqQuery) {
    try {
        let { category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize } = reqQuery;

        pageSize = pageSize || 10; //if not from fronted by default

        let query = Product.find().populate("category");

         
        // category
        if (category) {
            const existCategory = await Category.findOne({ name: category });
            console.log('Category Found:', existCategory);
            if (existCategory) {
                //setting products in  query from given categories 
                // fetching product with given category
                query = query.where("category").equals(existCategory._id);
                console.log('Query after category filter:', query.getQuery());
                // console.log(existCategory._id);
                // console.log(query);
            }
            else {
                return { content: [], currentPage: 1, totalPages: 0 }
                // If existCategory is null (meaning no category was found with the given name), this block executes.
                // The function immediately returns an object with content as an empty array, currentPage set to 1, and totalPages set to 0. 
                //This likely indicates that no products were found for the non-existent category.
            }
        }

        // color
        // white,black,orange in string format then convert to Array then Set
        if (color) { //explanation below
            //trim remove spaces
            const colorSet = new Set(color.split(",").map(color => color.trim().toLowerCase()));

            //Regex method is used to check is color exist with product
            const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
            query = query.where("color").regex(colorRegex);

        }

        // sizes
        if (sizes) {
            const sizeSet=new Set(sizes);
            query = query.where("sizes.name").in([...sizeSet]);
        }

        //minPrice and maxPrice
        if (minPrice && maxPrice) {
            query =  query.where("discountedPrice").gte(minPrice).lte(maxPrice)
        }

        if(minDiscount){
            query =  query.where("discountPercent").gt(minDiscount);
        }

        //stock
        if(stock){
            if(stock=="in_stock"){
                query =  query.where("quantity").gt(0);
            }
            else if(stock=="out_of_stock"){
                // query =  query.where("quantity").gt(1);
                query =  query.where("quantity").lte(0);
            }
            
        }

//sort
        if(sort){
            const sortDirection = sort ==='price_hight'?-1:1;
            query = query.sort({discountedPrice:sortDirection});
        }


//pagination

        //total Product
        // const totalProducts = await query.countDocuments();
        const totalProducts = await query.clone().countDocuments(); // Corrected countDocuments usage with clone()
        console.log('Total Products Count:', totalProducts);
        //for pagination
        const skip = (pageNumber -1)*pageSize;
        // query= query.skip(skip).limit(pageSize);
        // const product = await query.exec();
        const paginatedQuery = query.clone().skip(skip).limit(pageSize); // Clone again for pagination and data fetch
        const product = await paginatedQuery.exec();
        console.log('Products Fetched:', product);

        // there is no further update in query so calculate the total pages
        const totalPages =Math.ceil(totalProducts/pageSize);
        //if 50 products are available and 10 product on each page
        // so total pages will be 50/10 i.e 5 pages

        return { content: product, currentPage: pageNumber, totalPages}

    } catch (error) {
        throw new Error(error.message);
    }
}


//for admin create multiple products

async function createMultipleProduct(products) {
    try {
        for(let product of products) {
            await createProduct(product);
        }
      
    } catch (error) {
        throw new Error(error.message);
    }
}



//color explanation
// Processing the Color String:

// const colorSet = new Set(color.split(",").map(color => color.trim().toLowerCase()));
// color.split(","): Splits the color string into an array of color values. The string is split based on commas (,) assuming that multiple colors might be provided in a comma-separated format.
// .map(color => color.trim().toLowerCase()): This operation iterates over each color in the array:
// trim(): Removes any leading or trailing whitespace from each color string.
// toLowerCase(): Converts each color string to lowercase to ensure case-insensitive matching.
// new Set(...): A Set is used to store the processed color strings. A Set automatically removes any duplicate values, ensuring that each color is unique.
// Creating a Regular Expression:

// const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
// colorSet.size > 0: This checks if the colorSet contains any elements (i.e., there was at least one valid color provided).
// new RegExp([...colorSet].join("|"), "i"): This creates a regular expression that matches any of the colors in the colorSet. Here's how it works:
// [...colorSet]: Converts the Set into an array.
// .join("|"): Joins the array elements into a single string, with each color separated by a pipe (|). In regular expressions, the pipe (|) is used as an OR operator.
// "i": This flag makes the regular expression case-insensitive.
// null: If the colorSet is empty, colorRegex is set to null, meaning no filtering will be applied based on color.


module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProduct,
 
};