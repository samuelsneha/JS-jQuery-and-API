var number = document.getElementById("big-box");
var perBox = document.getElementById("percent-bar")
function getDocHeight() {
    var D = document;
    return Math.max(
      D.body.scrollHeight,
      D.body.offsetHeight,
      D.body.clientHeight
    );
  }
  
  var docHeight = getDocHeight();
  var windowHeight = window.innerHeight;
  window.onresize = function( event){
    docHeight = getDocHeight();
    windowHeight = window.innerHeight;
  };
var limit = document.body.offsetHeight - window.innerHeight;// limit will be at the end of my screen
// height of the last element from the top of the screen
// body.offsetHeight is height of your entire body
// window.innerHeight is the height of your screen
document.addEventListener('scroll', function(){
//console.log( window.pageYOffset);
//var percent = Math.floor((window.pageYOffset / limit )* 100);
//console.log(windowHeight);
//console.log(docHeight);
var percent = Math.floor(
    (window.scrollY / (docHeight - windowHeight)) * 100);
// window.pageYOffset = top of the screen till where u have scrolled

//console.log(percent);
perBox.innerText = percent + '%';
});
//var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
//document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight )

