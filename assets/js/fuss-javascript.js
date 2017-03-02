var nounArray = [];
var nounProperArray = [];
var nounPluralArray = [];
var verbPresentArray = [];
var verbPastArray = [];
var verbingArray = [];
var adjectiveArray = [];
var moreAdjectiveArray = [];
var familyMemberArray = [];
var adverbArray = [];
var descriptionOfPersonArray = [];
var vocalizedArray = [];
var placeArray = [];
var fakeExpletiveArray = [];
var numberArray = [];

var firstDone = false;
var secondDone = false;

var toLoad = confirm("This is your story. If you choose to accept this mission, you will be asked for many words in order to finish this story. You may even get up to 5 requests for one category, like nouns.");



//The functions to ask for specific words. It then pushes the word into it's respective array.
function askNoun(left) {
    if (left === 0) {
    var noun = prompt("Give me a noun. Ex: Baseball, Bat, Baseball bat.\n");
    nounArray.push(noun);
    } else {
    noun = prompt("Give me a noun. Ex: Baseball, Bat, Baseball bat. \n\nNouns left after this: " 
        + left);
    nounArray.push(noun);
    }
}

function askProperNoun(left) {
    if (left === 0) {
    var properNoun = prompt("Give me a proper noun for a man. Ex: Scott, Scotty, Scottie.\n");
    nounProperArray.push(properNoun);
    } else {
    properNoun = prompt("Give me a proper noun for a man. Ex: Scott, Scotty, Scottie. \n\nProper nouns left after this: " 
        + left);
    nounProperArray.push(properNoun);
    }
}

function askVerbPresent(left) {
    if (left === 0) {
    var verbPresent = prompt("Give me a verb in the present tense. Don't end it in -ing. Ex: Run, Swim, Write.\n");
    verbPresentArray.push(verbPresent);
    } else {
    verbPresent = prompt("Give me a verb in the present tense. Don't end it in -ing. Ex: Run, Swim, Write. \n\nPresent verbs left after this: " 
        + left);
    verbPresentArray.push(verbPresent);
    }
}

function askVerbPast(left) {
    if (left === 0) {
    var verbPast = prompt("Give me a verb in the past tense. Don't end it in -ing. Ex: Ran, Swam, Wrote.\n");
    verbPastArray.push(verbPast);
    } else {
    verbPast = prompt("Give me a verb in the past tense. Don't end it in -ing. Ex: Ran, Swam, Wrote. \n\nPast verbs left after this: " 
        + left);
    verbPastArray.push(verbPast);
    }
}

function askVerbing(left) {
    if (left === 0) {
    var verbing = prompt("Give me a verb ending in -ing. Ex: Running, Swimming, Writing.\n");
    verbingArray.push(verbing);
    } else {
    verbing = prompt("Give me a verb ending in -ing. Ex: Running, Swimming, Writing. \n\nVerbs ending in -ing left after this: " 
        + left);
    verbingArray.push(verbing);
    }
}

function askAdjective(left) {
    if (left === 0) {
    var adj = prompt("Give me an adjective. Ex: Green, Blind, Fantastic.\n");
    adjectiveArray.push(adj);
    } else {
    adj = prompt("Give me an adjective. Ex: Green, Blind, Fantastic. \n\nAdjectives left after this: " 
        + left);
    adjectiveArray.push(adj);
    }
}

function askAdverb(left) {
    if (left === 0) {
    var adv = prompt("Give me an adverb. Ex: Quickly, Early, Greatly.\n");
    adverbArray.push(adv);
    } else {
    adv = prompt("Give me an adverb. Ex: Quickly, Early, Greatly. \n\nAdverbs left after this: " 
        + left);
    adverbArray.push(adv);
    }
}

