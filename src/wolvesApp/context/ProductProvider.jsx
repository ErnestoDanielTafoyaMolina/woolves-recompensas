import { useContext, useEffect, useState } from "react"
import { createProductRequest, deleteProductById, getProductRequest, getProductsRequest, updateProductRequest } from "../../api/products";
import { ProductContext } from "./ProdutctContext";

export const useProduct = () => {
  const context = useContext(ProductContext);
  return context
}

export const ProductProvider = ({ children }) => {
  
  const [products, setProducts] = useState([]);

  const getProducts = async() => {
    const res = await getProductsRequest()
    setProducts(res.data);
  };

  const createProduct = async ( product ) => {
    
    const res = await createProductRequest( product );
    setProducts([...products,res.data]);
  }

  const deleteProduct = async id => {
    try {
      const res = await deleteProductById( id );
      if(res.status === 204){
        setProducts(products.filter( (product)  => product._id !==id));
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getProduct = async( id ) =>{
    try {
      const res = await getProductRequest(id);
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }

  const updateProduct = async (id, product) => {
    try {
      const res = await updateProductRequest(id, product);
      console.log(res);
      setProducts(products.map((product)=>(product._id === id ? res.data : product)));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);  

  return (
    <ProductContext.Provider 
    value={ {
      products,
      getProducts,
      createProduct,
      deleteProduct,
      getProduct,
      updateProduct
    } }>
        {children}
    </ProductContext.Provider>
  )
}
