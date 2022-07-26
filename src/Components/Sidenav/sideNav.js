import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

const SideNav = () => {
  const [data, setData] = useState([]);
  // const { id } = useParams();
  const fetchData = () => {
      fetch(`https://fakestoreapi.com/products/categories`)
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
    <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 sidenav'>
      <p>Clothing / Women’s / Outerwear</p>
      <h6 className='filter'>Filters</h6>
      <hr />
      <h6 className='attr'>Categories</h6>
      {data.map((category)=>{
        return(
          <>
            <label className="filter-container">{category}
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
          
          </>
        )
      })
      }
      
    </div>
  )
}

export default SideNav
