var imageURLS = [
    "https://steamcdn-a.akamaihd.net/steam/apps/292030/library_hero.jpg",
    "https://gamethroughs.com/wp-content/uploads/2020/03/witcher.jpg",
    "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/5b0fa0e4c041548bb6289e15d865a696.png",
    "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/007d4a1214289aea09b9759ae1324e96.png"
];


var image = document.createElement("img");
document.querySelector("#slideshow").append(image);

var i = 0;
var slides = setInterval(function(){
    image.setAttribute("src",imageURLS[i]);
    i++;
    if(i == imageURLS.length)
        i = 0;
},2000);