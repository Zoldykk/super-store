import {Pagination} from 'react-bootstrap';

function ItemsPagination() {

    return (
        <div>
            <Pagination className='d-flex align-items-center col-12 justify-content-center mt-5'>
                <Pagination.First />
                <Pagination.Prev />
                    <span className='m-3'>1 - 5</span>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    )
}

export default ItemsPagination
