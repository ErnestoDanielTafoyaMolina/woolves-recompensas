import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    product:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    image:{
        url:String,
        public_id:String
    }
})

export default mongoose.model('Product',ProductSchema);