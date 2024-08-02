const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const studentSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    gender:String,
    password:String,
    confirmpassword:String
})

// signature- method of generating token
// here on the base of _id
studentSchema.methods.gennerateAuthToken=async function(){
    try{
        const token=jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
        return token;
    }
    catch(e){
        console.log(e);
    }
}

// pre is predefined method
studentSchema.pre('save',async function(next){
    this.password=await bcrypt.hash(this.password,10); //10 is salt // 10 layers of hashing
    this.confirmpassword=await bcrypt.hash(this.confirmpassword,10);
    next();

})
const Register= new mongoose.model('Register',studentSchema);

module.exports=Register;