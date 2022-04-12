var imageURLS = [
    "https://steamcdn-a.akamaihd.net/steam/apps/292030/library_hero.jpg",
    "https://gamethroughs.com/wp-content/uploads/2020/03/witcher.jpg",
    "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/5b0fa0e4c041548bb6289e15d865a696.png",
    "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/007d4a1214289aea09b9759ae1324e96.png"
];

var movieData = [
    {
        title : "Shawshanks Redemption",
        image : "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
        date  : 1994,
        rating : 9.3
    },
    {
        title : "The God Father",
        image : "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        date  : 1972,
        rating : 9.1
    },
    {
        title : "The God Father Part II",
        image : "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        date  : 1974,
        rating : 9.0
    },
    {
        title : "The Dark Knight",
        image : "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        date  : 2008,
        rating : 9.0
    },
    {
        title : "Schindler's List",
        image : "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        date  : 1993,
        rating : 8.9
    },
    {
        title : "Pulp Fiction",
        image : "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        date  : 1994,
        rating : 8.8
    },
    {
        title : "Fight Club",
        image : "https://m.media-amazon.com/images/I/71o1aRN1FJL._SY550_.jpg",
        date  : 1999,
        rating : 8.7
    },
    {
        title : "Inception",
        image : "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        date  : 2010,
        rating : 8.6
    },
    {
        title : "The Matrix",
        image : "https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
        date  : 1999,
        rating : 8.5
    },
];


localStorage.setItem("movieData",JSON.stringify(movieData));


var image = document.createElement("img");
document.querySelector("#slideshow").append(image);

var i = 0;
var slides = setInterval(function(){
    image.setAttribute("src",imageURLS[i]);
    i++;
    if(i == imageURLS.length)
        i = 0;
},2000);

renderMovie(movieData);
function renderMovie()
{
    
    movieData.map(function(elem){
        var movie = document.createElement("div");
        movie.setAttribute("class","movie");
    
        var poster = document.createElement("img");
        poster.setAttribute("src",elem.image);
        poster.setAttribute("class","poster");
    
        var title = document.createElement("p");
        title.textContent = elem.title;
        title.setAttribute("class","title");
    
        var date = document.createElement("p");
        date.textContent = elem.date;
        date.setAttribute("class","release-date");
    
        var rating = document.createElement("p");
        rating.textContent = elem.rating;
        rating.setAttribute("class","rating");
    
        movie.append(poster,title,date,rating);
        document.querySelector("#movies").append(movie);
    
    });
}

var lhSort = document.querySelector("#sort-lh");
lhSort.addEventListener("click",sortLtoH);

var hlSort = document.querySelector("#sort-hl");
hlSort.addEventListener("click",sortHtoL);

function sortLtoH()
{
    movieData.sort(function (a,b){
        return a.rating - b.rating;
    });
    document.querySelector("#movies").innerHTML = "";
    renderMovie(movieData);
}

function sortHtoL()
{
    movieData.sort(function (a,b){
        return b.rating - a.rating;
    });
    document.querySelector("#movies").innerHTML = "";
    renderMovie(movieData);
}