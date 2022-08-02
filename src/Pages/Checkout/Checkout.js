import React,{useState} from 'react'
import PricingSummery from '../../Components/CheckOutComp/PricingSummery'
import ShippingInform from '../../Components/CheckOutComp/ShippingInform'
import ShippingMethode from '../../Components/CheckOutComp/ShippingMethod'
import PaymentInfo from '../../Components/CheckOutComp/PaymentInfo'
import ReviewOrder from '../../Components/CheckOutComp/ReviewOrder'

const Checkout = () => {
  const [isSubmit, setIsSubmit] = useState(true);
  const [isDeatils,setIsdetails] = useState(false);
  const [ismethode,setIsmethode] = useState(false);
  const [isorder,setIsorder] =useState(false)
 const acchandler =()=>{
   setIsSubmit(!isSubmit);
   setIsdetails(!isDeatils)
 }
 const acc1handler =()=>{
  setIsdetails(!isDeatils)
  setIsmethode(!ismethode)
}
const acc2handler =()=>{
  setIsmethode(!ismethode);
  setIsorder(!isorder)
} 
 

  return (
    <div className="aem-Grid aem-Grid--12 container Checkout">
       <h2>Checkout</h2>
       <div className='checkoutBar'></div>
       <h3>Guest Checkout</h3>
        <div className="aem-GridColumn aem-GridColumn--default--12">
          {isSubmit && <ShippingInform  acchandler={ acchandler}/>
          }
           {
             isDeatils &&  <ShippingMethode   acc1handler={ acc1handler}/>
           } 
           { ismethode &&  <PaymentInfo  acc2handler={acc2handler} />

           }
            {
              isorder && <ReviewOrder />
            }
            
        </div>
        {/* <div className="aem-GridColumn aem-GridColumn--default--4">
            <PricingSummery/>
        </div> */}
    </div>
  )
}

export default Checkout
