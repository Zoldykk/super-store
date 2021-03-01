import {useState, createContext} from 'react'; 

export const ProductContext = createContext()

export const ProductProvider = (props) =>{
    const [cartProducts, setCartProducts] = useState([])

    return(
        <ProductContext.Provider value={[cartProducts, setCartProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}