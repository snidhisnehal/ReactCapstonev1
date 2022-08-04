import React, { useEffect, useState } from 'react'
import PricingSummery from './PricingSummery';
import ShippinginfoDetails from './shippinginfoDetails';

const ShippingMethod = ({ acc1handler }) => {
  const initialValues = {  email: " Standard Shipping Est. delivery in 4 - 8 business days FREE", };
  const [formValues, setFormValues] = useState(initialValues);
  const [ischecked, setIsChecked] = useState(" ");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    acc1handler();

  };
  React.useEffect(() => {
    localStorage.setItem('shippingMethode', JSON.stringify(ischecked));
  }, [ischecked]);
  console.log(ischecked);
  
 
  return (
    <>
      <div  className="aem-Grid aem-Grid--12 Shipping" >
        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 pr-32">
          
          <ShippinginfoDetails />
          <form onSubmit={handleSubmit}>
            <div className='aem-Grid aem-Grid--12 shippingInform '  >
              <h6>2. Shipping Method</h6>
              <div className='shipingMethode'>
              <input type="radio" id="email" name="email" value="Standard Shipping (4-8 business days via USPS) FREE" defaultChecked={ischecked === "Standard Shipping (4-8 business days via USPS) FREE"}
                onClick={(e) => setIsChecked(e.target.value)} />
              <label for="email">Standard Shipping (4-8 business days via USPS) FREE</label><br />
              <input type="radio" id="email" name="email" value="Express Delivery (2-5 business days via USPS) $17.95"
                defaultChecked={ischecked === "Express Delivery (2-5 business days via USPS) $17.95"}
                onClick={(e) => setIsChecked(e.target.value)}
              />
              <label for="email">Express Delivery (2-5 business days via USPS) $17.95</label><br />
              <input type="radio" id="email" name="email" value="Next Day Delivery (Next business days via FedEx) $53.61"
                defaultChecked={ischecked === "Next Day Delivery (Next business days via FedEx) $53.61"}
                onClick={(e) => setIsChecked(e.target.value)} />
              <label for="email">Next Day Delivery (Next business days via FedEx) $53.61</label><br />
              </div>
              <button type='submit'> <span className='desktop'>CONTINUE TO PAYMENT</span><span className='mobile'>CONTINUE</span> </button>
              <div className='next' style={{marginBottom:"12.8rem" ,borderTop:"1px solid gray"}}> 3. Payment Information </div>
            </div>
            
          </form>

        </div>
        
        <div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--phone--12">
          <PricingSummery />
        </div>
      </div>
    </>
  )
}

export default ShippingMethod
