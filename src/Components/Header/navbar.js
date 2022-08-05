import React from 'react';
import { List } from '../Data/data';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Toggle from '../../Images/align-justify.svg';

const Navbar = () => {
  const cartCounter = useSelector((value) => {
    return value.cart.item
  });
  const totalCartItem = cartCounter.length;
  console.log(totalCartItem);

  return (
    <>
      <nav className="aem-Grid aem-Grid--12">
        <div className="aem-Grid aem-Grid--12 container">

          {
            List.map((prop) => {
              return (
                <>
                  <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--2 logo-align aem-GridColumn--phone--6">

                    <a className='toggle ' href="/" style={{ paddingTop: "2px", paddingRight: "47px" }}>
                      <img src={Toggle} alt="Toogle" style={{ width: "20px", height: "20px" }} />

                    </a>
                    <NavLink to='/' style={{ textDecoration: "none" }}>
                      {/* <img src={prop.Logo} alt="Logo" className='logo' /> */}
                      <h4 className='logo'>VENIA</h4>
                    </NavLink>
                  </div>
                  <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--hide main-menu">
                    <ul style={{paddingBottom:"1.2rem"}}>
                      <li><NavLink to='/'>{prop.nav1}</NavLink></li> 
                      <li><NavLink to="/product/womenclothing">{prop.nav2}</NavLink></li> 
                      <li><NavLink to="/product/menclothing">{prop.nav3}</NavLink></li> 
                      <li><NavLink to="/product/electronic"> {prop.nav4}</NavLink></li> 
                      <li><NavLink to="/product/jwellery">{prop.text}</NavLink></li> 
                    </ul>
                    {/* <div style={{width: "60px",height: "7px",backgroundColor:"#FFD07F",textAlign:"center",marginLeft:"30%"}}></div> */}

                  </div>
                  <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4  aem-GridColumn--phone--6 sign-in">
                    <ul>
                      <NavLink exact to='/cart'>
                        <li><img src={prop.icon3} alt="User" className='img-3' /><div className='counter'>{totalCartItem}</div></li>
                      </NavLink>
                    </ul>

                  </div>

                </>
              )
            })
          }
          
        </div>
 
      </nav>

    </>
  )
}

export default Navbar
