var a = document.getElementById("inner-circle");
var b = document.getElementById('outer-circle');
var c = document.getElementById('text');

function changeTheme(){
    if(a.style.marginLeft=="73px"){
    a.style.marginLeft = "0px";//these integers also we are supposed to put in quotes
    a.style.backgroundColor = "black";
    b.style.borderColor = "black";
	document.body.style.backgroundColor = "white";// document doesnt have style property. It's elements - html, head , body has these style and other properties.
	c.style.color = "black";
    }
    else{
    a.style.marginLeft = "73px";// we cant give paddingLeft here coz 73px padding will get added into the total width of the element and the inner circle will thus get stretched.
    a.style.backgroundColor = "white";
    b.style.borderColor = "white";
	document.body.style.backgroundColor = "black";
	c.style.color = "white";
    }
}

a.addEventListener("click", changeTheme); 

//document.getElementById("inner-circle").addEventListener("click", function() {
  
    //{    

    //}
//});