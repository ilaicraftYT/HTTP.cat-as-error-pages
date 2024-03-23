const params = new URL(document.location).searchParams;

const retryNode = document.createElement("span");
retryNode.classList.add("top-left");
retryNode.innerText = "🔄";
retryNode.onclick = () => {
	window.location.replace(window.localStorage.getItem(params.get("url_id")));
	window.localStorage.removeItem(params.get("url_id"));
};

document.title = `HTTP.cat - ${params.get("status_code")}`;

const divNode = document.createElement("div");
divNode.classList.add("center");

const imgNode = document.createElement("img");
imgNode.src = `./imgs/${params.get("status_code")}.jpg`;

document.body.appendChild(divNode);
divNode.appendChild(imgNode);
document.body.appendChild(retryNode);

const audio = new Audio("./05. Eggy Toast - Saxophone guy.mp3");
audio.loop = true;

function checkPause() {
	if(window.localStorage.getItem("pause") === "1") {
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
