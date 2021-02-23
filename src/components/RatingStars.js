import StarsRating from 'stars-rating'
function Rating({rating}) {
    return (
        <div>
            <StarsRating
                half={true}
                count={5}
                edit={false}
                value={rating}
                size={24}
                color2={'#ffd700'} 
            />
            
        </div>
    )
}

export default Rating
