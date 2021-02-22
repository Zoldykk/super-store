import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, NavLink} from 'react-router-dom'
import './Nav.css'

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link className='text-light text-decoration-none' to='/'>Super Store</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse  id="responsive-navbar-nav">
                <Nav className='ml-auto'>
                    <Nav.Link ><NavLink exact className='text-light text-decoration-none' activeClassName="active" to='/'>Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink className='text-light text-decoration-none' activeClassName="active" to='/deals'>Deals</NavLink></Nav.Link>
                    <Nav.Link><NavLink className='text-light text-decoration-none cart' activeClassName="active" to='/cart'>Cart <i class="fas fa-shopping-cart"></i><span class='badge badge-warning' id='lblCartCount'> 5 </span></NavLink></Nav.Link>    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
