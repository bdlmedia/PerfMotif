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
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

};