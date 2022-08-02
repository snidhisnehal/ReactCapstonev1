import React, { useEffect, useState } from 'react'
import SideNav from '../Sidenav/sideNav'
import Product from './Product'

// import Pagination from "react-js-pagination"

const ProductCard = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false)
  const [products, setProducts] = useState([]);
  // const [isSelected, setisSelected] = useState(false);
  const fetchData = () => {
    setloading(true);
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data);
        setloading(false);
        setProducts(data);

      })
    console.log(data)
  }



  useEffect(() => {
    fetchData()
  }, [])

  const [sort,setSort] = useState();
  const onfilterChange = (filter) => {
     console.log("onfilter", sort);
     if (filter) {
       const result = data.sort((a, b) => a.price - b.price);
       return setSort(result);     
     }
     else {
       const result = data ;
       return setSort(result);
     }
   }

   const filterProduct = (cat) => {
    const updatedList = products.filter((x) => x.category === cat.category);
    console.log("categories", updatedList);
    // setProducts(updatedList);
    setData(updatedList);
    // console.log(filter);
  }
  
  return (
    <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 container'>
      <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn aem-GridColumn--phone--hide'><SideNav filterProduct={filterProduct} /></div>

      <div className='aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12'>
        

        {/* <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 body-container'>
          <p>38 Results</p>
          <select>
            <option>Sort by Latest</option>
            <option>Sort by price</option>
          </select>
        </div> */}
        
        <div className='aem-GridColumn aem-GridColumn--phone--6'>
        <Product data={data} loading={loading} products={products} onfilterChange={onfilterChange}/>
        
        </div>
      </div>
    </div>
  )
}

export default ProductCard
