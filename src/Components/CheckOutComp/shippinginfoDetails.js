import React from 'react'
import Edit from "../../Images/edit-2 copy.svg"

const ShippinginfoDetails = () => {
    const localdata = JSON.parse(localStorage.getItem('form'));

    return (
        <div className='aem-Grid aem-Grid--12 shippingDetails'>
            <div className="aem-GridColumn aem-GridColumn--default--9">
            <h6>Shipping Information</h6>
        <div className='aem-Grid aem-Grid--12 '>
            <div className="aem-GridColumn aem-GridColumn--default--6 ">
                <p>{localdata.email}</p>
                <p>{localdata. phoneNumber}</p>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6">
                <p>{localdata.firstName} {localdata. lastName}</p>
                <p>{localdata.adress1} {localdata.Adree2} {localdata.city}</p>
                <p>{localdata.state} {localdata.zip}</p>
                <p>{localdata.country}</p>
            </div>
            
        </div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--3">
        <div style={{display:"inline-flex" }} className="edit"><img src={Edit} alt="Edit"/>&nbsp;&nbsp;<p>Edit</p></div>
        </div>
        </div>
    )
}

export default ShippinginfoDetails
