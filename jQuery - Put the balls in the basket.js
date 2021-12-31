
var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];

$('#addButton').click(function(){
    var bColor =  colors[Math.floor( Math.random()*15 )];   
//  Method - 1 using quotes ( more confusing it is )
//   $('#div1').append('<div id = "newBall" style = "background-color:' +colors[Math.floor(Math.random()*15)] + '"></div>');
//  $('#div1').append('<div id = "newBall" style = "background-color:' +bColor+"></div>');
// Method - 2 using backtricks ( easier to understand )
// $('#div1').append( `<div id = "newBall" style = "background-color: ${colors[Math.floor(Math.random()*15)]}"></div>`);
//if you are using the above then put the bColor statement outside the click function  
 $('#div1').append( `<div id = "newBall" style = "background-color: ${bColor}"></div>`);
});


//1) diff btw prepend, append - append starts from the right / bottom whereas prepend starts from the left/entry point.
//2) direction, how to go up ? - wrap reverse property
//3) do anything with height  of container , overflow ? - see overflow wont work. By putting height of the container to auto, the containr which is also the parent will get height according to the content inside the container. 
// So if there is less content height will be less and if the content is more then the height of the container increases.  
//4) how and why the second method one not working? - use backtricks method and it works.