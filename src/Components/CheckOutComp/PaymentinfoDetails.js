import React from 'react'
import Edit from "../../Images/edit-2 copy.svg"


const PaymentinfoDetails = () => {
  const paymentdata = JSON.parse(localStorage.getItem('formPayment'));
  const paymentmethode = JSON.parse(localStorage.getItem('paymentMethode'));
  return (
    <div className='aem-Grid aem-Grid--12  aem-Grid--phone--12 shippingDetails' style={{marginTop:"2.4rem",marginBottom:"2.4rem"}}>
      <div className="aem-GridColumn aem-GridColumn--default--9">
      <h6>PaymentInfo</h6>
        <p>{paymentmethode}</p>
        <p>visa ending in {paymentdata.date} </p>
      </div>
      <div className="aem-GridColumn aem-GridColumn--default--3">
        <div style={{display:"inline-flex" }} className="edit"><img src={Edit} alt="Edit"/><p>Edit</p></div>
        </div>
    </div>
  )
}

export default PaymentinfoDetails
