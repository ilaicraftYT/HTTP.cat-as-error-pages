var params = {};
window.location.search.slice(1).split(/&/g).forEach(x => {
	var y = x.split(/=/g);
	params[y[0]] = decodeURIComponent(y[1]);
});

var retryNode = document.createElement(`span`);
retryNode.classList.add(`top-left`);
retryNode.innerText = `🔄`;
retryNode.onclick = function() {
	window.location.replace(params.url);
};

document.title = `HTTP.cat - ${params.statusCode}`;

var divNode = document.createElement(`div`);
divNode.classList.add(`center`);

var imgNode = document.createElement(`img`);
imgNode.src = `./imgs/${params.statusCode}.jpg`;
//imgNode.src = `https://http.cat/images/${params.statusCode}.jpg`;

document.body.appendChild(divNode);
divNode.appendChild(imgNode);
document.body.appendChild(retryNode);

var audio = new Audio(`./05. Eggy Toast - Saxophone guy.mp3`);
audio.loop = true;

function checkPause() {
	if(window.localStorage.pause == `1`) {
		audio.pause();
	} else {
		audio.play();
	}
}

checkPause();

document.onkeypress = (ev) => {
	if(ev.code == `Space`) {
		window.localStorage.pause = window.localStorage.pause == `1` ? `0` : `1`;
		checkPause();
	}
};

setInterval(checkPause, 700);
