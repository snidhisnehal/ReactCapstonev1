import React, { useEffect, useState } from 'react'

const ShippingInform = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [show, setIsshow] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
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
    <> {isSubmit==false && (
      <div className="aem-Grid aem-Grid--12 shippingInform" style={{border:"1px solid black" , marginBottom:"10px",padding:"10px"}}>
        <h6>Contact information</h6>
        <p>We’ll use these details to keep you informed on your delivery.</p>
        <form onSubmit={handleSubmit}>
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--6 customer">
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 customer">
              <label for="phn">Phone Number</label>
              <input type="text"
                id="phn"
                placeholder="(222) 222-2222"
                name="phn"
                value={formValues.phn}
                onChange={handleChange} />
            </div>
          </div>
        </form>
        <h6>1. Shipping Information</h6>
        <form onSubmit={handleSubmit}>
          <div className="aem-Grid aem-Grid--12 customer country">
            <label for="country">Country</label>
            <select value="select" >
              <option>United States</option>
              <option>India</option>
            </select>
          </div>
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--6 customer">
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
            <div className="aem-GridColumn aem-GridColumn--default--6 customer">
              <label>Last Name</label>
              <input type="textbox"
                placeholder="LasttName"
                name="lname"
                value={formValues.lname}
                onChange={handleChange} />
              <label>Street Address 2</label>
              <input type="textbox"
                placeholder="Adree2"
                name="adress2"
                value={formValues.adress2}
                onChange={handleChange} />
              <label>State</label>
              <div>
                <select value="select" >
                  <option>California</option>
                </select>
                <label>ZIP</label>
                <input type="textbox"
                  placeholder="Zipcode"
                  name="zip"
                  value={formValues.zip}
                  onChange={handleChange} />
              </div>
            </div>
          </div>
          <button> CONTINUE TO SHIPPING METHOD</button>
          {/* <button className="fluid ui button blue">Submit</button> */}
          
        </form>
        <div>
          <h6>Shipping Information</h6>
          

        </div>
      </div>
    )}
    {
      isSubmit == true && (
         <div>
            <div className='aem-Grid aem-Grid--12' style={{border:"1px solid black" , marginBottom:"10px",padding:"10px"}}>
              <div className="aem-GridColumn aem-GridColumn--default--6 ">
                <p>{formValues.email}</p>
                <p>{formValues.phn}</p>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--6 ">
              <p>{formValues.name} {formValues.lname}</p>
              <p>{formValues.adress} {formValues.city} {formValues.zip}</p>
              <p>{formValues.city}</p>
              <p>{formValues.zip}</p>
              </div>
            </div>
                 </div> 
      )
    }
      

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
