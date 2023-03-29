import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';
const userSchema= new Schema ({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    roles:[{
        ref:"Role",
        type:Schema.Types.ObjectId
    }]
},{
    timestamps:true,
    versionKey:false
});
userSchema.statics.encryptPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}

userSchema.statics.comparePassword = async(password, recivedPassword)=>{
    return await bcrypt.compare(password, recivedPassword);
}
export default model('User', userSchema);