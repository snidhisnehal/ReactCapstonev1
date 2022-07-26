import React, { useEffect, useState } from 'react'
import Card from './Card';


const Product = () => {
    const [data, setData] = useState([]);
    // const [products, setProducts] = useState([]);
    const [loading, setloading] =useState(false)
    const fetchData = () => {
        setloading(true);
        fetch("https://fakestoreapi.com/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data);
                setloading(false);
                // setProducts(data);

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

      // const filterProduct =(cat)=> {
      //     const updatedList = data.filter((x)=>x.category === cat);
      //     console.log("men's clothing",updatedList);
      //    setProducts(updatedList);
      //   }

    return (<>
      
        
        <div className='aem-Grid aem-Grid--12 card-container'>
           {
          loading ? <h1 style={{fontSize:"62px"}}>Loading...</h1>:
          <>  
            
        
        <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 body-container'>
        <p>{data.length}Results</p>

       
        <select value onChange={onfilterChange} >
          <option>Sort by Latest</option>
          <option value="Lowest">low to high</option>
         
        </select>
        {/* <div className='Attribute-first'>
      <h4>Categories</h4>
      
       <input type="checkbox" aria-label="checkbox" onClick={()=>filterProduct("jewelery")}/>
       <label > Jewellery</label><br />
      <input type="checkbox" aria-label="checkbox" onClick={()=>filterProduct("electronics")}/>
      <label >  Electronics</label><br />
      <input type="checkbox" aria-label="checkbox" onClick={()=>filterProduct("men's clothing")} />
      <label >  Men’s Clothing</label><br />
      <input type="checkbox" aria-label="checkbox" onClick={()=>filterProduct("women's clothing")}/>
      <label >Women’s Clothing</label><br />
      
</div> */}
      </div>
        <Card data={data} loading={loading} />
          
        </>}
        

      </div>
      </>
    )
}

export default Product
