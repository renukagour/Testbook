const Rating = require('../models/rating.model');
const productService =require('../services/product.service');

async function createRating(req,user){
    try {

        const product = await productService.findProductById(req.productId);
        const rating = new Rating({
            user: user._id,
            product: product._id,
            rating: req.rating,
            createdAt:new Date(),
        })
        // await product.save();
        return await rating.save();
        
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getAllRatings(productId){

    try {
        const rating = await Rating.find({ product: productId});
        return rating;
        
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports = {
    createRating,
    getAllRatings,
 };