import Product from "../models/Products";
import { uploadImage } from "../libs/cloudinary";
import fs from 'fs-extra'
//obtiene todos los productos
export const getAllProducts = async (req,res) => {
    try {
        const allProducts = await Product.find();
        res.send(allProducts);
    } catch (error) {
        return res.status(500).json({ message:error.message });
    }
}
//obtiene solo los productos disponibles
export const getAvailableProducts = async(req, res) =>{
    try {
        const AvailableProducts = await Product.find({ "state":"available" })
        res.send(AvailableProducts);
    } catch (error) {
        return res.status(500).json({ message:error.message }); 
    }
}
//obtiene los productos no disponibles
export const getUnavailableProducts = async(req, res)=> {
    try {
        const UnailableProducts = await Product.find({ "state":"unavailable" })
        res.send(UnailableProducts);
    } catch (error) {
        return res.status(500).json({ message:error.message });
    }
}
//obtiene el producto por id
export const getProductById = (req,res) => {
    try {
        res.send("Aqui solo habrá un producto por Id");
    } catch (error) {
        return res.status(500).json({ message:error.message });
    }
}
//añade un nuevo producto
export const addProduct = async (req, res) => {
    try {
        const { product, description, price, state } = req.body;
        let image;
        if(req.files?.image){
            const result = await uploadImage(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath);
            image = {
                url:result.secure_url,
                public_id:result.public_id
            }
            
        }
        const NewProduct = new Product ( {product, description, price, state, image } );
    
        await NewProduct.save()
        return res.send(NewProduct);
    } catch (error) {
        return res.status(500).json({ message:error.message });
    }
}
//pone como no disponible un producto
export const deleteProductById = async(req, res) => {
    try {
        const ProductRemoved = await Product.findByIdAndUpdate(req.params.id, { state:"unavailable" }, { new:true });
        console.log("Se ha eliminao el producto");
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message:error.message });
    }
}
//edita la informacion de un producto
export const editProductById = async(req,res) => {
    try {
        const post = await Product.findByIdAndUpdate(req.params.id, req.body, { new:true });
        console.log(post)
        return res.send("Recivido") 
    } catch (error) {
        return res.status(500).json({ message:error.message });
    }
}