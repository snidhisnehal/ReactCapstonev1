import React, { useEffect, useState } from 'react'
import PricingSummery from './PricingSummery';

const ShippingInform = ({ acchandler }) => {

  const initialValues = { email: "abc@xyz.com" , 
   phoneNumber:"+1 (555) 229-3367",
  country:"United States",
  firstName:"Qadim",
  lastName:"Farhan",
  adress1:"1098",
  Adree2:"Wapello",
  state :"California",
  city:"Street",
  zip:"91001",};
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    acchandler();
  };

  React.useEffect(() => {
    localStorage.setItem('form', JSON.stringify(formValues));
  }, [formValues]);

  
  
  return (
    <>
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
                // placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 customer">
              <label for=" phoneNumber">Phone Number</label>
              <input type="text"
                id=" phoneNumber"
                placeholder="(222) 222-2222"
                name=" phoneNumber"
                value={formValues. phoneNumber}
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
              <label for=" firstName">First Name</label>
              <input type="textbox"
                placeholder="FirstName"
                id=" firstName"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange} />
              <label for="adress1">Street Address</label>
              <input type="textbox"
                // placeholder="streetAdress"
                id="adress1"
                name="adress1"
                value={formValues.adress1}
                onChange={handleChange} />
              <label for="city">City</label>
              <input type="textbox"
                placeholder="city"
                name="city"
                id="city"
                value={formValues.city}
                onChange={handleChange} />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 customer">
              <div className='aem-Grid aem-Grid--12' style={{ display: "contents" }}>
                <label for=" lastName">Last Name</label>
                <input type="textbox"
                  placeholder="LasttName"
                  name=" lastName"
                  id=" lastName"
                  value={formValues. lastName}
                  onChange={handleChange} />
              </div>
              <div className='aem-Grid aem-Grid--12' style={{ display: "contents" }}>
                <label for="Adree2">Street Address 2</label>
                <input type="textbox"
                  placeholder="Adree2"
                  id="Adree2"
                  name="Adree2"
                  value={formValues.Adree2}
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
      



      

    </>)
}

export default ShippingInform
