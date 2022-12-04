import axios from "axios";


export const getProductsRequest = async() =>
 await axios.get('http://localhost:3001/api/products/available');

export const createProductRequest = async (product) =>{
     const form = new FormData();

     for( let key in product ){
        form.append(key, product[key]);
     }
     return await axios.post('http://localhost:3001/api/product',form,{
        headers: {
            "Content-Type": "multipart/form-data",
          },
     });
    }  

export const deleteProductById = async  id  =>
 await axios.delete(`http://localhost:3001/api/product/${id}`);

export const getProductRequest = async  id  =>
 await axios.get(`http://localhost:3001/api/product/${id}`);

export const updateProductRequest = async ( id, newFields ) =>{
    const form = new FormData();

    for( let key in newFields){
        form.append(key,newFields[key]);
    }
    return await axios.put(`http://localhost:3001/api/product/${id}`,form,{
        headers: {
            "Content-Type": "multipart/form-data",
          },
    });
}
 