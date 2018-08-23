// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a model that matches up with DB
var Contact = sequelize.define("contact", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      len: [1]
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate:{
      len: [1]
    }
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate:{
      len: [10]
    }
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      len: [1]
    }
  },
});

// Syncs with DB
Contact.sync();

// Makes the Model available for other files (will also create a table)
module.exports = Contact;
