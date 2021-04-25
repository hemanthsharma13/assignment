  
/*
File Description: Preparing the Modelss using the ODM format( Schemas in database definition)
Author: Hemanth Sharm
Edited at:  25/04/2021
*/

// Importing all the required dependencies and libraries



const express = require("express");
const Moviemodel = require("../Models/Movie");
const app = express();

//Making a get request to pull all the movies from the db

app.get("/movies", async (request, response) => {
  const movies = await Moviemodel.find({});
  
  try {
    if(movies.length == 0) {
        // check if the list is empty
        response.send("empty movies list")
    }  
    else{
    response.send(movies);
    }
  } catch (error) {
    response.status(500).send(error);
  }
});


app.post("/movies", async (request, response) => {
    const Movie = new Moviemodel(request.body);
  // posting a model to the database
    try {
      await Movie.save();
      response.send(Movie);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  

 // Getting a movie from the params using the movie title as the argument
  app.get("/moviess/:Movie_Title", async (request, response) => {
    const Movie_Title = request.params.Movie_Title
    
    const movies = await Moviemodel.findOne( { Movie_Title : request.params.Movie_Title});
    
    if(movies == null) {
        response.send( "no movies with the given title")
    }
    else
    {
        response.send(movies)
    }
    
    // try {
    //   if(movies.length == 0) {
    //       response.send("empty movies list")
    //   }  
    //   else{
    //   response.send(movies);
    //   }
    // } catch (error) {
    //   response.status(500).send(error);
    //}
  });



module.exports = app;