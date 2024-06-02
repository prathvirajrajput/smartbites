import React from 'react';
import Slider from "react-slick";


function ProSlider() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 1000,
      
      };
  return (
    <div style={{height:"500px",}}>
       <p style={{textAlign:"center", color:"#FBB448", fontSize:"55px", marginTop:"7%"}} className='cursive-font'> Top Brands</p>
        <Slider {...settings} style={{paddingTop:"3%"}}>
          <div >
          <img src={process.env.PUBLIC_URL + '/images/kfc.png'} alt="Example Image" style={{height:"200px",width:"100%"}} />   

          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/images/burgerKing.png'} alt="Example Image" style={{height:"180px",width:"100%"}} />   
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/images/starbucks.png'} alt="Example Image" style={{height:"180px",width:"100%"}} />   
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/images/subway.png'} alt="Example Image" style={{height:"180px",width:"100%"}} />   
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/images/mc.png'} alt="Example Image" style={{height:"180px",width:"100%"}} />   
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/images/dominos.png'} alt="Example Image" style={{height:"180px",width:"100%"}} />   
          </div>
        </Slider>
    </div>
  )
}

export default ProSlider
