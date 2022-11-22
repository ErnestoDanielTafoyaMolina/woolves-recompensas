import { ProductContext } from "./ProdutctContext"

const Products = {

}

export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={ Products }>
        {children}
    </ProductContext.Provider>
  )
}
