import React, { useEffect, useState } from 'react'
import ShipingmethodDetails from './ShipingmethodDetails';
import ShippingMethod from './ShippingMethod';
import ShippinginfoDetails from './shippinginfoDetails';
import PricingSummery from './PricingSummery';

const PaymentInfo = ({ acc2handler }) => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [ischecked, setIsChecked] = useState(" ");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    // setIsSubmit(true);
    acc2handler();
  };
  React.useEffect(() => {
    localStorage.setItem('formPayment', JSON.stringify(formValues));
  }, [formValues]);
  React.useEffect(() => {
    localStorage.setItem('paymentMethode', JSON.stringify(ischecked));
  }, [ischecked]);
  useEffect(() => {
    // console.log(formErrors);
    // if (Object.keys(formErrors).length === 0 && isSubmit) {
    //   console.log(formValues);
    // }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <>
      <div className="aem-Grid aem-Grid--12 shippingInform">
        <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 pr-32'>
          <ShippinginfoDetails />
          <ShipingmethodDetails />

          {/* {isSubmit == false && ( */}
          <div className="aem-Grid aem-Grid--12">

            <form onSubmit={handleSubmit} >
              <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 paymentInfo' >
                <h6>3. Payment Information</h6>
                <input type="radio" id="html" name="html" value="Credit Card" defaultChecked={ischecked === "Credit Card"}
                  onClick={(e) => setIsChecked(e.target.value)} style={{width:"3%"}}/>
                <label>Credit Card</label><br />
                <label>Name on Card</label><br />
                <input type="textbox" /><br />
                <label>Credit Card Number</label><br />
                <input type="textbox" /><br />
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
          {/* )}
      {
      isSubmit == true && ( */}
          {/* <div style={{textAlign:"left",border:"1px solid black" , marginBottom:"10px",padding:"30px 10px"}}>
        <h2>PaymentInfo</h2>
        <p>{ischecked}</p>
        <>expiry date {formValues.date} </>
      </div> */}

          {/* } */}

        </div>
        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12'>
          <PricingSummery />
        </div>
      </div>
    </>
  )
}

export default PaymentInfo
