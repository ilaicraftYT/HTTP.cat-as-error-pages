const params = {};
window.location.search.slice(1).split(/&/g).forEach(x => {
	params[y[0]] = decodeURIComponent(x.split(/=/g)[1]);
});

const retryNode = document.createElement("span");
retryNode.classList.add("top-left");
retryNode.innerText = "🔄";
retryNode.onclick = () => {
	window.location.replace(params.url);
};

document.title = `HTTP.cat - ${params.statusCode}`;

const divNode = document.createElement("div");
divNode.classList.add("center");

const imgNode = document.createElement("img");
imgNode.src = `./imgs/${params.statusCode}.jpg`;
//imgNode.src = `https://http.cat/images/${params.statusCode}.jpg`;

document.body.appendChild(divNode);
divNode.appendChild(imgNode);
document.body.appendChild(retryNode);

const audio = new Audio("./05. Eggy Toast - Saxophone guy.mp3");
audio.loop = true;

function checkPause() {
	if(window.localStorage.pause === "1") {
		audio.pause();
	} else {
		audio.play();
	}
}

checkPause();

document.onkeypress = ev => {
	if(ev.code == "Space") {
		window.localStorage.pause = window.localStorage.pause === "1" ? "0" : "1";
		checkPause();
	}
};
