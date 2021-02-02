var express = require("express");

//AUTHENTICATION DATA MODEL
var authenticationData=require("../../models/adminModel/authenticationModel")
var authentication_Route = express.Router();


// -------------------------------------ADMIN SIGN_IN------------------------------------------------ 

authentication_Route.get('/adminSignIn',(req,res)=>
{

})


// --------------------------------------ADMIN SIGN_UP-------------------------------------------------------

authentication_Route.post('/adminSignUp',(req,res)=>
{
    var {name, Mobile_number,email,password}=req.body
    if (!Mobile_number || !email) {
        return res.status(422).json({ error: "PLEASE ADD MOBILE NUMBER AND EMAIL" });
    }
    var adminAuthenticationData=new authenticationData({
        name,
        Mobile_number,
        email,
        password
    })
    adminAuthenticationData
    .save()
    .then(data => {
        console.log("ADMIN REGISTRATION", data);
        res.json({ ADMIN_REGISTRATION_DATA: data });
      })
      .catch(error => {
        console.log(error);
      });
})









module.exports = authentication_Route;