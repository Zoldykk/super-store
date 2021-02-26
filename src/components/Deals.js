import Navigation from './Navigation';
import RatingStars from './RatingStars';
import {useEffect, useState} from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Items.css'
import useFetch from "../hooks/useFetch"
import {Link} from 'react-router-dom'


function Deals() {
    const [itemsOnSale, setItemsOnSale] = useState(null);
    const {data: products, isLoading} = useFetch('https://gp-super-store-api.herokuapp.com/item/list')
    useEffect(() => {
        if (products){
            const filteredProducts = products.filter(product => product.isOnSale == true) 
            setItemsOnSale(filteredProducts)
        } 
    }, [products])
    
    return (
        <div>
            <Navigation />
            <div className='container'>
            {isLoading && <h1 className='loading-msg'>Loading ...</h1>}
            <Container>
                <Row className='justify-content-md-center'>
                    {itemsOnSale && itemsOnSale.map(item =>(
                            <Col key={item._id} xs={12} lg={4} md={6} className='mt-5'>
                                <Card className='grid-item h-100'>
                                    <Card.Img className='img' variant="top" src={item.imageUrl} />
                                    <Card.Body>
                                        <Link to={`/item/${item._id}`}><Card.Title className='font-weight-bold text-dark'>{item.name}</Card.Title></Link>
                                        <Card.Text>
                                            <RatingStars rating={item.avgRating}/>
                                        </Card.Text>
                                        <Card.Title className='font-weight-bold'>{`$${item.price}`}</Card.Title>
                                    </Card.Body>
                                    <Card.Footer className='d-flex justify-content-center'>
                                        <Link to={`/item/${item._id}`}><Button variant="badge text-white badge-dark">View Item</Button></Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                    ))}
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default Deals;
