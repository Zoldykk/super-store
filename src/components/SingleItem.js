import Navigation from './Navigation';
import {useEffect, useState} from 'react';
import RatingStars from './RatingStars';
import './SingleItem.css'


function SingleItem(props) {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [quantity, setQuantity] = useState('')
    const [errors, setErrors] = useState(false)
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

    const validateOrder = () =>{
        if(quantity > product.stockCount || quantity === '' || !/^[1-9]+$/.test(quantity)){
            setErrors(true)
        }else{
            setErrors(false)
        }
    }

    return (
        <div>
            <Navigation />
            <div className='container'>
                {isLoading ? <h1 className='loading-msg'>Loading ...</h1> : 
                <div className="product">
                    <div className="product-img">
                        <img src={product.imageUrl} alt=""/>
                    </div>
                    <div className="product-info">
                        { errors &&
                        <div className="d-flex justify-content-center">
                            <div className="alert alert-danger col-md-12 col-sm-6" role="alert">
                                The requested quantity is not available.
                            </div> 
                        </div>
                        }
                        <h1 className='font-weight-bold'>{product.name}</h1>
                        <RatingStars rating={product.avgRating}/>
                        <hr/>
                        <p>{product.description}</p>
                        <span className='font-weight-bold'>{`$${product.price}`}</span>
                        <div className="quantity my-2 d-flex align-items-center">
                            <span className='m-2'>Quantity:</span> <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                            <span className='m-3'>Available Quantity: {product.stockCount}</span>
                        </div>
                        <button onClick={validateOrder} className='btn btn-warning my-2 font-weight-bold'>Add to Cart</button>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default SingleItem
