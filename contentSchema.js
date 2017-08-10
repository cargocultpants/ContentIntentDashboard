const mongoose = require('mongoose');
require('./scoreSchema.js')

// Get a reference to and define a schema

// contentSchema maps to a MongoDB collection "content" and defines the shape of the documents within that collection.

const contentSchema = mongoose.Schema({
    user: String,
    title: String,
    author: String,
    medium: Array,
    date: Date,
    campaign: String,
    score: [Score.schema]
});


const content = mongoose.model('Content', contentSchema);

const dummyPost = mongoose.Schema({
    user: [userSchema].name,
    title: "5 Reasons Why Listicles Are Stupid",
    author: "Generic Name Here",
    medium: ["Facebook", "Twitter", "Instagram", "Printed Media"],
    date: Date.now
});


dummyPost.save(function (err, dummy) {
  if (err) return console.error(err);
  console.log(dummy.title, ' has been saved into the database.');
}); //save function

Content.find(function (err, content) {
  if (err) return console.error(err);
  console.log(content.length);
  console.log("All the content: ", content);
});

module.exports = content;

// https://docs.mongodb.com/getting-started/shell/insert/
