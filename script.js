var balloonTop = 1000;

var firstBalloonId = 0;
var secondBalloonId = 0;
var thirdBalloonId = 0;

// section1

var firstLocation = document.getElementById("section1");
function createFirstBalloon() {

    firstBalloonId++;
    
    var balloon = document.createElement("img");
    balloon.src = "images/red_balloon.png";
    balloon.className = "red balloon";

    balloon.id = "firstBalloon"+firstBalloonId;
    
    balloon.style.top = balloonTop+"px";

    var gap = Math.random() * (1000 - 400) + 100;
    balloonTop = balloonTop+gap;


    firstLocation.append(balloon);
    
}

// section2

var secondLocation = document.getElementById("section2");
function createsecondBalloon() {

    secondBalloonId++;
    
    var balloon = document.createElement("img");
    balloon.src = "images/green_balloon.png";
    balloon.className = "green balloon";

    balloon.id = "secondBalloon"+secondBalloonId;
    
    balloon.style.top = balloonTop+"px";

    var gap = Math.random() * (1000 - 400) + 100;
    balloonTop = balloonTop+gap;


    secondLocation.append(balloon);
    
}

// section3

var thirdLocation = document.getElementById("section3");
function createthirdBalloon() {

    thirdBalloonId++;
    
    var balloon = document.createElement("img");
    balloon.src = "images/blue_balloon.png";
    balloon.className = "blue balloon";

    balloon.id = "thirdBalloon"+thirdBalloonId;
    
    balloon.style.top = balloonTop+"px";

    var gap = Math.random() * (1000 - 400) + 100;
    balloonTop = balloonTop+gap;


    thirdLocation.append(balloon);
    
}

// createFirstBalloon();
// createsecondBalloon();
// createthirdBalloon();
setInterval(createFirstBalloon, 100);
setInterval(createsecondBalloon, 100);
setInterval(createthirdBalloon, 100);

setInterval(firstBalloonMove, 100);
setInterval(secondBalloonMove, 100);
setInterval(thirdBalloonMove, 100);


function firstBalloonMove(){

    for(var i = 1; i<=firstBalloonId; i++){
        
        var currentBalloon = document.getElementById("firstBalloon" + i);

        if (currentBalloon) {
            var currentTop = currentBalloon.style.top;
            var newBalloonTop = parseInt(currentTop) - 20;
            currentBalloon.style.top = newBalloonTop + "px";
        }
       
    }
}
function secondBalloonMove(){

    for(var i = 1; i<=secondBalloonId; i++){
        
        var currentBalloon = document.getElementById("secondBalloon" + i);
        
        if (currentBalloon) {
            var currentTop = currentBalloon.style.top;
            var newBalloonTop = parseInt(currentTop) - 20;
            currentBalloon.style.top = newBalloonTop + "px";
        }
    }
}
function thirdBalloonMove(){

    for(var i = 1; i<=thirdBalloonId; i++){
        
        var currentBalloon = document.getElementById("thirdBalloon" + i);
       
        if (currentBalloon) {
            var currentTop = currentBalloon.style.top;
            var newBalloonTop = parseInt(currentTop) - 20;
            currentBalloon.style.top = newBalloonTop + "px";
        }
    }
}


var wrapper = document.getElementById("wrapper");
wrapper.addEventListener('mouseover',remove);
var red = 0;
var green = 0;
var blue = 0;
var total = red+green+blue;

function redBtn(){

}
var pink_btn = document.getElementById("pink_btn");

var pink_label = document.getElementById("pink_label");
var green_label = document.getElementById("green_label");
var blue_label = document.getElementById("blue_label");

function remove(e){
    console.log(e.target);
    if(e.target.className == "red balloon"){
        red++;
        console.log(red);
        e.target.remove();
        pink_label.innerHTML=red;
        // pink_btn.style.backgroundColor = "pink";
    }
else{
    // pink_btn.style.backgroundColor = "white";
}
    if(e.target.className == "green balloon"){
        green++;
        console.log(green);
        e.target.remove();
        green_label.innerHTML = green;
    }
    if(e.target.className == "blue balloon"){
        blue++;
        console.log(blue);
        e.target.remove();
        blue_label.innerHTML = blue;
    }
}

