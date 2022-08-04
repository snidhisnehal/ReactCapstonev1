import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SingleItem from '../../Components/products/SingleItem';
import Footer from '../../Components/Footer/mainfooter'

const SingleProduct = () => {
   
     const [data, setData] = useState([]);
     const { id } = useParams();
     const fetchData = () => {
         fetch(`https://fakestoreapi.com/products/${id}`)
             .then(response => {
                 return response.json()
             })
            .then(data => {
                setData(data)
             })
         console.log(data)
     }



     useEffect(() => {
        fetchData()
    }, )
    return (
        <div>
           <SingleItem key={data.id} data={data} id={data.id} img={data.image} title={data.title} price={data.price} description={data.description}/>
           <Footer/>
        </div>
    )
};

export default SingleProduct
