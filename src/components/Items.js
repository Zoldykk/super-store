import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import RatingStars from './RatingStars';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Items.css'
import ItemsPagination from './ItemsPagination'


function Items({products}) {
    return (
        <div className='container'>
            <Container className='grid'>
            {products && products.map(item =>(
                <Row key={item._id}>
                    <Col>
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
                </Row>
            ))}
            </Container>
            {/*<ItemsPagination />*/}
        </div>
    )
}

export default Items;
