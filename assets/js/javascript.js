
//These push the HTML for the paragraphs for their respective acts
function welcome() {
	var name = prompt("What is your name?")
	document.getElementById("welcome").innerHTML = 
		"<p>Hello " + name + ",</p> <p>Welcome to Madladingus, a wonderful world of maddening and ad-liberating storytelling told through the wondrous paradigm of none-other-than yourself!</p>";
}

window.onload = function(){
welcome();
}