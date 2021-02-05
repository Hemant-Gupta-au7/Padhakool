import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify'
import AdminRegistration1 from '../adminHeader.js'

const AdminRegistration = () => {

  var history = useHistory();
  var [name, setName] = useState("");
  var [password, setPassword] = useState("");
  var [email, setEmail] = useState("");
  var [Mobile_number, setPhone] = useState("");



  var uploadFields = () => {
    fetch("/adminSignUp", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        password,
        email,
        Mobile_number

      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast({ html: data.error, classes: "#d50000 red accent-4" });
        } else {
          toast({ html: data.message, classes: "#4caf50 green" });
          history.push("/signin");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  var PostData = () => {
    uploadFields();
  }




  return (

    <div>
      <AdminRegistration1></AdminRegistration1>
      <ToastContainer></ToastContainer>
      <div className='container' style={{ marginTop: "6.5%" }}>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">

          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 card">

            <div style={{ marginTop: "20%" }, { marginBottom: "10%" }}>

              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1" >Enter Name</label>
                  <input type="text"
                    class="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email" />

                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" >Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email" />

                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Mobile Number</label>
                  <input type="phone" class="form-control"
                    value={Mobile_number}
                    onChange={(e) => setPhone(e.target.value)}
                    id="exampleInputPassword1" placeholder="Mobile Number" />
                </div>
                <br />

                <button type="submit" class="btn btn-primary " onClick={() => PostData()} >Registration</button>
              </form>
            </div>
          </div>



          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
        </div>
      </div>
    </div>
  )
}

export default AdminRegistration