import Navigation from './Navigation';
import Items from './Items';
import Search from './Search'
import useFetch from "../hooks/useFetch"
import {useState} from 'react';


function Home() {
    const {data: products, isLoading, setData} = useFetch('https://gp-super-store-api.herokuapp.com/item/list')
    const [error, setError] = useState(false)
    
    const handleSearch = (query) =>{
        if(query === ''){
            setData(products)
            console.log(products)
        }
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
        if(filteredProducts.length <= 0){
            setError(true)
            setData([])
        }else{
            setError(false)
            setData(filteredProducts)
        }
    }

    return (
        <div>
            <Navigation />
            <Search error={error} getSearchvalue={handleSearch} />
            {isLoading ? <h1 className='loading-msg'>Loading ... </h1> : <Items isLoading={isLoading} products={products}/>}
        </div>
    )
}

export default Home;
