const serverless = require("serverless-http");
const express = require("express");
const app = express();

// Environment Path
require("dotenv");

// Routes
const userRoute = require("./src/routes.js/user");

// Environment Variable
// const port = process.env.PORT ?? 3000;

// Database Connection
require("./src/database/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Calling Routes
app.use("/user", userRoute);

//Restrict Invalid Routes
app.use((req, res) => {
  console.log("Invalid Page Request");
  res
    .send(
      "<h1><i><strong> ( 404 ) Page Not Found , Invalid page request</i></h1>"
    )
    .status(400);
});

// app.listen(port, () => {
//   console.log(`server is starting on port ${port}`);
// });

module.exports.handler = serverless(app);
