import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import edit from '../../Images/edit-2.svg';
import trash from '../../Images/trash-2.svg';
import heart from '../../Images/heart.svg';
import down from '../../Images/chevron-down.svg';
import PPBTN from '../../Images/PP_BTN@2x.png';
import { shipItem } from '../../Components/Data/data';
import { handleAction } from '../../redux/counterSlice';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { NavLink } from 'react-router-dom';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
    }
}

//Shopping Cart

const CartItems = () => {
    const [data, setData] = useState([]);
    const cartData = useSelector((value) =>
        value.cart.item);

    const dispatch = useDispatch();
    const totalAmount = useSelector((state) => state.cart.cartTotalAmount);

    useEffect(() => {
        dispatch(handleAction.cartCatculation())

    }, [totalAmount, dispatch])



    const handleDecreaseCart = (value) => {
        dispatch(handleAction.decreaseCart(value))
    }

    const handleIncreaseCart = (value) => {
        dispatch(handleAction.increaseCart(value))
    }

    const fetchData = () => {

        fetch("https://fakestoreapi.com/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data);


            })
        console.log(data)
    }



    useEffect(() => {
        fetchData()
    }, )



    return (

        <div className='aem-Grid aem-Grid--12 container cart-Container'>
            <h1>Your Shopping Bag</h1>
            <button type='button' className='bar2'></button>
            <div className='aem-Grid aem-Grid--12 container cart-Container'>
                <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12  '>

                    {cartData.map((value) => {

                        return (
                            <>

                                <div className='aem-Grid aem-Grid--12 cart-products aem-Grid--phone--12'>
                                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--6 added-product'>

                                        <div className='cart-prod-img'><img src={value.image} alt='product' /></div>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--6 '>
                                        <div className='aem-Grid aem-Grid--12'>
                                            <div className=' aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 cart-prod-detail'>

                                                <b>{value.title?.split(' ').slice(0, 3).join(' ')}</b>
                                                <p>size:medium</p>
                                                <p>color:storm</p>
                                                <p>${value.price}</p>
                                            </div>

                                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 btn'>
                                                <button type='button' className='btn-sub' onClick={() => handleDecreaseCart(value)}>-</button>
                                                <div className="btn-count" style={{ display: "inline", padding: "10px 20px" }}>{value.quantity}</div>
                                                <button type='button' className='btn-sub' onClick={() => handleIncreaseCart(value)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--2  aem-GridColumn--phone--hide'>
                                        <div className='option'><img src={edit} alt='Edit' /><span>Edit item</span></div>
                                        <div className='option' onClick={() => { return dispatch(handleAction.deletCartItem(value.id)) }}>
                                            <img src={trash} alt='remove' /><span>Remove</span></div>
                                        <div className='option'><img src={heart} alt='like' /><span>Save for later</span></div>
                                    </div>
                                </div>


                            </>
                        )
                    })}
                    {shipItem.map((todo) => {
                        return (
                            <div className='aem-Grid aem-Grid--12 shipping'>
                                <div className='aem-GridColumn aem-GridColumn--default--10 '>
                                    <div className='aem-Grid aem-Grid--12'>
                                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                                            <p>{todo.detail1}</p>
                                        </div>
                                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                                            <p><span>{todo.detail2}</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--2'><img src={down} alt='down' /></div>


                            </div>)
                    })}
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12  pricing-total'>
                    <h4>Pricing Summary</h4>
                    <p>Subtotal <span>$ {totalAmount}</span></p>
                    <p>Coupon <span>- $ 77.60</span></p>
                    <p>Estimated tax <span>- $ 100.00</span></p>
                    <p>Estimated shipping <span>$ 23.28</span></p>
                    <p>Estimated shipping <span>FREE</span></p>
                    <p>Estimated Total <span>$ {totalAmount}</span></p>
                    <NavLink to="/checkout"> <button className='Primary-brand'>CHECKOUT</button></NavLink>
                    <div className='ppbtn'><img src={PPBTN} alt='button' /></div>

                </div>

            </div>
            <div className='aem-Grid aem-Grid--12 aem-GridColumn aem-GridColumn--phone--hide aem-GridColumn--tablet--hide'>
                <h2 className='carousal'>Recently Viewed</h2>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    //autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-0-px"
                >
                    {data.map((product) => {
                        console.log("carousal", product);
                        
                        return (
                            <>
                                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn aem-GridColumn--phone--hide carousalCard" >
                                    <img src={product.image} alt="Product" style={{ height: "28vh", width: "13vw" }} />
                                    {/* {/ <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--7"> /} */}
                                    <h4>{product.title?.split(' ').slice(0, 3).join(' ')}</h4>
                                    <p>${product.price}</p>
                                    {/* {/ </div> /} */}
                                </div>
                            </>)
                    })
                    }
                </Carousel>
            </div>

        </div>
    )
}

export default CartItems
