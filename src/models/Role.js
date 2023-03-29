import { Schema, model } from "mongoose";

const roleShcema = new Schema (
    {
        name:String,
    },
    {
        versionKey:false
    }

);

export default model("Role", roleShcema);