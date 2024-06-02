import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ProBanner from "./ProBanner";
import Footer from "./Footer";
import ProSlider from "./ProSlider";
import UserFB from "./UserFB";
import ProCounter from "./ProCounter";

function Home() {
  const [LSData, setLSData] = useState({});

  useEffect(() => {
    const info = localStorage.getItem("Data");
    let userData = JSON.parse(info);
    setLSData(userData);
    // console.log(LSData.name)
  }, []);
  return (
    <div>
      <NavBar />
      {/* <div className="container mt-5">
        <div className="jumbotron">
          
        </div>
    </div> */}
      <header
        id="gtco-header"
        className="gtco-cover gtco-cover-md"
        role="banner"
        style={{ backgroundImage: "url(images/mainBG.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="gtco-container">
          <div className="row">
            <div className="col-md-12 col-md-offset-0 text-left">
              <div className="row row-mt-15em" id="homeHeading">
                <h1 style={{marginLeft:"5%"}}>Hello {LSData.name} </h1>

                <p
                  style={{
                    fontSize: "10px",
                    fontFamily: "Arial",
                    maxWidth: "25%",
                    overFlow: "hidden",
                    textAlign: "center",
                    fontFamily: "Arial",
                    marginLeft: "5%",
                  }}
                >
                  
                  Greetings and welcome to SMARTBITE ! We are delighted to see
                  you as a part of our community. Feel free to discover,
                  interact, and collaborate with us to create something
                  wonderful
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>


      <ProBanner />



      <div>
           <div style={{backgroundColor:"#333333", width:"100%", height:"700px"}}> 
         
           <div className="col-lg-6 col-md-6 infinity-form-container">				
      <div className="col-lg-9 col-md-12 col-sm-9 col-xs-12 infinity-form">
      
      <div className="text-center">
          <h1 className='cursive-font' style={{color:"#FBB448"}}>Contact Us</h1>
        </div>
       
        {/* Form */}
        <form className="px-3">
          {/* Input Box */}
          <div className="form-input" id='Animation1'>
            <span><i className="fa fa-envelope-o" /></span>
            <input type="text" name ="name" placeholder=" Your Name Here..."required  />
          </div>
          <div className="form-input" id='Animation2'>
            <span><i className="fa fa-lock" /></span>
            <input type="text" name ="address" placeholder="Your Email Here..." required />
          </div>
          <div className="form-input" id='Animation3'>
            <span><i className="fa fa-lock" /></span>
            <input type="text" name ="timing" placeholder="Your Massage Here..." required  style={{height:"80px"}}/>
          </div>
        
        
          {/* Login Button */}
          <div className="mb-3"> 
          <div className='Animation'>
            <button type="submit" className="btn btn-block">SUBMIT</button>
            </div>
          </div>
         
         
        </form>
      </div>					
    </div>


   
    <div className="col-lg-6 col-md-6 infinity-form-container">				
      <div className="col-lg-9 col-md-12 col-sm-9 col-xs-12 infinity-form">
      
      <div className="text-center"style={{marginBottom:"20%",marginRight:"22%"}}>
      <img src={process.env.PUBLIC_URL + '/images/waiter.png'} alt="Example Image" style={{height:"500px",width:"100%"}} />        </div>
      </div>					
    </div>

    
  
           </div>
    <ProSlider />

    <UserFB />
    <ProCounter />

<Footer />
      </div>
    </div>
  );
}

export default Home;
