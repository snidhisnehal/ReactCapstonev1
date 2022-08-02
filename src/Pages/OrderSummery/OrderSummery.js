import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import PaymentInfo from '../../Components/CheckOutComp/PaymentInfo';
import PaymentinfoDetails from '../../Components/CheckOutComp/PaymentinfoDetails';
import ShipingmethodDetails from '../../Components/CheckOutComp/ShipingmethodDetails';
import ShippinginfoDetails from '../../Components/CheckOutComp/shippinginfoDetails';
import ShippingInform from '../../Components/CheckOutComp/ShippingInform';
import ShippingMethod from '../../Components/CheckOutComp/ShippingMethod';

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
                <div className="aem-GridColumn aem-GridColumn--default--8 shippingInform">

                    <h6>Order Number #1700834</h6>
                    <div className="aem-Grid aem-Grid--12 " >
                        <div className="aem-GridColumn aem-GridColumn--default--6">
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
                        <div className="aem-GridColumn aem-GridColumn--default--6">
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

                                    <div className='aem-GridColumn aem-GridColumn--default--6  aem-Grid--phone--12'>

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
                <div className="aem-GridColumn aem-GridColumn--default--4">
                    <div style={{ backgroundColor: "#FF8243",color:"white" ,width:"440px",height:"351px"}}>
                        <h5>Give us a follow to SAVE 20% on your next order.</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummery
