import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import axios from 'axios';


function Add() {
  const [ResData,setResData] = useState({
    name:"",
    address:"",
    timing:"",
    cuisine:""
  })

  const  navigate = useNavigate();


  const handleChange = (e)=>{
    setResData({...ResData,[e.target.name]: e.target.value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault();  
     console.log(ResData)
  axios.post(`http://localhost:3000/posts`,ResData).then((res)=>{
    // console.log(res)
    navigate("/Home")
  })
  }
  return (
    <div>
      <NavBar />
    <div className="container-fluid">
          <header id="gtco-header" className="gtco-cover gtco-cover-md" role="banner" style={{backgroundImage: 'url(images/ress.jpg)', height:"100%"}} data-stellar-background-ratio="0.1">
  <div className="row ">
   
    {/* IMAGE CONTAINER END */}
    {/* FORM CONTAINER BEGIN */}
    <div className="col-lg-6 col-md-6 infinity-form-container">				
      <div className="col-lg-9 col-md-12 col-sm-9 col-xs-12 infinity-form">
      
      
        <div className="text-center mb-4">
          <h4>Add Restaurants</h4>
        </div>
        {/* Form */}
        <form className="px-3" onSubmit={handleSubmit}>
          {/* Input Box */}
          <div className="form-input">
            <span><i className="fa fa-envelope-o" /></span>
            <input type="text" name ="name" placeholder="Name Of Resturents" tabIndex={20} required value={ResData.name} onChange={handleChange} />
          </div>
          <div className="form-input">
            <span><i className="fa fa-lock" /></span>
            <input type="text" name ="address" placeholder="Address Of Resturents" required value={ResData.address} onChange={handleChange} />
          </div>
          <div className="form-input">
            <span><i className="fa fa-lock" /></span>
            <input type="text" name ="timing" placeholder="Timing Of Resturents" required value={ResData.timing} onChange={handleChange} />
          </div>
          <div className="form-input">
            <span><i className="fa fa-lock" /></span>
            <input type="text" name ="cuisine" placeholder="Cuisine Of Resturent" required value={ResData.cuisine} onChange={handleChange} />
          </div>
        
          {/* Login Button */}
          <div className="mb-3"> 
            <button type="submit" className="btn btn-block">SUBMIT</button>
          </div>
         
         
        </form>
      </div>					
    </div>
    {/* FORM CONTAINER END */}
  </div>
</header>
</div>
    </div>
  )
}

export default Add
