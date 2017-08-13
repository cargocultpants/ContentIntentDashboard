const mongoose = require('mongoose');

// Get a reference to and define a schema

// contentSchema maps to a MongoDB collection "content" and defines the shape of the documents within that collection.

const contentSchema = mongoose.Schema({
    user: String,
    title: String,
    author: String,
    medium: Array,
    date: Date,
    campaign: String,
    score: {
      purchase_intent: Number,
      brand_favorability: Number
    }
});


const content = mongoose.model('Content', contentSchema);

const dummyContent = mongoose.Schema({
  user: "The X Co.",
  title: "We Need To Stop Being Annoying",
  author: "White People",
  medium: ["Facebook", "Instagram", "Twitter"],
  date: Date.now,
  campaign: "Fall 2017",
  score: {
    purchase_intent: 3,
    brand_favorability: 10
  }
});


dummyContent.save(function (err, dummy) {
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
