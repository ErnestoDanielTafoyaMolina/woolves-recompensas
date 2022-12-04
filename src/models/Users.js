import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    rol:{
        type:String,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    wp:{
        type:Number,
        required:true,
    },
})

export default mongoose.model('User',UserSchema);