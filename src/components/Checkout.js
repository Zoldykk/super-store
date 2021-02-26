import Navigation from './Navigation';
import {Link} from 'react-router-dom'

function Checkout() {
    return (
        <div>
            <Navigation />
            <div className="container d-flex flex-column text-center justify-content-center align-items-center mt-5">
                <h1>Thank you for your purchase!</h1>
                <p>Your order will be on its way shortly. In the mean time, please feel free to continue shopping</p>
                <Link to='/'><button className='btn btn-light'>Return to Home</button></Link>
            </div>
        </div>
    )
}

export default Checkout
