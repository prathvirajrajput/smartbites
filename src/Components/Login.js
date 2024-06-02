import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";

function Login() {
  const [getData, setGetData] = useState({});
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    const dataObject = localStorage.getItem("Data");
    let myObject = JSON.parse(dataObject);
    setGetData(myObject);
  }, []);
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      getData.email === inputData.email &&
      getData.password === inputData.password
    ) {
      // console.log("login successfully")
      setTimeout(() => {
        navigate("/Home");
      }, 1000);
      toast("LogIn successfully");
    } else {
      console.log("errorrrrr");
    }
  };
  return (
    <div>
      <div className="mt-5 text-center">
        <ToastContainer
          position="top-center"
          autoClose={1000}
          // hideProgressBar={false}
          Transition="zoom"
          closeOnClick
          pauseOnHover
          theme="dark"
        />

        <LoadingBar color="	#FBB448" ref={ref} />

        <header
          id="gtco-header"
          className="gtco-cover gtco-cover-md"
          role="banner"
          style={{ backgroundImage: "url(images/foodBG.jpg)", height: "100vh" }}
          data-stellar-background-ratio="0.1"
        >
          <div className="overlay" />
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-12 col-md-offset-0 text-left">
                <div className="row row-mt-15em">
                  <div
                    className="col-md-7 mt-text animate-box"
                    data-animate-effect="fadeInUp"
                  >
                    {/* <h1 className="cursive-font">The Flavours of Your Wish</h1>	 */}
                  </div>
                  <div className="col-md-4 ">
                    <div className="form-wrap" id="FormAnimation">
                      <div className="tab">
                        <div className="tab-content">
                          <div
                            className="tab-content-inner active"
                            data-content="signup"
                          >
                            <h3
                              className="cursive-font"
                              style={{ textAlign: "center" }}
                            >
                              LogIn Form
                            </h3>
                            <form onSubmit={handleSubmit}>
                              <div className="row form-group"></div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <label>E-Mail</label>
                                  <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email Here"
                                    className="form-control"
                                    value={inputData.email}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <label>Password</label>
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Your Password Here"
                                    className="form-control"
                                    value={inputData.password}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <button
                                    type="submit"
                                    onClick={() => ref.current.complete()}
                                    className="btn btn-primary btn-block"
                                    defaultValue="Reserve Now"
                                  >
                                    LOGIN
                                  </button>
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
    </div>
  );
}

export default Login;
