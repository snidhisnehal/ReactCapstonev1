import React, { useEffect, useState } from 'react'

const SideNav = ({ filterProduct }) => {
  const [data, setData] = useState([]);
  const [isSelected, setisSelected] = useState(false);
  const [products, setProducts] = useState([]);
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
  }, [])



  return (
    <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 sidenav'>
      <p>Clothing / Women’s / Outerwear</p>
      <h6 className='filter'>Filters</h6>
      <hr />
      <h6 className='attr'>Categories</h6>

      {data.map((category) => {
        return (
          <>
            <div className='category' >
              <input type="checkbox" id='chk1-label' aria-label="checkbox" onClick={() => {
                setisSelected(!isSelected);
                filterProduct({ category })
              }} />
              <label htmlFor="chk1-label"> {category}</label><br />
            </div>
          </>
        )
      })}
    </div>
  )
}

export default SideNav
