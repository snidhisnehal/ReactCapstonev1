import React from 'react'
import Edit from "../../Images/edit-2 copy.svg"


const ShipingmethodDetails = () => {
    const shipping = JSON.parse(localStorage.getItem('shippingMethode'));
    return (
        <div>
            <div className='aem-Grid aem-Grid--12 shippingDetails' style={{ marginTop: "1.6rem" }}>
            
                <div className="aem-GridColumn aem-GridColumn--default--4">
                <h6>Shipping Method</h6>
                    <p> {shipping} </p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--5"> <div style={{color:"white"}}> abc</div></div>
                <div className="aem-GridColumn aem-GridColumn--default--3">
                    <div style={{ display: "inline-flex" }} className="edit"><img src={Edit} alt="Edit" /><p>Edit</p></div>
                </div>
            </div>
        </div>
    )
}

export default ShipingmethodDetails
