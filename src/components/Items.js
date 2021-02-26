import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import RatingStars from './RatingStars';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Items.css'
import ReactPaginate from 'react-paginate';


function Items({products}) {
    const [currentPage, setCurrentPage]= useState(0);
    const [itemsPerPage]= useState(6)

    const pagesVisited = currentPage * itemsPerPage;
    const paginatedItems = products.slice(pagesVisited, pagesVisited + itemsPerPage)
    const pageCount = Math.ceil(products.length / itemsPerPage)
    const changePage = ({selected}) =>{
        setCurrentPage(selected)
    }

    return (
        <div className='container'>
            <Container>
                <Row className='justify-content-md-center'>
                    {products && paginatedItems.map(item =>(
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
            <div className='row d-flex justify-content-center'>
                <ReactPaginate 
                    previousLabel={'Prev'}
                    nextLable={'Next'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'pagination mt-5 d-flex align-items-center'}
                    activeClassName={'activePage'}
                />
            </div>
        </div>
    )
}

export default Items;
