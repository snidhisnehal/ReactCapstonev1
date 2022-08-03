import React, { useEffect, useState } from 'react'
import PricingSummery from './PricingSummery';

const ShippingInform = ({ acchandler }) => {

  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    // setIsSubmit(true);
    acchandler();
  };

  React.useEffect(() => {
    localStorage.setItem('form', JSON.stringify(formValues));
  }, [formValues]);

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
      {/* {isSubmit==false && ( */}
      <div className="aem-Grid aem-Grid--12 shippingInform" >
        
        <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 pr-32' >
        <h6>Contact information</h6>
        <p>We’ll use these details to keep you informed on your delivery.</p>
        <form onSubmit={handleSubmit}>
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 customer">
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 customer">
              <label for="phn">Phone Number</label>
              <input type="text"
                id="phn"
                placeholder="(222) 222-2222"
                name="phn"
                value={formValues.phn}
                onChange={handleChange} />
            </div>
          </div>
        </form >
        <h6>1. Shipping Information</h6>
        <form onSubmit={handleSubmit} >
          <div className="aem-Grid aem-Grid--12  ">
            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 customer' style={{display:"grid"}}>
            <label for="country">Country</label>
            <select value="select" >
              <option>United States</option>
              <option>India</option>
            </select>
            </div>
            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>

            </div>
            
          </div>
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 customer">
              <label>First Name</label>
              <input type="textbox"
                placeholder="FirstName"
                name="name"
                value={formValues.name}
                onChange={handleChange} />
              <label>Street Address</label>
              <input type="textbox"
                placeholder="streetAdress"
                name="adress"
                value={formValues.adress}
                onChange={handleChange} />
              <label>City</label>
              <input type="textbox"
                placeholder="city"
                name="city"
                value={formValues.city}
                onChange={handleChange} />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 customer">
              <div className='aem-Grid aem-Grid--12' style={{ display: "contents" }}>
                <label>Last Name</label>
                <input type="textbox"
                  placeholder="LasttName"
                  name="lname"
                  value={formValues.lname}
                  onChange={handleChange} />
              </div>
              <div className='aem-Grid aem-Grid--12' style={{ display: "contents" }}>
                <label>Street Address 2</label>
                <input type="textbox"
                  placeholder="Adree2"
                  name="adress2"
                  value={formValues.adress2}
                  onChange={handleChange} />
                
              </div>

              <div className='aem-Grid aem-Grid--12'  >
                <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                  <label style={{display:"block"}}>State</label>
                  <select value="select" style={{width: "-webkit-fill-available"}}>
                    <option>California</option>
                  </select>
                  
                </div>
                 
                <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12' style={{textAlign:"left"}}>
                  <label style={{display:"block"}}>ZIP</label>
                  <input type="textbox"
                    placeholder="Zipcode"
                    name="zip"
                    value={formValues.zip}
                    onChange={handleChange} style={{width: "-webkit-fill-available"}} />
                  
                </div>


              </div>
            </div>
          </div>
          <button type="submit"> <span className='desktop'>CONTINUE TO SHIPPING METHOD</span><span className='mobile'>CONTINUE</span></button>

         


        </form>
       
         <div className='next' style={{borderTop:"1px solid gray"}} > 2. Shipping Method </div>
          <div className='next' style={{marginBottom:"12.8rem"}}> 3. Payment Information </div>
      </div>
      <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12'>
        <div className="aem-Grid aem-Grid--12 sign-in">
          <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
          <h4>Sign in for Express Checkout</h4>
          </div>
          <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
            <button>SIGN IN</button>
          </div>
          
        </div>
        <PricingSummery/>
      </div>
      </div>
      

      {/* )}
    {
      isSubmit == true && ( */}


      {/* } */}


      {/* <div className="container">


        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <button className="fluid ui button blue">Submit</button>
          </div>
        </form>
        <div>{Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">
            <p>{formValues.email}</p><br />
            <p>{formValues.username}</p><br />
            <p>{formValues.password}</p>
          </div>
        ) : (
          <div>
            {JSON.stringify(formValues, undefined, 2)}
            </div>
        )}
        </div>
      </div> */}

    </>)
}

export default ShippingInform
