const mongoose = require('mongoose');

// Get a reference to and define a schema

// userSchema maps to a MongoDB collection "users" and defines the shape of the documents within that collection.

const userSchema = mongoose.Schema({
    name: String,
    admin: Boolean
});

userSchema.methods.verify = function () {
  let verify;
  this.admin ? verify = "approved" : verify = "denied";
  const msg = `Administrative access has been ${verify} for ${this.name}.`;
  console.log(msg);
} //end verify method

const User = mongoose.model('User', userSchema);

const jonah = new User({
    name: 'Jonah Bliss',
    admin: true
});
console.log(jonah.name);

const shannon = new User({
    name: 'Shannon Matloob',
    admin: true
});
shannon.verify();

// jonah.save(function (err, shannon) {
//   if (err) return console.error(err);
//   console.log(shannon.name, ' has been saved into the database.');
// }); //save function

User.find(function (err, users) {
  if (err) return console.error(err);
  console.log(users.length);
  console.log("All the users: ", users);
});


// https://docs.mongodb.com/getting-started/shell/insert/
