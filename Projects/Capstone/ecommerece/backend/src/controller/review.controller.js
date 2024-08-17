const Review = require("../model/review.model");

// in reviews we can only update rating and comment not userId or productId
const createReview = async (req, res) => {
    try {
        const { productId, userId, rating, comment } = req.body;

        const review = new Review({
            productId, userId, rating, comment
        });
        const savedReview = await review.save();
        const newReview = await Review.findById(savedReview._id).populate("userId");

        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getReviews = async (req, res) => {

    try {
        const productId = req.query.productId;

        const review = await Review.find({ productId }).populate("userId");
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateReview= async (req, res) => { 
    try {
        const {rating,comment}=req.body;
        const reviewId=req.params.id;
        const updatereview = await Review.findByIdAndUpdate(reviewId, { rating,comment }, { new: true });

        if (!updatereview) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.status(201).json(updatereview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const deletereview = await Review.findByIdAndDelete(reviewId);

        if (!deletereview) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
 };

module.exports = {
    createReview,
    getReviews,
    updateReview,
    deleteReview
}