const cloudinary=require("cloudinary");

const uploadImageToCloudinary=async(req,res)=>{
   
 try {
    const result=await cloudinary.uploader.upload(file.path);
    return result.secure_url;
 } catch (error) {
    throw new Error("error in uploading image to cloudinary");
 }
}

module.exports={
    uploadImageToCloudinary
}