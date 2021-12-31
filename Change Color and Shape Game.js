var btn1 = document.getElementById('color');
var btn2 = document.getElementById('shape');
var cur = "circle";
var color = ["green", "blue", "yellow" , "purple"];
var shape = ["circle", "triangle", "square", "rectangle","parallelogram"];
function changeColor(){
    var index = Math.floor(Math.random()*3);
    var a = document.getElementById('outer');
    a.style.backgroundColor = color[index];
}
//document.getElementById("shape").onclick = function () {
    function changeShape(){
    var rand = shape[Math.floor(Math.random() * shape.length)];// selecting random values from shape array 
    document.getElementById(cur).setAttribute("id", rand);// basically curr gets replaced by triangle/square/...
    cur = rand;
}
btn1.addEventListener("click", changeColor);
btn2.addEventListener("click",changeShape);