import React, { useState } from 'react'
// import { useParams } from 'react-router-dom';

const SideNav = ({filterProduct}) => {
 // const [data, setData] = useState([]);
  const [isSelected, setisSelected] = useState(false);
  // const [products, setProducts] = useState([]);
  // const { id } = useParams();
//   const fetchData = () => {
//       fetch(`https://fakestoreapi.com/products/categories`)
//           .then(response => {
//               return response.json()
//           })
//          .then(data => {
//              setData(data)
//             //  setProducts(data);
//           })
//       console.log(data)
//   }



//   useEffect(() => {
//      fetchData()
//  }, [])

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
      {/* {data.map((category)=>{
        return(
          <>
            <label className="filter-container" htmlFor="chk1-label>{category}
                // <input type="checkbox"  />
                <input type="checkbox" id='chk1-label' aria-label="checkbox" onClick={()=>{ setisSelected(!isSelected);
        filterProduct("jewelery");}} />
                <span className="checkmark"></span>
            </label>
          
          </>
        )
      })
      } */}
      <div className='Attribute-first'>
      <h4>Categories</h4>
      
      <input type="checkbox" id='chk1-label' aria-label="checkbox" onClick={()=>{ setisSelected(!isSelected);
        filterProduct("jewelery");}} />
              <label htmlFor="chk1-label"> Jewellery</label><br />
              <input type="checkbox" id='chk2-label' aria-label="checkbox" onClick={()=>{ setisSelected(!isSelected);
        filterProduct("electronics");}}/>
              <label htmlFor="chk2-label">  Electronics</label><br />
              <input type="checkbox" id='chk3-label' aria-label="checkbox" onClick={()=>{ setisSelected(!isSelected);
        filterProduct("men's clothing");}}/>
              <label htmlFor='chk3-label'>  Men’s Clothing</label><br />
              <input type="checkbox" id='chk4-label' aria-label="checkbox" onClick={()=>{ setisSelected(!isSelected);
        filterProduct("women's clothing")}} />
              <label htmlFor='chk4-label'>Women’s Clothing</label><br />
      
        </div>
      
    </div>
  )
}

export default SideNav
