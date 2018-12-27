const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const comments = require("./routes/api/comments");
const bikes = require("./routes/api/bikes");
const app = express();
//Database
const db = require("./config/keys").mongoURI;
//connection
mongoose.connect(db).then(() => {
  console.log("Mongo DB connection successful").catch(err => {
    console.log(err);
  });
});
app.get("/", (req, res) => {
  res.send("hello from bike-rental app");
});
// using the routes
app.use("/api/users", users);
app.use("/api/bikes", bikes);
app.use("/api/comments", comments);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running successfully on ${port}`);
});
