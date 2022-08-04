import React from 'react'
import Insta from '../../Images/instagram.svg'
import Facebook from '../../Images/facebook.svg'
import Twitter from '../../Images/twitter.svg'

const mainfooter = () => {
  return (
      <>
    <hr className='bold' style={{height:"4px",backgroundColor:"#E5E5E7"}}></hr>
    <footer className="aem-Grid aem-Grid--12 aem-Grid--phone--12 container main-footer">
    
           <>
          <div className="aem-Grid aem-Grid--12 aem-Grid--phone--12">
          <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
          <h6 className='foot-head'>Account</h6>
          <ul>
                <li>Sign In</li>
                <li>Register</li>
                <li>Order Status</li>
         </ul>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
          <h6 className='foot-head'>About Us</h6>
          <ul>
                <li>Our Story</li>
                <li>Careers</li>
          </ul>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
          <h6 className='foot-head'>Help</h6>
          <ul>
                <li>Contact Us</li>
                <li>Order Status</li>
                <li>Returns</li>
         </ul>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
          <h6 className='foot-head'>Follow Us</h6>
          <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</li>
                <li><img src={Insta} className="img1" alt='Insta'/>
                <img src={Facebook} className="img2" alt="Facebook"/>
                <img src={Twitter} className="img3" alt="Twitter"/>
                </li>
          </ul>
          </div>
          </div>
      </>
      </footer>
 </>
  )
}

export default mainfooter
