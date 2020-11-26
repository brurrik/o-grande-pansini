
let ledboard = [];

let minValue = 1;
let maxValue = 200;

let guess = (minValue+maxValue) / 2;

let minValueElement = undefined;
let maxValueElement = undefined;
let guessValueElement = undefined;

let interval = undefined;

let changeCallCount = 0;


let change = function(){

    let colors = ['blue', 'green', 'pink', 'red']
    changeCallCount++;
    if(changeCallCount > 100){
        clearInterval(interval);
        changeCallCount = 0;

        window.location.reload();
    }

    ledboard.forEach(function(x){
        x.style.backgroundColor = colors[Math.floor(Math.random()* colors.length)];
    });
}

let writeGuessTOHTML = function(){
    guessValueElement.innerHTML = Math.round(guess);
}

let onButtonHigherPressed = function(){
    minValue = guess;
    guess = (minValue + maxValue)/2;
    writeGuessTOHTML();
}

let onButtonLowerPressed = function(){
    maxValue = guess;
    guess = (minValue + maxValue)/2;
    writeGuessTOHTML();
    
}

let onButtonSuccessPressed = function(){
    console.log("Eureka");

    let victoryDiv = document.getElementById("victory");
    victoryDiv.classList.remove("d-none");

    interval = setInterval(change, 100);
}

let main = function()  
{
    ledboard = Array.from(document.getElementsByClassName("block"));

    console.log(ledboard);

    minValueElement = document.getElementById("minValue");
    maxValueElement = document.getElementById("maxValue");

    guessValueElement = document.getElementById("guess");

    minValueElement.innerHTML = minValue;
    maxValueElement.innerHTML = maxValue;

    writeGuessTOHTML();
    
    
}

main();