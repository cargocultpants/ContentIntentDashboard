const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String
  },
  admin: { type: Boolean, default: false },
  joinDate: { type: Date, default: Date.now }
});

// returns first 5 digits of user ID
userSchema.virtual('minify').get(function () {
  return this.id.slice(0,5);
});

// returns full name
userSchema.virtual('fullName').get(function () {
  return this.name.first + ' ' + this.name.last;
});


/*TO-DO
make initializer function that gets user's initials
*/

const User = mongoose.model('User', userSchema);

module.exports = User;
// used in mongoose.js
