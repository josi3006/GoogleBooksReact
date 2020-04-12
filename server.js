const express = require("express");
const logger = require("morgan");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.listen(PORT, function () {
  console.log(`=====>  API server now on port ${PORT}!  <=====`);
});
