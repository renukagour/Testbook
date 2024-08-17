const express=require("express");
const categoryController=require("../controller/category.controller");
const router=express.Router();

router.post("/categories",categoryController.createCategory);
router.get("/categories",categoryController.getAllCategory);
router.put("/categories/:id",categoryController.updateCategoryById);
router.delete("/categories/:id",categoryController.deleteCategoryById);

module.exports=router;