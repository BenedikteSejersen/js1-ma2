// question 1
const myFunctionExpression = function () {
    console.log("Aina Benedikte Tønnesen Sejersen");
}
myFunctionExpression();



// question 2
const input = document.querySelector("input.btn");

function theClick() {
    console.log("I was clicked");
}

input.addEventListener("click", theClick);



// question 3
const textInput = document.querySelector("#firstName");

function callTheValue(textInput) {
    console.log("value: " + textInput.target.value);
}
textInput.addEventListener("keydown", callTheValue);


// question 4
const button = document.querySelector("button");

function hoverOverButton() {
    button.classList.add("hover");
}
button.addEventListener("mouseover", hoverOverButton);



// question 5
const button = document.querySelector("[data-animal='dog']");

function removeHoverOverButton() {
    button.classList.remove("hover");
}
button.addEventListener("mouseout", removeHoverOverButton);



// question 6
const listItem = document.querySelectorAll("li");
      
for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("mouseover", logData);
}

function logData(event) {
  console.log(event.target.dataset.animal);
}



// question 7
const animal = "cow";

switch (animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default :
        console.log("Harrumph");
}



// question 8
function eachSheep(sheep) {
    console.log(sheep);
}

sheep.forEach(eachSheep);



// question 9
function logHello() {

    const stopLogHello = 0;

    console.log("Hello");
    
    if (counter === 5) {
        clearInterval(helloInterval);
    }
    
    counter++;

}

let counter = 0;

const helloInterval = setInterval(logHello, 500);



// question 10
const buttonTimeout = document.querySelector(".container");

function updateText (){
    buttonTimeout.innerHTML="Text updated";
}

setTimeout(updateText,2000);