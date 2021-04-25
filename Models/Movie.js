  
/*
File Description: Preparing the Model using the Mongoose( Schemas in database definition)
Author: Hemanth Sharma
Edited at:  25/04/2021
*/

// Importing all the required dependencies and libraries



// Importing the Schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Defining all the possible objects 

const MovieSchema = new Schema({


    // Making all the possible validations 
    Movie_Title: {
        type : String,
        required : true },
    Movie_Rating : {
        type : Number ,
        min: 0,
        max : 5
    },
    Movie_Review : {
        type: String,
        enum: ['good', 'average', 'bad']
    },
    Movie_Release : {
        type : Number,
        min: 1000,
        max: 9999
    }
})

/* 


@ As per given Assignment   =>   
   1. Rating is limited to 0  - 5
   2.  Length of the year digits is limited to  4 digits
   3. only three type of reviews are allowed  using the ENUM => good, bad or average
*/




const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;



