import React from 'react'
import { Link } from 'react-router-dom'
import Heart from '../../Images/heart.svg'
import Pagination from 'react-js-pagination';
import { useState } from "react";
import sliders from '../../Images/sliders.svg';
import uparrow from '../../Images/arrow-up.svg';
import downarrow from '../../Images/arrow-down.svg';





export default function Card({ data }) {
 

  const [page, setPage] = useState(1);

  const [cardsPerPage] = useState(9);

  const lastcardIndex = page * cardsPerPage;
  const firstcardIndex = lastcardIndex - cardsPerPage;
  const currentData = data.slice(firstcardIndex, lastcardIndex);

  const paginate = pageNumber => setPage(pageNumber);
  console.log(currentData);
  
  

  
  return (
    <>
      
      <div className='filter-body'>
        <p>Clothing / Women’s / Outerwear</p>
        <div className='Filter'>
          <figure> <img src={sliders} alt='slider' />Filter Results</figure>
          <figure> <img src={uparrow} alt='up-arrow' /> <img src={downarrow} alt='down-arrow' />Sort Products</figure>

        </div>
        <p className='product-count'>{data.length}Results</p>
      </div>
      

      {currentData.map((prod) => {
        let productTitle = prod.title.split(' ').slice(0, 3).join(' ');
        let id = prod.id;
        return (
          <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6 aem-GridColumn--tablet--6 card '>
            <Link to={`/products/${id}`} className="product-text">
              <div className='product-image'>
                <img src={prod.image} alt="cardimage" />
              </div>
              <div className='product-details'>
                <b className='product-title'>{productTitle}</b>
                <p className='product-price'>${prod.price}</p>
                <img className='fav_icon' src={Heart} alt="Heartsvgimage" />
              </div>
            </Link>

          </div>)
      })}
     
      <div className='aem-Grid aem-Grid--12 pagination'>
        <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12'>
        <Pagination
          activePage={page}
          itemsCountPerPage={9}
          totalItemsCount={data.length}
          pageRangeDisplayed={5}
          onChange={paginate}
        />
        </div>
      </div>
    </>
  )
}


