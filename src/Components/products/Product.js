import React from 'react'
import Card from './Card';


const Product = ({data,loading,onfilterChange}) => {


    return (<>
      
        
        <div className='aem-Grid aem-Grid--12 card-container'>
           {
          loading ? <h1 style={{fontSize:"62px"}}>Loading...</h1>:
          <>  
            
        
        <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 body-container'>
        <p>{data.length}Results</p>

       
        <select value="sort" onChange={onfilterChange} >
          <option>Sort by Latest</option>
          <option value="Lowest">low to high</option>
         
        </select>
        
      </div>
        <Card data={data} loading={loading} />
          
        </>}
        

      </div>
      </>
    )
}

export default Product
