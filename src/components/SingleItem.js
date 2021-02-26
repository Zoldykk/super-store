import Navigation from './Navigation';
import {useEffect, useState} from 'react';
import RatingStars from './RatingStars';
import {MovieContext} from '../contexts/ProductContext'
import {useContext} from 'react'
import './styles/SingleItem.css'


function SingleItem(props) {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [quantity, setQuantity] = useState('')
    const [errors, setErrors] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false)
    const [cartProducts, setCartProducts] = useContext(MovieContext)
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
            setSuccessMsg(true)
            setCartProducts(prevCartProducts => [...prevCartProducts, {_id: product._id, name: product.name, price: product.price, quantity: quantity, imageUrl: product.imageUrl, total: quantity * product.price}])
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
                        { successMsg &&
                        <div className="d-flex justify-content-center">
                            <div className="alert alert-success col-md-12 col-sm-6" role="alert">
                                Item added to cart!
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
