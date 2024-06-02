import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Update() {
  const [Data, setData] = useState({
    name: "",
    address: "",
    timing: "",
    cuisine: "",
  });

  const [Id, setId] = useState("");
  const  navigate = useNavigate();



  useEffect(() => {
    let UData = localStorage.getItem("UserData");
    let myObject = JSON.parse(UData);
    setData(myObject);
    console.log(Data);
    setId(Data.id);
  }, [Id]);



  const handleChange = (e) => {
    e.preventDefault();

    setData({ ...Data, [e.target.name]: e.target.value });
  };
  // console.log(Data);





  const handleClick = (Id) => {
    axios.put(`http://localhost:3000/posts/${Id}`, Data).then((res) => {
      console.log(res);
      navigate("/List")
    });
  };

  return (
    <div>
      <NavBar />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        // hideProgressBar={false}
        Transition="zoom"
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      <div className="container-fluid">
        <header
          id="gtco-header"
          className="gtco-cover gtco-cover-md"
          role="banner"
          style={{ backgroundImage: "url(images/update.jpg)", height: "100%" }}
          data-stellar-background-ratio="0.1"
        >
          <div className="row ">
            {/* IMAGE CONTAINER END */}
            {/* FORM CONTAINER BEGIN */}
            <div className="col-lg-6 col-md-6 infinity-form-container">
              <div className="col-lg-9 col-md-12 col-sm-9 col-xs-12 infinity-form">
                <div className="text-center">
                  <h3 id="h3Animation">Update Restaurant Info</h3>
                </div>
                {/* Form */}
                <form className="px-3">
                  {/* Input Box */}
                  <div className="form-input" id="Animation1">
                    <span>
                      <i className="fa fa-envelope-o" />
                    </span>
                    <input
                      type="text"
                      name="name"
                      // placeholder="Name Of Resturents"
                      tabIndex={20}
                      required
                      value={Data.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-input" id="Animation2">
                    <span>
                      <i className="fa fa-lock" />
                    </span>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address Of Resturents"
                      required
                      value={Data.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-input" id="Animation3">
                    <span>
                      <i className="fa fa-lock" />
                    </span>
                    <input
                      type="text"
                      name="timing"
                      placeholder="Timing Of Resturents"
                      required
                      value={Data.timing}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-input" id="Animation4">
                    <span>
                      <i className="fa fa-lock" />
                    </span>
                    <input
                      type="text"
                      name="cuisine"
                      placeholder="Cuisine Of Resturent"
                      required
                      value={Data.cuisine}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Login Button */}
                  <div className="mb-3">
                    <div className="Animation">
                      <button
                        type="submit"
                        className="btn btn-block"
                        onClick={() => handleClick(Id)}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* FORM CONTAINER END */}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Update;