function askFakeExpletive(left) {
    if (left === 0) {
    var fakeExpletive = prompt("Give me a fake expletive Ex: Frakking, Bumblebutt, Snipeapple.\n");
    fakeExpletiveArray.push(fakeExpletive);
    } else {
    fakeExpletive = prompt("Give me a fake expletive Ex: Frakking, Bumblebutt, Snipeapple. \n\nFake expletives left after this: " 
        + left);
    fakeExpletiveArray.push(fakeExpletive);
    }
}

function askFamilyMember(left) {
    if (left === 0) {
    var family = prompt("Give me a type of family member. Ex: Mother, Grandfather, Uncle.\n");
    familyMemberArray.push(family);
    } else {
    family = prompt("Give me a type of family member. Ex: Mother, Grandfather, Uncle. \n\nFamily members left after this: " 
        + left);
    familyMemberArray.push(family);
    }
}

function askVocalized(left) {
    if (left === 0) {
    var vocalized = prompt("Give me a way someone could say something, but in the past tense. Ex: Said, Yelled, Whispered.\n");
    vocalizedArray.push(vocalized);
    } else {
    vocalized = prompt("Give me a way someone could say something, but in the past tense. Ex: Said, Yelled, Whispered. \n\nVocalizations left after this: " 
        + left);
    vocalizedArray.push(vocalized);
    }
}

function askMoreAdjective(left) {
    if (left === 0) {
    var moreAdj = prompt("Give me an adjective that describes something in a more positive light. Ex: Classier, Greater, More Fun.\n");
    moreAdjectiveArray.push(moreAdj);
    } else {
    moreAdj = prompt("Give me an adjective that describes something in a more positive light. Ex: Classier, Greater, More Fun. \n\nThis type of adjectives left after this: " 
        + left);
    moreAdjectiveArray.push(moreAdj);
    }

}

function askPlace(left) {
    if (left === 0) {
    var place = prompt("Give me a location. Ex: Field, Opera House, Prison.\n");
    placeArray.push(place);
    } else {
    place = prompt("Give me a location. Ex: Field, Opera House, Prison. \n\nPlaces left after this: " 
        + left);
    placeArray.push(place);
    }
}

function askNumber(left) {
    if (left === 0) {
    var number = prompt("Give me a number. Ex: Really? Do you need me to give you an example? Fine. 16.\n");
    numberArray.push(number);
    } else {
    number = prompt("Give me a number. Ex: Really? Do you need me to give you an example? Fine. 16. \n\nNumbers left after this: " 
        + left);
    numberArray.push(number);
    }
}

function askPluralNouns(left) {
    if (left === 0) {
    var plural = prompt("Give me a plural noun. Ex: Monkeys, Ladders, Diapers.\n");
    nounPluralArray.push(plural);
    } else {
    plural = prompt("Give me a plural noun. Ex: Monkeys, Ladders, Diapers. \n\nPlural nouns left after this: " 
        + left);
    nounPluralArray.push(plural);
    }
}

function askDescriptionOfPerson(left) {
    if (left === 0) {
    var person = prompt("Give me a type of person. Ex: Idiot, Musician, Flake.\n");
    descriptionOfPersonArray.push(person);
    } else {
    person = prompt("Give me a type of person. Ex: Idiot, Musician, Flake. \n\nDescriptions of persons left after this: " 
        + left);
    descriptionOfPersonArray.push(person);
    }
}

