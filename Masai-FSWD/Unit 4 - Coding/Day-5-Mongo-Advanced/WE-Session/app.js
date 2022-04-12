const express = require('express');
const mongoose = require('mongoose');

const app = express();


//Connect to MongoDB
const connect = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/moviesDB');
}

//Create Schema
const movieSchema = mongoose.Schema(
    {
        id : {type : Number, required: true},
        movie_name : {type : String, required: true},
        movie_genre : {type : String, required: true},
        production_year : {type : Number, required: true},
        budget : {type : Number, required: true}
    },
    {
        versionKey : false,
        timestamp : true,
    }
);

//Creating Model
const Movie = mongoose.model("movie",movieSchema);

app.get('/movies', async (req,res) => {
    const data = await Movie.find({},{movie_name : 1, _id : 0}).lean().exec();
    return res.send(data);
});


app.listen(5000, async () => {
    try{
        await connect();
        console.log("Connection Successful");
    }
    catch(err)
    {
        console.log("Something went wrong!");
    }
});