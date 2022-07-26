import React from 'react'
import SideNav from '../Sidenav/sideNav'
import Product from './Product'

// import Pagination from "react-js-pagination"

const ProductCard = () => {
  
  
  return (
    <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 container'>
      <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn aem-GridColumn--phone--hide'><SideNav /></div>

      <div className='aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12'>
        

        {/* <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 body-container'>
          <p>38 Results</p>
          <select>
            <option>Sort by Latest</option>
            <option>Sort by price</option>
          </select>
        </div> */}
        
        <div className='aem-GridColumn aem-GridColumn--phone--6'>
        <Product />
        
        </div>
      </div>
    </div>
  )
}

export default ProductCard
