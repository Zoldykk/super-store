import Navigation from './Navigation';
import useFetch from "../hooks/useFetch"
import {useEffect, useState} from 'react';

function SingleItem(props) {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
            fetch(`https://gp-super-store-api.herokuapp.com/item/${props.match.params.itemId}`)
            .then(res =>{
                return res.json()
            })
            .then(data =>{
                setProduct(data)
                setIsLoading(false)
            })
    }, [])
    return (
        <div>
            <Navigation />
            {product && <h1>{product._id}</h1>}
        </div>
    )
}

export default SingleItem
