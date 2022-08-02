import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PaymentinfoDetails from './PaymentinfoDetails';
import ShippinginfoDetails from './shippinginfoDetails';
import ShipingmethodDetails from './ShipingmethodDetails';
import PricingSummery from './PricingSummery';

const ReviewOrder = () => {

    const cartData = useSelector((value) =>
        value.cart.item);

    return (
        <>
            <div className='aem-Grid aem-Grid--12  aem-Grid--phone--12'>
                <div className='aem-GridColumn aem-GridColumn--default--8 shippingInform'>
                    <ShippinginfoDetails />
                    <ShipingmethodDetails />
                    <PaymentinfoDetails />
                    <div className='aem-Grid aem-Grid--12  aem-Grid--phone--12' >
                        {cartData.map((value) => {

                            return (
                                <>

                                    <div className='aem-GridColumn aem-GridColumn--default--6  aem-Grid--phone--12'>

                                        <div className='aem-Grid aem-Grid--12  aem-Grid--phone--12' >
                                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--3 added-product'>

                                                <img src={value.image} alt='product' style={{ width: "100px", height: "120px" }} />
                                            </div>
                                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--9 ' style={{textAlign:"left"}}>

                                                <b>{value.title?.split(' ').slice(0, 3).join(' ')}</b>
                                                <p>size: medium</p> 
                                                <p>color: storm</p>
                                                {/* <p>${value.price}</p> */}
                                                <p> Quantity: {value.quantity} </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                    <NavLink to="/Order"><button style={{backgroundColor:" #E26A2C",color:"white",marginBottom:"2.4rem"}}>Place Order</button></NavLink>
                    <p style={{textAlign:"center",paddingBottom:"128px"}}>By clicking confirm order you agree to our <b style={{textDecoration:"underline"}}>Terms and Conditions</b></p>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--4'>
                    <PricingSummery />
                </div>
            </div>
        </>
    )
}

export default ReviewOrder
