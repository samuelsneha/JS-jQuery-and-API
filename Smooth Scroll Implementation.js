//METHOD - 1
// var currentPos = 0;
// var targetPos = 1000;

// var scrollInterval = setInterval( function(){
//     if( currentPos >= targetPos ){
//     	clearInterval(scrollInterval);
//     }
//     else{
//      	currentPos = currentPos + 50;
//      	window.scrollBy(0,50);
//     }
//   }	, 50 );

//METHOD-2
// var anchorArrays = document.querySelectorAll(".navigation-list a");
// for( let i = 0; i < anchorArrays.length; i++ ){
// 	anchorArrays[i].addEventListener("click", function(event){
// 		event.preventDefault();
// 	var targetID = anchorArrays[i].textContent .trim().toLowerCase();// instead of accessing text content you can also access using href. Also remember,since you are accessing through text content, text content and id should be same. 
// 	var targetSection = document.getElementById(targetID);
// 	var scrollInterval = setInterval( function(){
// 		var targrtCoordinates = targetSection.getBoundingClientRect();//understand why its inside the function and not outside.
// 		//getBoundingClientRect() gives us the coordinates (distance) between our current position and out target. Since we scroll inside this setInterval function, we need to get the updated coordinates in the same function only.
// 		var top = targrtCoordinates.top;
//         if( top <= 0){// the value of top goes on decreasing as we reach more and more towards the target.
//         	clearInterval(scrollInterval);
//         }
//         else{
//         	window.scrollBy(0,50);
//         }
// 	}, 20);

//   });
// }

//METHOD -3
