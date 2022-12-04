import mongoose from "mongoose";

export const PetitionsSchema = new mongoose.Schema({
    status:{
        type:String,
        required:true,
        trim:true
    },
    product:{
        type:String,
        required:true,
        trim:true
    },
    cost:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        trim:true
    },
})

export default mongoose.model('Petitions',PetitionsSchemaSchema);