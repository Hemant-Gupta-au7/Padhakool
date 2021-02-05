const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var authenticationData = require("../../models/adminModel/authenticationModel");

class adminAuthentication {
  // -------------------------------ADMIN REGISTRATION DATA-------------------------------------------------
  postRegistrationData(req, res) {
    insertRegistrationData(req, res);
  }

  //   ------------------------------------------- ADMI LOGIN-------------------------------------------
  getRegistrationData(req, res) {
    var { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      return res.status(422).json({ error: "please add email or password" });
    }
    authenticationData.findOne({ email: email }).then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: "Invalid email or password " });
      }
      bcrypt
        .compare(password, savedUser.password)
        .then((doMatch) => {
          if (doMatch) {
            var token = jwt.sign({ _id: savedUser._id }, "shhhhh");
            console.log(token);
            var { _id, name, email } = savedUser;
            res.json({
              token,
              user: { _id, name, email },
            });
          } else {
            res.status(422).json({
              error: "Invalid email or password",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
}

function insertRegistrationData(req, res) {
  var { name, Mobile_number, email, password } = req.body;
  if (!Mobile_number || !email) {
    return res.status(422).json({ error: "PLEASE ADD MOBILE NUMBER OR EMAIL" });
  }
  authenticationData.findOne({ email: email }).then((savedUser) => {
    bcrypt.hash(password, 10).then((hashpassword) => {
      var adminAuthenticationData = new authenticationData({
        name,
        Mobile_number,
        email,
        password: hashpassword,
      });
      adminAuthenticationData
        .save()
        .then((data) => {
          console.log("ADMIN REGISTRATION", data);
          res.json({ ADMIN_REGISTRATION_DATA: data });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
}

module.exports = adminAuthentication;
