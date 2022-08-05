import React from "react";
import Slider from "react-slick";

const SimpleSlider = ({data}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings} style={{height:"400px",width:"300px"}}>
      <div>
        <img src={data.image} style={{height:"400px",width:"300px"}} />
      </div>
      <div>
      <img src={data.image} style={{height:"400px",width:"300px"}}/>
      </div>
      <div>
      <img src={data.image} style={{height:"400px",width:"300px"}}/>
      </div>
      <div>
      <img src={data.image} style={{height:"400px",width:"300px"}}/>
      </div>
      <div>
      <img src={data.image} style={{height:"400px",width:"300px"}}/>
      </div>
      <div>
      <img src={data.image} style={{height:"400px",width:"300px"}}/>
      </div>
    </Slider>
      
    </div>
  )
}

export default SimpleSlider
