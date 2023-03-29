// dependencies
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import fileUpload from "express-fileupload";

import config from './config';

//import routes
import userRouters from './routes/users.routes';
import petitionRoutes from './routes/petition.routes';
import productRoutes from './routes/product.routes';
import authRoutes from './routes/auth.routes';

import { createRoles } from "./libs/initialSetup";
//settings
const app = express();
createRoles();
app.set('port', config.PORT);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'./upload'
}));

//use routes
app.use(petitionRoutes);
app.use(productRoutes);
app.use(userRouters);
app.use(authRoutes);
//default route
app.use('/*',(req,res)=>res.status(404).send("bad route"));
export default app; 
