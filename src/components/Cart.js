import {useContext, useEffect, useState} from 'react'
import Navigation from './Navigation';
import {MovieContext} from './Contexts/ProductContext'
import './Styles/Cart.css'

function Cart() {
    const [cartProducts, setCartProducts] = useContext(MovieContext);
    const [quantity, setQuantity] = useState('')
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculateTotal = () =>{
            let cartTotal = [];
            let subTotal = 0;
            cartProducts.map(product =>{
                cartTotal.push(product.total)
            })
            cartTotal.map(number =>{
                subTotal += number
            })

            setTotal(subTotal)
        }
        calculateTotal()
    }, [cartProducts]);

    const removeItem = (e) =>{
        console.log(e.target.getAttribute('dataId'))
    }

    return (
        <div>
            <Navigation />
            <div className='container mt-5'>
                <div className='cart-header mb-4'>
                    <h2>Shopping Cart</h2>
                </div>
                {cartProducts.length === 0 ? <h1 className='text-center'>Your Cart is Empty!</h1> : <>
                    <div className="cart-items">
                        {cartProducts.map(product =>(
                            <div className='cart-item' key={product.id}>
                                <div className="image">
                                    <img src={product.imageUrl} alt=""/>
                                </div>
                                <div className="item-info">
                                    <div className="item-title">
                                        <span className='font-weight-bold'>{product.name}</span>
                                    </div>
                                    <div className="item-quantity">
                                        <span>Quantity:</span> 
                                        <input type="text" value={product.quantity} onChange={(e) => setQuantity(e.target.value)}/>
                                    </div>
                                    <div className="price">
                                        <span className='font-weight-bold'>{`$${product.price}`}</span>
                                    </div>
                                </div>
                                <div className="item-options">
                                    <button onClick={removeItem} dataId={product._id} className='btn btn-danger'>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-footer">
                        <button className='btn btn-warning font-weight-bold m-3'>Checkout</button>
                        <span className='font-weight-bold m-3'>{`$${total}`}</span>
                    </div>
                </>
                }
            </div>
        </div>
    )
}

export default Cart
