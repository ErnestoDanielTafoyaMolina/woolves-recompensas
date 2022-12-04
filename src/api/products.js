import axios from "axios";

export const getProductsRequest = async() => await axios.get('http://localhost:3001/api/products/available')

export const createProductRequest = async (product) => await axios.post('http://localhost:3001/api/product',product)