function rejectedFirst() {
    document.getElementById("firstAct").innerHTML =
        "<p class='pIndent'>I put together this great ad-liberating story, and you choose to just skip it? I thought we were pals. You will <strong>rue</strong> this day.</p>";
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

//These push the HTML for the paragraphs for their respective acts
// function firstAct() {
// }

function secondAct() {

    document.getElementById("secondAct").innerHTML =
        "<p class='pIndent'>Sorry, I don't have a second act yet, but I do have enough to tell you that you look like a " +
        nounArray[Math.floor(Math.random() * 4)] + " " +
        verbingArray[0] + " a " +
        nounArray[Math.floor(Math.random() * 4)]
    ".</p>";
    secondDone = true;
}

function thirdAct() {
    document.getElementById("thirdAct").innerHTML =
        "<p class='pIndent'>You really think I have a third act after showing that I don't have a second act yet? Ha. Idiot.</p>"
}
if (toLoad) {

    //If they agree to go on the mission this, this makes it so if they click the first act
    //on the HTML, then it will go through the first act process

    // document.getElementById("actOne").onclick = function() { firstAct() };

    $("#actOne").on("click", function() { 
        
        for (i = 0; i < 2; i++) {
            var left = 1 - i;
            askProperNoun(left);
        }

        for (i = 0; i < 1; i++) {
            var left = 0 - i;
            askVerbPast(left);
        }

        for (i = 0; i < 2; i++) {
            var left = 1 - i;
            askDescriptionOfPerson(left);
        }

        for (i = 0; i < 2; i++) {
            var left = 1 - i;
            askFamilyMember(left);
        }

        for (i = 0; i < 3; i++) {
            var left = 2 - i;
            askVerbing(left);
        }

        for (var i = 0; i < 4; i++) {
            var left = 3 - i;
            askNoun(left);
        }


        for (i = 0; i < 1; i++) {
            var left = 0 - i;
            askVerbPresent(left);
        }


        for (i = 0; i < 2; i++) {
            var left = 1 - i;
            askVocalized(left);
        }

        for (i = 0; i < 5; i++) {
            var left = 4 - i;
            askAdjective(left);
        }

        for (i = 0; i < 2; i++) {
            var left = 1 - i;
            askAdverb(left);
        }

        for (i = 0; i < 1; i++) {
            var left = 0 - i;
            askMoreAdjective(left);
        }

        for (i = 0; i < 1; i++) {
            var left = 0 - i;
            askPlace(left);
        }

        for (i = 0; i < 1; i++) {
            var left = 0 - i;
            askNumber(left);
        }

        for (i = 0; i < 2; i++) {
            var left = 1 - i;
            askPluralNouns(left);
        }

        $("#firstAct").html(

            "<p><span class='firstcharacter'>T</span>wo " +
            adjectiveArray[0].toLowerCase() + " men were walking down the street one day when all of a sudden they came across a(n) " +
            nounArray[0].toLowerCase() + " and a(n) " +
            nounArray[1].toLowerCase() + ". The first man thought that " +
            nounArray[0].toLowerCase() + " was vastly superior than the " +
            nounArray[1].toLowerCase() + ". Unfortunately, the first man is a(n) " +
            adjectiveArray[1].toLowerCase() + " " +
            descriptionOfPersonArray[0].toLowerCase() + ", if you know what I mean, so lets call him " +
            nounProperArray[0] + ". The second man, a(n) " +
            adjectiveArray[2].toLowerCase() + " " +
            descriptionOfPersonArray[1].toLowerCase() + "  with a knack for existing, much like a(n) " +
            nounProperArray[1] + " would, " +
            verbPastArray[0].toLowerCase() + " up to the " +
            nounArray[1].toLowerCase() + ", and  " +
            vocalizedArray[0].toLowerCase() + " " +
            adverbArray[0].toLowerCase() + ", \"My " +
            nounArray[2].toLowerCase() + ", I have never seen such beauty like this perfect specimen of a(n) " +
            nounArray[1].toLowerCase() + " in all my life. It reminds me of what my " +
            familyMemberArray[0].toLowerCase() + " had when I was young.\"</p>" +
            "<p class='pIndent'>" +
            nounProperArray[0] + " said, \"That may be the case, but my " +
            familyMemberArray[1].toLowerCase() + " had a(n) " +
            nounArray[0].toLowerCase() + " just like this one when I was young, and " +
            nounArray[0].toLowerCase() + "s are so much " +
            moreAdjectiveArray[0].toLowerCase() + " than " +
            nounArray[1].toLowerCase() + "ses.\"</p> <p class='pIndent'><i>Don't forget that this man is a(n) " +
            adjectiveArray[1].toLowerCase() + " " +
            descriptionOfPersonArray[0].toLowerCase() + ".</i></p> <p>\"And further more,\" " +
            nounProperArray[0] + " continues while " +
            verbingArray[0].toLowerCase() + " down the street, \"This " +
            nounArray[0].toLowerCase() + " has a certain quality about it. A quality that shines in both it's subjective beauty, like a(n) " +
            nounArray[3].toLowerCase() + " " +
            verbingArray[1].toLowerCase() + " in a(n) " +
            placeArray[0].toLowerCase() + ", and it's objective worth.\"</p>" +

            "<p class='pIndent'>With the vigor of " +
            numberArray[0].toLowerCase() + " " +
            nounPluralArray[0] + ", yet also " +
            adverbArray[1].toLowerCase() + ", " +
            nounProperArray[1] + " " +
            vocalizedArray[1].toLowerCase() + ", \"That's the most " +
            adjectiveArray[2].toLowerCase() + " thing I've ever heard, but what else would you expect from a(n) " +
            descriptionOfPersonArray[0].toLowerCase() + " such as yourself.\" " +
            nounProperArray[1] + " persisted, \"Even a(n) " +
            nounArray[2].toLowerCase() + " would see that this " +
            nounArray[1].toLowerCase() + " is a better find than that " +
            nounArray[0].toLowerCase() + ". This " +
            nounArray[1].toLowerCase() + " is " +
            adjectiveArray[3].toLowerCase() + ", and that " +
            nounArray[0].toLowerCase() + " is " +
            adjectiveArray[4].toLowerCase() + ". If you were to " +
            verbPresentArray[0].toLowerCase() + " with something, would you rather it be " +
            adjectiveArray[3].toLowerCase() + " or " +
            adjectiveArray[4].toLowerCase() + "? Tha-\"</p>" +

            "<p>\"-" +
            adjectiveArray[4].toLowerCase() + ",\" interrupted " +
            nounProperArray[0] + ".</p>" +
            "<p class='pIndent'>" +
            nounProperArray[1] + " fainted, hitting the ground like a stack of " +
            verbingArray[2].toLowerCase() + " " +
            nounPluralArray[1].toLowerCase() + " from the sheer disgust.</p>"
            );

        firstDone = true;

    });

        $("#actTwo").on("click", function() {

        if (firstDone) {

          $("#secondAct").html(
                "<p class='pIndent'>Sorry, I don't have a second act yet, but I do have enough to tell you that you look like a " +
                nounArray[Math.floor(Math.random() * 4)] + " " +
                verbingArray[0] + " a " +
                nounArray[Math.floor(Math.random() * 4)] +
            ".</p>");
            secondDone = true;
           } else {
           		$("#secondAct").html(
                "<h4>You Need To Do Act One First</h4>");
           }
 		});

        $("#actThree").on("click", function() { 
            
            if (secondDone) {
                $("#thirdAct").html(
                    "<p class='pIndent'>I don't even have a second act, and you expect me to have a third one already? Get out of here...</p>");

            } else {
                $("#thirdAct").html("<h4>You Need To Do Act Two Prior To This</h4>");
            }
        
        });


 	






    //I need to come back and play around with this. I want to make it so the acts don't start until they get clicked on, and you can't move on until you finish previous acts.
    // document.getElementById("firstClick").onclick = firstAct();
    // if (firstDone) {
    // 	document.getElementById("secondClick").onclick = secondAct();
    // } else { 
    // 	document.getElementById("secondClick").onclick = function() {

    // 	document.getElementById("secondAct").innerHTML = "<h4>You Must Complete Act One First";
    // 	}
    // } 

} else {
    //This will show up if they cancel the original confirmation
    rejectedFirst();
    rejectedSecond();
    rejectedThird();
}

