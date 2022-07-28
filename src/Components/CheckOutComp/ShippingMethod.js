import React from 'react'

const ShippingMethod = () => {
    return (
        <div className=' className="aem-Grid aem-Grid--12 shippingInform ' style={{border:"1px solid black" , marginBottom:"10px",padding:"10px"}}>
            <h6>2. Shipping Method</h6>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">Standard Shipping (4-8 business days via USPS) FREE</label><br />
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label for="css">Express Delivery (2-5 business days via USPS) $17.95</label><br />
            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
            <label for="javascript">Next Day Delivery (Next business days via FedEx) $53.61</label><br/>
            <button> CONTINUE TO PAYMENT </button>
        </div>
    )
}

export default ShippingMethod
