const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

module.exports = {
    getGenres : function(req, res) {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`/* params = {'api_key': API_KEY}*/).then(function(result){
          res.status(200);
          res.send(result.data);
        }).catch((err)=>{console.log(err)});
    },
    getSearch : function(req, res) {
        axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=populerity.asc&api_key=${API_KEY}`).then(function(result){
          res.status(200);
          res.send(result.data);
        }).catch((err)=>{console.log(err)});
    }
}