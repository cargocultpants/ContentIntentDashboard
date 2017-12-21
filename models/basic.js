// import dependencies
var mongoose = require('mongoose');

// define and instantiate schema
var Schema = mongoose.Schema;
var BasicSchema = new Schema({
  a_string: String,
  a_date: Date
});

// compile model from schema
var BasicModel = mongoose.model('BasicModel', BasicSchema);
