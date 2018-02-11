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

const User = mongoose.model('User', userSchema);

let admin = new User({
  name: {
    first: 'Jonah',
    last: 'Bliss'
  },
  admin: true,
});

console.log(admin);

admin.save(function (err, admin) {
  if (err) return console.error(err);
  console.log(admin.namify());
});

module.exports = userSchema;
// used in mongoose.js
