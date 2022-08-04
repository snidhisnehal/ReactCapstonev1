import React, { useEffect, useState } from 'react'
import ShipingmethodDetails from './ShipingmethodDetails';
import ShippinginfoDetails from './shippinginfoDetails';
import PricingSummery from './PricingSummery';

const PaymentInfo = ({ acc2handler }) => {
  const initialValues = { username: "", email: "", number: "4567" };
  const [formValues, setFormValues] = useState(initialValues);
  const [ischecked, setIsChecked] = useState(" ");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    acc2handler();
  };
  React.useEffect(() => {
    localStorage.setItem('formPayment', JSON.stringify(formValues));
  }, [formValues]);
  React.useEffect(() => {
    localStorage.setItem('paymentMethode', JSON.stringify(ischecked));
  }, [ischecked]);
 
 
  return (
    <>
      <div className="aem-Grid aem-Grid--12 shippingInform">
        <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 pr-32'>
          <ShippinginfoDetails />
          <ShipingmethodDetails />

          <div className="aem-Grid aem-Grid--12">

            <form onSubmit={handleSubmit} >
              <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 paymentInfo' >
                <h6>3. Payment Information</h6>
                <input type="radio" id="html" name="html" value="Credit Card" defaultChecked={ischecked === "Credit Card"}
                  onClick={(e) => setIsChecked(e.target.value)} style={{width:"3%"}}/>
                <label>Credit Card</label><br />
                <label>Name on Card</label><br />
                <input type="textbox" /><br />
                <label for='number'>Credit Card Number</label><br />
                <input type="textbox" name="number" id="number" value={formValues.number} onChange={handleChange}/><br />
                <label>Expiration Date</label><br />
                <input type="textbox"
                  name="date"
                  placeholder="dd/mm/year"
                  value={formValues.date}
                  onChange={handleChange} /><br />
                <label>CVV</label><br />
                <input type="textbox" /><br />
                <div style={{borderTop:"1px solid #B5B7BC",borderBottom:"1px solid #B5B7BC"}} className="next">
                <input type="radio" id="html" name="html" value="PayPal" defaultChecked={ischecked === "PayPal"}
                  onClick={(e) => setIsChecked(e.target.value)}  style={{width:"3%"}}/>
                <label>PayPal</label>
                </div><br />
              </div>
              <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12' ></div>

              <button type='submit'><span className='desktop'>CONTINUE TO REVIEW ORDER</span><span className='mobile'>CONTINUE</span></button>

            </form>


          </div>
      

        </div>
        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12'>
          <PricingSummery />
        </div>
      </div>
    </>
  )
}

export default PaymentInfo
