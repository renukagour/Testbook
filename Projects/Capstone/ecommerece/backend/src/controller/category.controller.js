const Category = require('../model/category.model')
const createCategory=async(req,res)=>{

    try {
        const {name}=req.body;

        const category = new Category({name});
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message});
    }
}

const getAllCategory=async(req,res)=>{
    try {
        
        const categories=await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const updateCategoryById=async(req,res)=>{
    try {
        const {id}=req.params;
        const {name}=req.body;

        const category=await Category.findById(id);

        //check if category exist
        if(!category){
            res.status(404).json({message:"category not found"});
        }

        //update category if exist
        category.name=name;
        await category.save();
        res.status(200).json(category);

       
    } catch (error) {
        res.status(500).json({message:error.message});
    }    
}

const deleteCategoryById=async(req,res)=>{
    try {
        const {id}=req.params;
        const category=await Category.findById(id);

        //check if category exist
        if(!category){
            res.status(404).json({message:"category not found"});
        }

        //delete category
        await category.deleteOne();
        res.json({message:"category deleted successfully"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports={
   createCategory,
   getAllCategory,
   updateCategoryById,
   deleteCategoryById
}