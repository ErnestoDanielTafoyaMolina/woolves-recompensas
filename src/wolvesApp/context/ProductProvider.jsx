import { useContext, useEffect, useState } from "react"
import { createProductRequest, getProductsRequest } from "../../api/products";
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

  useEffect(() => {
    getProducts();
  }, []);  

  return (
    <ProductContext.Provider value={ {
      products,
      getProducts,
      createProduct,
    } }>
        {children}
    </ProductContext.Provider>
  )
}
