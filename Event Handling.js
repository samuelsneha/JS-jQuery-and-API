// var a = document.getElementById('btn');
// a.addEventListener("click", function(){ alert("hello!!") } )

function sayHello(){
    alert('Hello');
}
function sayByeee(){
    alert('Byee');
}
var a = document.getElementById('btn2');
a.addEventListener("click", sayHello);
a.addEventListener("click", sayByeee);

// in addeventlistner there are 2 parameters - which event and function - pass the reference of the function without parenthesis or define the function with parenthesis