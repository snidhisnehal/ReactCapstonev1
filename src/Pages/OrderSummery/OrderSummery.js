import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Instagram from '../../Images/instagram copy.svg';
import Face from '../../Images/facebook copy.svg';
import Twitt from '../../Images/twitter copy.svg';
const OrderSummery = () => {
    // const [ischecked, setIsChecked] = useState(" ");
    const cartData = useSelector((value) =>
        value.cart.item);

    const localdata = JSON.parse(localStorage.getItem('form'));
    const shipping = JSON.parse(localStorage.getItem('shippingMethode'));
    const paymentdata = JSON.parse(localStorage.getItem('formPayment'));
    const paymentmethode = JSON.parse(localStorage.getItem('paymentMethode'));
    return (
        <>
            <h1>Order Successful!</h1>
            <div className="aem-Grid aem-Grid--12 container">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 shippingInform">

                    <h6>Order Number #1700834</h6>
                    <div className="aem-Grid aem-Grid--12 " >
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            {/* <ShippinginfoDetails /> */}
                            <h6>Shipping Information</h6>
                            <div>
                                <p>{localdata.email}</p>
                                <p>{localdata.phn}</p>
                            </div>
                            <div>
                                <p>{localdata.name} {localdata.lname}</p>
                                <p>{localdata.adress} {localdata.city} {localdata.zip}</p>
                                <p>{localdata.city}</p>
                                <p>{localdata.zip}</p>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            {/* <ShipingmethodDetails /> */}

                            {/* <PaymentinfoDetails /> */}
                            <div>
                                <h6>Shipping Method</h6>
                                <p> {shipping} </p>
                            </div>
                            <div>
                                <h6>PaymentInfo</h6>
                                <p>{paymentmethode}</p>
                                <p>visa ending in {paymentdata.date} </p>
                            </div>
                        </div>
                    </div>

                    <div className='aem-Grid aem-Grid--12 cart-products aem-Grid--phone--12' style={{ marginTop: "3.4rem", textAlign: "left" }}>
                        {cartData.map((value) => {

                            return (
                                <>

                                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-Grid--phone--12'>

                                        <div className='aem-Grid aem-Grid--12  aem-Grid--phone--12' >
                                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--6 added-product'>

                                                <img src={value.image} alt='product' style={{ width: "100px", height: "120px" }} />
                                            </div>
                                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--6 '>

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
                    </div><br/><br/>
                    <p>You will also receive an email with the details and we will let you know when your order has shipped.</p><br/><br/>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p><br/><br/><br/><br/>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--phone--12 offer" >
                    <div>
                        <h5>Give us a follow to SAVE 20% on your next order.</h5>
                        <div style={{marginTop:"40.3px", padding:"30px"}}><img src={Instagram} alt="Instagram" style={{width:"49px",height:"49px",padding:"5px"}}/> &nbsp; &nbsp; &nbsp;
                        <img src={Face} alt="facebook" style={{width:"49px",height:"49px",padding:"5px"}}/> &nbsp; &nbsp; &nbsp;
                        <img src={Twitt} alt="Twitter" style={{width:"49px",height:"49px",padding:"5px"}}/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummery
