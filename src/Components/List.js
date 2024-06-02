import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function List() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      // console.log(res.data)
      setData(res.data);
    });
  }, [data]);



  const handleClick = (id) => {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        console.log("data deleted successfully ", res);
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  const handleClick1 = (item) => {
    // console.log(item)
    localStorage.setItem("UserData", JSON.stringify(item));

    navigate("/Update");
  };
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <header
          id="gtco-header"
          className="gtco-cover gtco-cover-md"
          role="banner"
          style={{ backgroundImage: "url(images/resbg.jpg)", height: "100%" }}
          data-stellar-background-ratio="0.1"
        >
          <div className="container mt-7" id="cardAnimation">
            <div className="row">
              {data.map((item) => {
                return (
                  <div
                    className="col-md-4"
                    style={{
                      width: "30%",
                      paddingTop: "8%",
                      marginInline: "1%",
                    }}
                    key={item.id}
                  >
                    <div
                      className="card card rounded"
                      style={{
                        backgroundColor: " rgba(0, 0, 0, 0.6)",
                        borderRadius: "15px",
                      }}
                    >
                      <div className="card-body pt-3">
                        <h3
                          className="card-title text-center"
                          style={{ paddingTop: "5%" }}
                        >
                          Restaurants
                        </h3>
                        <div className="pt-2" style={{ paddingLeft: "8%" }}>
                          <h4 className="card-text">Id : {item.id}</h4>
                          <br />
                          <h4 className="card-text">Name : {item.name}</h4>
                          <br />
                          <h4 className="card-text">
                            Address : {item.address}
                          </h4>
                          <br />
                          <h4 className="card-text">Timing : {item.timing}</h4>
                          <br />

                          <h4 className="card-text">
                            Cuisine : {item.cuisine}
                          </h4>
                          <br />
                          <div className="row">
                            <a
                              className="btn btn-danger"
                              style={{ marginBottom: "6%", marginLeft: "8%" }}
                              onClick={() => handleClick(item.id)}
                            >
                              DELETE
                            </a>
                            <a
                              className="btn btn-danger"
                              style={{ marginBottom: "6%", marginLeft: "15%" }}
                              onClick={() => handleClick1(item)}
                            >
                              UPDATE
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default List;
