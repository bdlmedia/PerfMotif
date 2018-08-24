// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Contact = require("../models/contact.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Add a chirp
  app.post("/api/new", function(req, res) {

    console.log("Contact Data:");
    console.log(req.body);

    Contact.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    }).then(function(results) {
      // `results` 
      console.log("success")
      res.end();
    })
    .catch(function(err) {
      // print the error details
      console.log(err);
      console.log("error")
  });
  
});

};