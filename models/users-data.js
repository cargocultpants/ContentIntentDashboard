class User {
  constructor(first, last) {
    this.name = first + " " + last;
    this.admin = true;
  }
}

module.exports = User;
