import Navigation from './Navigation';
import Items from './Items';
import useFetch from "../hooks/useFetch"


function Home() {
    const {data: products, isLoading} = useFetch('https://gp-super-store-api.herokuapp.com/item/list')
    console.log(isLoading)
    return (
        <div>
            <Navigation />
            {isLoading ? <h1 className='loading-msg'>Loading ...</h1> : <Items isLoading={isLoading} products={products}/>}
        </div>
    )
}

export default Home;
