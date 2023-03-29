import mongoose from "mongoose";
import config from "../config";

export async function getConnection(){
    try {
        const db= await mongoose.connect(config.MONGO_URI);
        console.log(`Conectado a la base de datos ${db.connection.name}`);
    } catch (error) {
        console.error(error);
    }
}
