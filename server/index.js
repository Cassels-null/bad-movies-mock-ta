var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var axios = require('axios');
const { API_KEY } = require('../config.js');

// Sign up and get your moviedb API key here:
// https://www.themoviedb.org/account/signup


//Helpers
var apiHelpers = require('./helpers/apiHelpers.js');

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));


//OPTION 1: Use regular routes

app.get('/genres', apiHelpers.getGenres);

app.get('/search', apiHelpers.getSearch);
  // use this endpoint to search for movies by genres (using API key): https://api.themoviedb.org/3/discover/movie
  // and sort them by votes (worst first) using the search parameters in themoviedb API


app.post('/save', function(req, res) {

  //save movie as favorite

});

app.post('/delete', function(req, res) {

  //remove movie from favorites

});


//OPTION 2: Use Express Router

//IF you decide to go with this option, delete OPTION 1 to continue

//Routes

const movieRoutes = require('./routes/movieRoutes.js');

//Use routes
app.use('/movies', movieRoutes);


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
