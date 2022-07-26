import React from 'react'
import LeftArrow from '../../Images/chevron-left.svg'
import { NavLink } from 'react-router-dom'

const HeroBanner = () => {
    return (
        <>
            <section>
                <div className="aem-Grid aem-Grid--12">

                    <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--phone--12 banner-content">
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--1  aem-GridColumn--phone--12 arrow">
                                <img src={LeftArrow} alt='Left' aria-label='desktop-logo' />
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--11 content-div">
                                <h5>Shop the new Signature Collection</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                                <NavLink to='/product'><button> SHOP NOW </button></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 banner">
                        {/* <img src={BoysStyle} alt='Boys' style={{}} /> */}
                        <img src={require('../../Images/banner_fullsize_anim.png')} alt='Logo' aria-label='desktop-logo' />
                    </div>
                </div>
                <NavLink to='/product'>
                <div className='container slider'>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                            <img src={require('../../Images/Tshirt.png')} alt='Logo' aria-label='desktop-logo' />
                            <div className="slider-content">
                                <h6>Shop Women</h6>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                            <div><img src={require('../../Images/Jacket.png')} alt='Logo' aria-label='desktop-logo' /></div>
                            <div className="slider-content">
                                <h6>Shop Women</h6>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                            <img src={require('../../Images/Ring.png')} alt='Logo' aria-label='desktop-logo' />
                            <div className="slider-content">
                                <h6>Shop Women</h6>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                            <img src={require('../../Images/Led.png')} alt='Logo' aria-label='desktop-logo' />
                            <div className="slider-content">
                                <h6>Shop Women</h6>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>
                </NavLink>
            </section>
            <section>
                <div className="aem-Grid aem-Grid--12 container moreInfo">
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 collection">
                        <div>
                        <h5>Take off in the new Signature Legging</h5>
                        <h6>Lorem Ipsum Dolor Tempor</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                        <button className='btnOne'>SHOP COLLECTION</button>
                        <button className='btnTwo'>SHOP NOW</button>
                        </div>
                        <div className="bar"></div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <img src={require('../../Images/curlyBoy.png')} alt='Logo' aria-label='desktop-logo' style={{ width: "100%", height: "auto" }} />
                    </div>
                </div>
            </section>
            <section style={{paddingBottom:"132px"}}>
                <div className="aem-Grid aem-Grid--12 container">
                    <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
                       <img src={require('../../Images/man-stone.png')} alt='Logo' aria-label='desktop-logo' style={{ width: "100%", height: "433px",padding:"2% 0"}} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 device">
                       <div>
                           <h5>Conquer your next adventure</h5>
                           <p>Lorem Ipsum Dolor Tempor</p>
                           <button>SHOP DEVICES</button>
                       </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroBanner
