const { uploadImageToCloudinary } = require("../utils/fileUpload");
const { toSlug } = require("../utils/helpers");

const Product = require('../model/product.model');


const createProduct = async (req, res) => {
    try {
        const { name, price, description, category, quantity } = req.body;
        const slug = toSlug(name); //convert name to slug
        const file = req.file;

        const imageUrl = await uploadImageToCloudinary(file); //upload image to cloudinary

        const product = new Product({
            name, price, description, category, quantity, slug, imageUrl
        });
        const resp = await product.save();

        const newProduct = await Product.findById(resp._id).populate("category"); //what is meaning populate ? 

        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const cid = req.query.cid || null;
        const query = {}
        if (cid) {
            query.category = cid;
        }


        //fetch all products from category
        const products = await Product.find({ ...query }).populate("category").populate("reviews");

        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProductById= async (req, res) => {
    try {
        const productId = req.params._id;
     
       
        //fetch all products from category
        const product = await Product.find(productId).populate("category").populate("reviews");

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateProduct= async (req, res) => {
    try {
        const productId = req.params._id;
        const file = req.file;
        const ImageUrl=null;
        if(file){
            ImageUrl = await uploadImageToCloudinary(file);
        }
        if (imageUrl){
            req.body.imageUrl = imageUrl;
        }
        req.body.slug=toSlug(req.body.name);
        const product = await Product.findByIdAndUpdate(productId, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const updateProduct=await product.populate("category");
        res.status(201).json(updateProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const deleteProduct = async (req, res) => {
    try {
      const productId = req.params._id;
      const product = await Product.findByIdAndDelete(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully" });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}