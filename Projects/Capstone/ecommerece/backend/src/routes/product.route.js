const express=require("express");

const router=express.Router();

const productController=require("../controller/product.controller");

const upload=require("../middleware/multer");

// single used because we are uploading single file
router.post("/products",upload.single("image"),productController.createProduct);
router.get("/products",productController.getAllProducts);
router.get("/products/:id",productController.getProductById);
router.put("/products/:id",upload.single("image"),productController.updateProduct);
router.delete("/products/:id",productController.deleteProduct);


module.exports=router