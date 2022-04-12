import navbar from "../components/navbar.js"

let nav_container = document.getElementById("nav-container");
nav_container.innerHTML = navbar();


let data = JSON.parse(localStorage.getItem("currentVideo")) || [];


let parent = document.getElementById("playing");
let videoId = data.id.videoId;
let iframe = document.createElement("iframe");
iframe.setAttribute("src",`https://www.youtube.com/embed/${videoId}`);
iframe.width = "720px";
iframe.height = "420px";
iframe.allowFullscreen = true;

let title = document.createElement("p");
title.setAttribute("class","title");
title.innerHTML = data.snippet.title;

let description = document.createElement("p");
description.setAttribute("class",description);
description.innerHTML = data.snippet.description;

parent.append(iframe,title,description);



