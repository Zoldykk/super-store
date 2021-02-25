import {useState, createContext} from 'react'; 

export const MovieContext = createContext()

export const MovieProvider = (props) =>{
    const [cartProducts, setCartProducts] = useState([])

    return(
        <MovieContext.Provider value={[cartProducts, setCartProducts]}>
            {props.children}
        </MovieContext.Provider>
    )
}