import {useEffect, useState} from 'react';

const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            setData(data.items)
            setIsLoading(false)
        })
    }, [])
    return {data, isLoading, setData} 
}

export default useFetch;