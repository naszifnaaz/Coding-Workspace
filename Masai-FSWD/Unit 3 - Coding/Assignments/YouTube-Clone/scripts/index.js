import navbar from "../components/navbar.js"

let nav_container = document.getElementById("nav-container");
nav_container.innerHTML = navbar();

let search_btn = document.getElementById("search-logo");
search_btn.addEventListener("click",search);

let key = "AIzaSyBfMop_Qa9yYuSH1s1JGQHRrRVuPYoMaNM";
let query ="";

let parent = document.getElementById("search-results");


async function search()
{
    query = document.getElementById("search").value;

    let url = `https://youtube.googleapis.com/youtube/v3/search?key=${key}&q=${query}&type=video&maxResults=25&part=snippet`;
    let res = await fetch(url);
    let data = await res.json();
    data = data.items;
    renderResults(data);
}

async function popular()
{
    let url = `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBfMop_Qa9yYuSH1s1JGQHRrRVuPYoMaNM&type=video&maxResults=25&part=snippet&chart=mostPopular&relevanceLanguage=hi`;
    let res = await fetch(url);
    let data = await res.json();
    data = data.items;
    renderResults(data);
}

function renderResults(data)
{
    parent.innerHTML = "";
    data.map((elem,index) =>{
        let container = document.createElement("div");
        let thumbnail = document.createElement("img");
        let title = document.createElement("p");
        let channel = document.createElement("p");

        container.setAttribute("class","movie-div");
        thumbnail.setAttribute("class","thumbnail");
        thumbnail.setAttribute("src",elem.snippet.thumbnails.medium.url);
        
        title.setAttribute("class","title");
        title.innerHTML = elem.snippet.title;

        channel.setAttribute("class","channel");
        channel.innerHTML = elem.snippet.channelTitle;

        container.addEventListener("click",() => {
            localStorage.setItem("currentVideo",JSON.stringify(elem));
            window.location.href = "./play.html"
        });

        container.append(thumbnail,title,channel);
        parent.append(container);
    })
}

popular();