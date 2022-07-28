import React from 'react'
//import { handleAction } from '../../redux/counterSlice';

const PricingSummery = () => {
  return (
    <div>
      <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12  pricing-total'>
                    <h4>Pricing Summary</h4>
                    <p>Subtotal <span>$ </span></p>
                    <p>Coupon <span>- $ 77.60</span></p>
                    <p>Estimated tax <span>- $ 100.00</span></p>
                    <p>Estimated shipping <span>$ 23.28</span></p>
                    <p>Estimated shipping <span>FREE</span></p>
                    <p>Estimated Total <span>$ </span></p>
                    {/* <button className='Primary-brand'>CHECKOUT</button>
                    <div className='ppbtn'><img src={PPBTN} alt='button' /></div> */}

                </div>
    </div>
  )
}

export default PricingSummery
