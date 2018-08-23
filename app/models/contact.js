// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a model that matches up with DB
var Contact = sequelize.define("contact", {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.INTEGER
  },
  message: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

// Syncs with DB
Contact.sync();

// Makes the Model available for other files (will also create a table)
module.exports = Contact;
