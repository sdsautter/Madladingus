
//These push the HTML for the paragraphs for their respective acts
function welcome() {
	var name = prompt("What is your name?")
	document.getElementById("welcome").innerHTML = 
		"<p>Hello " + name + ",</p> <p>Welcome to Madladingus, a wonderful world of maddening and ad-liberating storytelling told through the wondrous paradigm of none-other-than yourself!</p><p>I started this website because... well... to be honest, I was bored, and I wanted another project to do that I might be able to involve my wife with because she's a good writer. I've always enjoyed Mad Libs&reg; so I thought, 'Why not try creating my own? How hard could it be?' Turns out I've done easier things and this project wasn't as exciting for my wife as it was for me.";
}

window.onload = function(){
welcome();
}