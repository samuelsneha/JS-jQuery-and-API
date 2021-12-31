var square = document.getElementById('box');
//document.addEventListener('mousemove', function(event)){}
var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;

// Updates the viewport height and width dynamically
//window.addEventListener("resize", function(event) {
//    viewWidth = window.innerWidth;
//    viewHeight = window.innerHeight;
//});



box.addEventListener("mouseover", function(event) {
    var boxAttr = box.getBoundingClientRect();
    var pos = getNewPosition(boxAttr.width, boxAttr.height);
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});

function getNewPosition(boxWidth, boxHeight) {
    //wrt the screen the position is changing and not with the current position of the box
    // The boxWidth and boxHeight are subtracted so that they would not move out from the right and bottom direction
    var newX = Math.floor((Math.random() * viewWidth) - boxWidth);// distance from left
    // its like 0*vw = 0,  1*vh = vh
    var newY = Math.floor((Math.random() * viewHeight)  - boxHeight);// distance from top

    // These will satisfy that box does not move go out in the top and left direction
    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    
    return {x: newX, y: newY};
    // x is teh key and newX is the value.Object concepts
}