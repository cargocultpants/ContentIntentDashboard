const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String
  },
  admin: { type: Boolean, default: false },
  joinDate: { type: Date, default: Date.now }
});

userSchema.methods.namify = function() {
  const first = this.name.first;
  const last = this.name.last;
  return first + " " + last;
}

/*TO-DO
make initializer function that gets user's initials
*/

const User = mongoose.model('User', userSchema);

module.exports = User;
// used in mongoose.js
