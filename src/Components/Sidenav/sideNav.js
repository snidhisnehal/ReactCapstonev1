import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

const SideNav = () => {
  const [data, setData] = useState([]);
  // const [products, setProducts] = useState([]);
  // const { id } = useParams();
  const fetchData = () => {
      fetch(`https://fakestoreapi.com/products/categories`)
          .then(response => {
              return response.json()
          })
         .then(data => {
             setData(data)
            //  setProducts(data);
          })
      console.log(data)
  }



  useEffect(() => {
     fetchData()
 }, )

//  const filterProduct =(cat)=> {
//   const updatedList = data.filter((x)=>x.category === cat);
//   console.log("men's clothing",updatedList);
//  setProducts(updatedList);
// setFilter(updatedList);
// }

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
                <input type="checkbox"  />
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
