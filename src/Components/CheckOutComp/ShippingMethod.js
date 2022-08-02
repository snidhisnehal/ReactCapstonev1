import React, { useEffect, useState } from 'react'
import PricingSummery from './PricingSummery';
import ShippinginfoDetails from './shippinginfoDetails';

const ShippingMethod = ({ acc1handler }) => {
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
    acc1handler();

  };
  React.useEffect(() => {
    localStorage.setItem('shippingMethode', JSON.stringify(ischecked));
  }, [ischecked]);
  console.log(ischecked);
  useEffect(() => {
    console.log(formErrors);
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
      <div  className="aem-Grid aem-Grid--12" >
        <div className="aem-GridColumn aem-GridColumn--default--8">
          
          <ShippinginfoDetails />
          {/* {isSubmit == false && ( */}
          <form onSubmit={handleSubmit}>
            <div className='className="aem-Grid aem-Grid--12 shippingInform '  >
              <h6>2. Shipping Method</h6>
              <div className='shipingMethode'>
              <input type="radio" id="html" name="html" value="Standard Shipping (4-8 business days via USPS) FREE" defaultChecked={ischecked === "Standard Shipping (4-8 business days via USPS) FREE"}
                onClick={(e) => setIsChecked(e.target.value)} />
              <label for="html">Standard Shipping (4-8 business days via USPS) FREE</label><br />
              <input type="radio" id="email" name="email" value="Express Delivery (2-5 business days via USPS) $17.95"
                defaultChecked={ischecked === "Express Delivery (2-5 business days via USPS) $17.95"}
                onClick={(e) => setIsChecked(e.target.value)}
              />
              <label for="css">Express Delivery (2-5 business days via USPS) $17.95</label><br />
              <input type="radio" id="javascript" name="javascript" value="Next Day Delivery (Next business days via FedEx) $53.61"
                defaultChecked={ischecked === "Next Day Delivery (Next business days via FedEx) $53.61"}
                onClick={(e) => setIsChecked(e.target.value)} />
              <label for="javascript">Next Day Delivery (Next business days via FedEx) $53.61</label><br />
              </div>
              <button type='submit'> CONTINUE TO PAYMENT </button>
              <div className='next' style={{marginBottom:"12.8rem" ,borderTop:"1px solid gray"}}> 3. Payment Information </div>
            </div>
            
            {/* <div style={{textAlign:"left"}}><h2>3. Payment Information</h2></div> */}
          </form>

          
          {/* )}
        {
      isSubmit == true && ( */}
          {/* <div style={{textAlign:"left",border:"1px solid black" , marginBottom:"10px",padding:"30px 10px"}}>
          {ischecked}
        </div> */}

          {/* } */}
        </div>
        
        <div className="aem-GridColumn aem-GridColumn--default--4">
          <PricingSummery />
        </div>
      </div>
    </>
  )
}

export default ShippingMethod
