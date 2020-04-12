const express = require("express");
const logger = require("morgan");
const path = require("path");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const db = require("./models");

app.use(logger("dev"));




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Return all saved books as JSON.

app.get("/api/books", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/books"));
});


// Save a new book to the database.

app.post("api/books", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/books"))  // what goes here
});


// Delete a book from the database by Mongo _id.

app.delete("api/books/:id", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/books"))  // what goes here
});



// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, function () {
  console.log(`=====> API server now on port ${PORT}!  <=====`);
});
