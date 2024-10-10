const Review = require('../models/review.model');
const productService =require('../services/product.service');

async function createReview(reqData,user){
    try {

        const product = await productService.findProductById(reqData.productId);
        const review = new Review({
            user: user._id,
            product: product._id,
            review: reqData.review,
            createdAt:new Date(),
        })
        await product.save();
        return await review.save();
        
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getAllReviews(productId){

    try {
        // const product = await productService.findProductById(productId);
        const reviews = await Review.find({ product: productId}).populate('user');
        return reviews;
        
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports = {
    getAllReviews,
    createReview
}