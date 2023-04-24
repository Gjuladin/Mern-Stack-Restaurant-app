const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
var corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));

global.__basedir = __dirname;

app.use(bodyParser.json());

const db = require("./app/models");

//HOST PORT DATABASE of the MongoDB
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 27017;
const DB = process.env.DB || "restaurant";

//Connecting to Mongo Database
db.mongoose
  .connect(`mongodb://${HOST}:${PORT}/${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send("CRUD Application");
});

//Routes go here dont forget them
require("./app/routes/menuItem.routes")(app);
require("./app/routes/category.routes")(app);

//set the port, listen for requests
app.listen(8080, () => {
  console.log(`Server is running on http://localhost:${8080}`);
});
