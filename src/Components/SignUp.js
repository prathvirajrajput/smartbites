import React, { useState,useRef } from 'react';
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';



function SignUp() {
  const[inputData,setInputData]= useState({
    name:"",
    email:"",
    password:""
  });
const  navigate = useNavigate();
const ref = useRef(null);



const handleChange = (e) => {

  setInputData({...inputData,[e.target.name] : e.target.value})};

const handleSubmit = (e)=>{
  e.preventDefault();  
  // console.log(inputData)
  localStorage.setItem("Data", JSON.stringify(inputData));
    navigate("/Login")
}
  return (
    <div>

      <LoadingBar color='	#FBB448' ref={ref} />
      <header id="gtco-header" className="gtco-cover gtco-cover-md" role="banner" style={{backgroundImage: 'url(images/foodBG.jpg)', height:"100vh", width:"100vw", position:"fixed"}} data-stellar-background-ratio="0.1">
  <div className="overlay" />
  <div className="gtco-container" >
    <div className="row">
      <div className="col-md-12 col-md-offset-0 text-left">
        <div className="row row-mt-15em" >
          <div className="col-md-7 mt-text ">
            {/* <span className="intro-text-small">SmartBite <a href="http://gettemplates.co" target="_blank">GetTemplates.co</a></span> */}
            <h1 id="welcomeText" className="cursive-font">The Flavours of Your Wish</h1>	
          </div>
          <div className="col-md-4 pb-5 mb-5 ">
            <div className="form-wrap">
              <div className="tab">
                <div className="tab-content">
                  <div className="tab-content-inner active">
                    <h3 className="cursive-font" style={{textAlign:"center"}}>Registration Info</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="row form-group">
                        <div className="col-md-12">
                          <label htmlFor="activities">Name</label>
                         <input type='text' name='name' placeholder='Enter Your Name Here'className="form-control"   value={inputData.name}
                          onChange={handleChange}   />
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col-md-12">
                          <label>E-Mail</label>
                          <input type="email" name='email' placeholder='Enter Your Email Here' className="form-control"value={inputData.email}
                          onChange={handleChange}    />
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col-md-12">
                          <label>Password</label>
                          <input type="password" name='password' placeholder='Enter Your Password Here' className="form-control"value={inputData.password}
                          onChange={handleChange}   />
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col-md-12">
                          <button type='submit' onClick={() => ref.current.complete()}  className="btn btn-primary btn-block" defaultValue="Reserve Now">SignUp</button>
                        </div>
                      </div>
                    </form>	
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

    </div>
  )
}

export default SignUp
