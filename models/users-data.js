const admin = new User({
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

module.exports = admin;
