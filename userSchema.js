const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    name: String
});

const Admin = mongoose.model('Admin', adminSchema);

let admin = new Admin(
  { name: 'Jonah' }
);
console.log(admin.name);


// https://docs.mongodb.com/getting-started/shell/insert/
