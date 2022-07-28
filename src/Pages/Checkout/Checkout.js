import React from 'react'
import PricingSummery from '../../Components/CheckOutComp/PricingSummery'
import ShippingInform from '../../Components/CheckOutComp/ShippingInform'
import ShippingMethode from '../../Components/CheckOutComp/ShippingMethod'
import PaymentInfo from '../../Components/CheckOutComp/PaymentInfo'

const Checkout = () => {
  
  return (
    <div className="aem-Grid aem-Grid--12 container">
        <div className="aem-GridColumn aem-GridColumn--default--8">
            <ShippingInform/>
            <ShippingMethode/>
            <PaymentInfo/>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--4">
            <PricingSummery/>
        </div>
    </div>
  )
}

export default Checkout
