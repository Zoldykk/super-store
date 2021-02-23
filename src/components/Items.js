import {Card, Button, CardDeck, Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import RatingStars from './RatingStars';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Items.css'

function Items({products, isLoading}) {
    return (
        <div className='container'>
            <Container className='grid'>
            {products.map(item =>(
                <Row>
                    <Col>
                        <Card className='grid-item h-100'>
                            <Card.Img className='img' variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    <RatingStars rating={item.avgRating}/>
                                </Card.Text>
                                <Card.Title>{`$${item.price}`}</Card.Title>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-center'>
                                <Link to={`/item/${item._id}`}><Button variant="badge text-white badge-dark">View Item</Button></Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            ))}
            </Container>
        </div>
    )
}

export default Items;
