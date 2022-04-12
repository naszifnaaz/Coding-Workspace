
//Making API Call
async function makeAPICall(url){
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

//Render Results
function appendPhotos(photos,container){

    photos.forEach(photo => {
        let {urls: {small},user : {name} } = photo;
        let div = document.createElement('div');
        div.setAttribute("class","img-frames");

        let image = document.createElement('img');
        image.setAttribute("class","img");
        image.src = small;

        let user = document.createElement('p');
        user.setAttribute("class","user");
        user.textContent = name;

        div.addEventListener('click',() =>{
            localStorage.setItem('clicked_image',JSON.stringify(photo));
            window.location.href='images.html';
        })

        div.append(image,user);
        container.append(div);
    })
}

// Named Export for makeAPICall and appendPhotos
export {makeAPICall,appendPhotos};