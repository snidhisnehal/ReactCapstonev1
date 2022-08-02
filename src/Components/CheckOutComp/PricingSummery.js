import React, { useEffect, useState } from 'react'
import { handleAction } from '../../redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const PricingSummery = () => {
  const dispatch = useDispatch();
    const totalAmount = useSelector((state) => state.cart.cartTotalAmount);

    useEffect(() => {
        dispatch(handleAction.cartCatculation())

    }, [totalAmount, dispatch])
  return (
    <div>
      
      <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12  pricing-total'>
                    <h4>Pricing Summary</h4>
                    <p>Subtotal <span>${totalAmount} </span></p>
                    <p>Coupon <span>- $ 77.60</span></p>
                    <p>Estimated tax <span>- $ 100.00</span></p>
                    <p>Estimated shipping <span>$ 23.28</span></p>
                    <p>Estimated shipping <span>FREE</span></p>
                    <p>Estimated Total <span>$ {totalAmount}</span></p>
                    {/* <button className='Primary-brand'>CHECKOUT</button>
                    <div className='ppbtn'><img src={PPBTN} alt='button' /></div> */}

                </div>
    </div>
  )
}

export default PricingSummery
