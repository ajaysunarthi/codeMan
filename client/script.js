var witch = document.getElementById('switch-1');

witch.addEventListener("click", log, true);

function log () {
	console.log(witch.checked);	 
}

