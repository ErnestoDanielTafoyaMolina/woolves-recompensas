//dependencias
import express, { urlencoded } from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import morgan from "morgan";
const app = express();

//importacion de rutas
import userRoutes from './routes/users.routes';
import productRoutes from './routes/products.routes';

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express(urlencoded({ extended:false })));
app.use(express.json());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'./upload'
}));

//rutas
app.use("/api",userRoutes);
app.use("/api",productRoutes)

//Ruta por defecto
app.use("/*",(req,res)=>res.send("El backend si jala, pero la ruta que especificaste no está asi que es un error 404 XD"))
export default app;