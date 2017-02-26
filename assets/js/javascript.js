var nounArray = [];
var proNounArray = [];
var verbPresentArray = [];
var verbPastArray = [];
var verbingArray = [];
var adjArray = [];
var advArray = [];
var fakeExpletiveArray = [];
var name = prompt("What's your name?");

//The functions to ask for specific words. It then pushes the word into it's respective array.
function askNoun() {
	var noun = prompt("Give me a noun");
	nounArray.push(noun);
}

function askProNoun() {
	var proNoun = prompt("Give me a pronoun");
	proNounArray.push(proNoun);
}

function askVerbPresent() {
	var verbPresent = prompt("Give me a verb in the present tense. Don't end it in -ing. Ex: Run, Swim, Write.")
	verbPresentArray.push(verbPresent);
}

function askVerbPast() {
	var verbPast = prompt("Give me a verb in the past tense. Don't end it in -ing. Ex: Ran, Swam, Wrote.")
	verbPastArray.push(verbPast);
}

function askVerbing () {
	var verbing = prompt("Give me a verb ending in -ing. Ex: Running, Swimming, Writing.")
	verbingArray.push(verbing);
}

function askAdj () {
	var adj = prompt("Give me an adjective. Ex: Green, Blind, Fantastic.")
	adjArray.push(adj);
}

function askAdv () {
	var adv = prompt("Give me an adverb. Ex: Quickly, Early, Greatly.")
	advArray.push(adv);
}

function askFakeExpletive() {
	var fakeExpletive = prompt("Give me a fake expletive Ex: Frakking, Bumblebutt, Snipeapple");
	fakeExpletiveArray.push(fakeExpletive);
}

//These push the HTML for the paragraphs for their respective acts
function firstAct() {
	document.getElementById("firstAct").innerHTML = 
		"<p>Dear " + 
		name + ", </p><p>I write to you on this " +
		nounArray[0].toLowerCase().toLowerCase() + " to apologize. I know I wronged you when I " + 
		verbPastArray[0].toLowerCase() + " on your very " + 
		adjArray[0].toLowerCase() + " " +
		nounArray[1].toLowerCase() + ". In my defense, I " + 
		verbPastArray[0].toLowerCase() + " very " + 
		advArray[0].toLowerCase() + ". Nevertheless, I must still apologize. If I may, I feel as if I have a " +
		adjArray[1].toLowerCase() + " excuse, and feel a " +
		adjArray[2].toLowerCase() + " need to explain myself.</p>" +
		"<p>You see, I was " +
		verbingArray[0].toLowerCase() + " at the local " +
		nounArray[2].toLowerCase() + " just the other day when all of a sudden a " +
		nounArray[3].toLowerCase() + " came " +
		verbingArray[1].toLowerCase() + " right out of the " + 
		nounArray[4].toLowerCase() + ". What a sight it was to see. I had no other choice but to yell, 'Hey " +
		proNounArray[0] + "! What is it that you do so " +
		advArray[1].toLowerCase() + "?'</p> <p>The " +
		nounArray[3].toLowerCase() + " looked at me, and do you know what he said? Do you know what he " +
		fakeExpletiveArray[0].toLowerCase() + "ing said?! He said, '" +
		proNounArray[0].toLowerCase() + "? Who the " +
		fakeExpletiveArray[0].toLowerCase() + " is " +
		proNounArray[0] + "? If you're talking to me, you better check yourself before you " +
		verbPresentArray[0].toLowerCase() + " yourself.'</p>"
		;
}

// function secondAct() {
// 	document.getElementById("secondAct").innerHTML =  
// 		"<p>What is " + 
// 		nounArray[0].toLowerCase() + 
// 		"? The only word I know is " +
// 		nounArray[1].toLowerCase() + 
// 		".</p>" ;
// }

// function thirdAct() {
// 	document.getElementById("thirdAct").innerHTML =  
// 		"<p>What is " + 
// 		nounArray[0].toLowerCase() + 
// 		"? The only word I know is " +
// 		nounArray[1].toLowerCase() + 
// 		".</p>" ;
// }


askNoun();
askVerbPast();
askAdj();
askNoun();
askAdv();
askAdj();
askAdj();
askVerbing();
askNoun();
askNoun();
askVerbing();
askNoun();
askProNoun();
askAdv();
askFakeExpletive();
askVerbPresent();

firstAct();
// secondAct();
// thirdAct();