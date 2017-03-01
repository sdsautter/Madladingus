var nounArray = [];
var properNounArray = [];
var verbPresentArray = [];
var verbPastArray = [];
var verbingArray = [];
var adjArray = [];
var advArray = [];
var fakeExpletiveArray = [];
var firstDone = false;
var secondDone = false;

var toLoad = confirm("This is your story. If you choose to accept this mission, you will be asked for many words in order to finish this story. You may even get up to 5 requests for one category, like nouns.")

if (toLoad) {
	

//The functions to ask for specific words. It then pushes the word into it's respective array.
function askNoun() {
	var noun = prompt("Give me a noun");
	nounArray.push(noun);
}

function askProperNoun() {
	var properNoun = prompt("Give me a proper noun. Ex: Scott, Scotty, Scottie.");
	properNounArray.push(properNoun);
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
	var userName = prompt("What is your name?");
	for (var i = 0; i < 5; i++) {
			askNoun();
		}

		for (var i = 0; i < 1; i++) {
			askVerbPast();
		}

		for (var i = 0; i < 3; i++) {
			askAdj();
		}

		for (var i = 0; i < 2; i++) {
			askAdv();
		}

		for (var i = 0; i < 2; i++) {
			askVerbing();
		}

		for (var i = 0; i < 1; i++) {
			askProperNoun();
		}

		for (var i = 0; i < 1; i++) {
			askFakeExpletive();
		}

		for (var i = 0; i < 1; i++) {
			askVerbPresent();
		}
	
	document.getElementById("firstAct").innerHTML = 
		"<p>Dear " + 
		userName + ", </p><p><span class='firstcharacter'>I</span> write to you on this " +
		nounArray[0].toLowerCase() + " to apologize. I know I wronged you when I " + 
		verbPastArray[0].toLowerCase() + " on your very " + 
		adjArray[0].toLowerCase() + " " +
		nounArray[1].toLowerCase() + ". In my defense, I " + 
		verbPastArray[0].toLowerCase() + " very " + 
		advArray[0].toLowerCase() + ". Nevertheless, I must still apologize. If I may, I feel as if I have a " +
		adjArray[1].toLowerCase() + " excuse, and feel a " +
		adjArray[2].toLowerCase() + " need to explain myself.</p>" +
		"<p class='pIndent'>You see, I was " +
		verbingArray[0].toLowerCase() + " at the local " +
		nounArray[2].toLowerCase() + " just the other day when all of a sudden a " +
		nounArray[3].toLowerCase() + " came " +
		verbingArray[1].toLowerCase() + " right out of the " + 
		nounArray[4].toLowerCase() + ". What a sight it was to see. I had no other choice but to yell, 'Hey " +
		properNounArray[0] + "! What is it that you do so " +
		advArray[1].toLowerCase() + "?'</p> <p class='pIndent'>The " +
		nounArray[3].toLowerCase() + " looked at me, and do you know what he said? Do you know what he " +
		fakeExpletiveArray[0].toLowerCase() + "ing said?! He said, '" +
		properNounArray[0].toLowerCase() + "? Who the " +
		fakeExpletiveArray[0].toLowerCase() + " is " +
		properNounArray[0] + "? If you're talking to me, you better check yourself before you " +
		verbPresentArray[0].toLowerCase() + " yourself.'</p>"
		;
	firstDone = true;
}

function secondAct() {
	askNoun();
	document.getElementById("secondAct").innerHTML =  
		"<p>Sorry, I don't have a second act yet, but I do have enough to prompt you for " + 
		nounArray[5].toLowerCase() + 
		".</p>" ;
	secondDone = true;
}

function thirdAct() {
	document.getElementById("thirdAct").innerHTML =  
		"<p>You really think I have a first act after showing that I don't have a second act yet? Ha. Idiot. In case you're wondering though, here's all the nouns you've used so far:<br> " + 
		nounArray[0].toLowerCase() + "<br>" +
		nounArray[1].toLowerCase() + "<br>" +
		nounArray[2].toLowerCase() + "<br>" +
		nounArray[3].toLowerCase() + "<br>" +
		nounArray[4].toLowerCase() + "<br>" +
		nounArray[5].toLowerCase()
}

//I need to come back and play around with this. I want to make it so the acts don't start until they get clicked on, and you can't move on until you finish previous acts.
document.getElementById("firstClick").onclick = firstAct();
if (firstDone) {
	document.getElementById("secondClick").onclick = secondAct();
} else { 
	document.getElementById("secondClick").onclick = function() {

	document.getElementById("secondAct").innerHTML = "<h4>You Must Complete Act One First";
	}
} 
	
	} else {
		//This will show up if they cancel the original confirmation
function rejectedFirst() {
	document.getElementById("firstAct").innerHTML =
	"<p class='pIndent'>I put together this great ad-liberating story, and you choose to just skip it? I thought we were pals. You will <strong>rue</strong> this day.</p>" ;
}

function rejectedSecond() {
	document.getElementById("secondAct").innerHTML = 
	"<p class='pIndent'>And to think that I thought we were getting on so well. I was going to ask you if you wanted to vacation with me. I was even going to offer to pay. It's too late. Don't even bother trying to reload this page to appease me. It's not going to work. I'm going to know. You will never extract my vacation money from me now.</p>";
}

function rejectedThird() {
	document.getElementById("thirdAct").innerHTML = 
	"<p class='pIndent'>You might as well just look at this picture of me and my son. Maybe now you'll know who you're hurting by rejecting us.</p>" +
	'<img src="assets/images/Scott.jpg" alt=Scott>';
}


		rejectedFirst();
		rejectedSecond();
		rejectedThird();
	}