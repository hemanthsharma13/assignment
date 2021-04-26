  
/*
File Description: Preparing the server file to run and declaring the possible routes and importing 
Author: Hemanth Sharma
Edited at:  25/04/2021
*/

// Importing all the required dependencies and libraries



const express = require("express");
const mongoose = require("mongoose");
const movieRoutes = require("./Routes/movieRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect(
    '',
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  }
);

app.use(movieRoutes);

app.listen(3000, () => {
  console.log("Server is running...");
});