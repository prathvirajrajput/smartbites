import React from 'react'
import Slider from "react-slick";

function ProBanner() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        
        };
  return (
    <div style={{height:"1500px"}} >
    <h1 className="cursive-font primary-color" style={{textAlign:"center", color:"white",fontSize:"55px", paddingTop:"1000px"}}>Delivery partner's</h1>
    
        <Slider {...settings} style={{marginTop:"8%"}}>
          <div className='slide'>
          <img src={process.env.PUBLIC_URL + '/images/swiggy.png'} alt="Example Image" style={{height:"100px",width:"100%"}} />   

          </div>
          <div  className='slide'>
          <img src={process.env.PUBLIC_URL + '/images/zomato.png'} alt="Example Image" style={{height:"100px",width:"100%"}} />   
          </div>
          <div  className='slide'>
          <img src={process.env.PUBLIC_URL + '/images/foodpanda.png'} alt="Example Image" style={{height:"100px",width:"100%"}} />   
          </div>
          <div  className='slide'>
          <img src={process.env.PUBLIC_URL + '/images/ubereats.png'} alt="Example Image" style={{height:"100px",width:"100%"}} />   
          </div>
          
          <div  className='slide'>
          <img src={process.env.PUBLIC_URL + '/images/dominos.png'} alt="Example Image" style={{height:"100px",width:"100%"}} />   
          </div>
        </Slider>
        
  
</div>








  )
}

export default ProBanner;
