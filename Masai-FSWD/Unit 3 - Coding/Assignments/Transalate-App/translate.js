
let translateText = async () => {
    
    let input = document.getElementById("input-text").value;
    
    //Post Call
    const res = await fetch("https://libretranslate.de/translate", {
	method: "POST",
	body: JSON.stringify({
		q: input,
		source: "en",
		target: "hi",
		format: "text"
	}),
	headers: { "Content-Type": "application/json" }
});

    let data = await res.json();
    data = data.translatedText;
    translatedText(data);
}

//Displaying the translated text
let translatedText = (data) => {
    let parent = document.getElementById("ouput-text");
    parent.value = data;
}