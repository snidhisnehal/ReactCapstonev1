import React from 'react'
import Star from '../../Images/star.svg';
import Heart from '../../Images/heart.svg';
import Share from '../../Images/share-2.svg'
import Down from '../../Images/chevron-down.svg'
import { useDispatch } from 'react-redux';
import {handleAction} from '../../redux/counterSlice';
import {Link} from 'react-router-dom'
import  IncDecCount  from '../../Components/IncDecButtn/IncDecCount'
import SimpleImageSlider from "react-simple-image-slider";
import SimpleSlider from './SimpleSlider';

const SingleItem = ({data}) => {
    
    const dispatch = useDispatch();
    const addProduct = (data) => {
        dispatch(handleAction.addItem({ ...data }))
        console.log(data);
    }
     
    // const images = [
    //     { url: data.image },
    //     { url: data.image},
    //     { url: data.image},
    //     { url: data.image },
    //     { url: data.image }
    
    //   ];

    
    // let productTitle = data.title?.split(' ').slice(0,3).join(' ');

    return (
        <>
            <div className="aem-Grid aem-Grid--12 container main">
                <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12'>
                    <div className="aem-Grid aem-Grid--12 aem-Grid--phone--12" >
                    
                        <div className='aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--hide single'>
                            <img src={data.image} alt="product" style={{borderBottom:"4px solid #E26A2C"}}/>
                            <img src={data.image} alt="product " />
                            <img src={data.image} alt="product " />
                            <img src={data.image} alt="product " />
                            <img src={data.image} alt="product" />
                            <img src={Down} alt="carousal-down" className='down' />
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--phone--hide full-image'>
                            <p>Clothing / Women’s / Outerwear</p>
                            <img src={data.image} alt="Product" />
                            
                        </div>
                        {/* <div className="aem-Grid aem-Grid--12 aem-GridColumn--default--hide aem-Grid--phone--12"> */}
                        <div className='aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--phone--12 full-image2'>
                        <p>Clothing / Women’s / Outerwear</p>
                        <SimpleSlider data={data}/>
                        {/* <SimpleImageSlider
                            width={350}
                            height={550}
                            images={images}
                            showBullets={true}
                            // showNavs={true}
                          /> */}
                        {/* </div> */}
                        </div>
                       
                    </div>
                </div>

                <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 detail-info'>
                    <p className='catogatry'>Clothing / Women’s / Outerwear</p>
                    
                    <h3>{data.title?.split(' ').slice(0,3).join(' ')}</h3>
                    <b>${data.price}</b>
                    <p><img src={Star} alt="Star" className='checked' />
                        <img src={Star} alt="Star" className='checked' />
                        <img src={Star} alt="Star" className='checked' />
                        <img src={Star} alt="Star" className='checked' />
                        <img src={Star} alt="Star" className='checked' />(<span>175</span>)</p>
                    <p>{data.description}</p>
                    <hr />
                    <div className='color'>
                        
                        <h6>Quantity</h6>
                        <div className='add-sub'>
                            <IncDecCount/> 
                        </div>
                        <Link to="/cart"><button type='button' className='cart-add' onClick={() => addProduct(data)}>ADD TO CART</button></Link>
                        <div className='like-share'>
                            <span className='heart'><img src={Heart} alt="Save"/>Save</span>
                            <span className='share'><img src={Share} alt="share" />Share</span>
                        </div>
                    </div>
                </div>


            </div>
            <div className='aem-Grid aem-Grid--12  aem-Grid--phone--12 description-product container main'>
                <div className='aem-Grid aem-Grid--12'>
                     <h3>{data.title}</h3> 
                </div>

                <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 '>
                    <div className="aem-Grid aem-Grid--12">
                        <h6>Description</h6>
                        <p className='descrition'>{data.description}</p>
                        <div className='bar'></div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default SingleItem
