const express=require("express");

const router=express.Router();

const reviewController=require("../controller/review.controller");

router.post("/reviews",reviewController.createReview);
router.get("/reviews",reviewController.getReviews);
router.put("/reviews/:id",reviewController.updateReview);
router.delete("/reviews/:id",reviewController.deleteReview);

module.exports=router