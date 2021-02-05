
import React, { Component, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from '../../App'
import M from "materialize-css";
import { ToastContainer, toast } from 'react-toastify'
import AdminRegistration1 from '../adminHeader.js'
// import authSvg from '../assests/login.svg'


const AdminLogin = () => {
  var { state, dispatch } = useContext(UserContext)
  var history = useHistory();
  var [password, setPassword] = useState("");
  var [email, setEmail] = useState("");

  //Posting data

  var PostData1 = () => {
    fetch("/adminSignIn", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.user);
        if (data.error) {
          M.toast({ html: data.error, classes: "#d50000 red accent-4" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user })
          M.toast({
            html: " Signed In successfully",
            classes: "#4caf50 green",
          });
          history.push("/admin-home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  var PostData = () => {
    PostData1()
  }

  return (
    <div>
      <AdminRegistration1></AdminRegistration1>
      <div className='container' style={{marginTop:"11%"}}>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 card">
         
            <div style={{marginTop:"20%"},{marginBottom:"10%"}}>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{marginTop:"10%"}}>Email address</label>
                <input type="email" class="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="exampleInputPassword1" placeholder="Password" />
              </div>

              <button type="submit" class="btn btn-primary " onClick={() => PostData()} >Login</button>
            </form>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
        </div>
      </div>
    </div>
  )
};

export default AdminLogin;