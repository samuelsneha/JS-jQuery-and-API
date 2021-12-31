// var current=document.querySelector('.current')

// var next=document.querySelector('.next')

// function startCounter(){
//     var interval=setInterval(animate,1000)
// }

// function animate(){
//     next.classList.add('animate')
//     setTimeout(function(){
//         next.classList.remove('animate')
//     },500)
// }

//var countInterval;

function startCounter() {// this is the main function

    var number = parseInt(document.getElementById("number").value);
    // EDGE CONDIITIONS
    if (isNaN(number)) {
        window.alert("Please enter a number");
        clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        return;
    }
    if (number < 1 || number > 9) {
        alert("Range out of bounds");
        clearInterval(countInterval);
        return;
    }

    var currentNo = document.querySelector(".counter .current");
    var nextNo = document.querySelector(".counter .next");
    var count = 0;

    // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
    resetNumbers(currentNo, nextNo);// to remove the previous counter's state. like for 0- 3 done and then for 0-7 new counter should start.
    
    // Clears the previous interval that was running
    clearInterval(countInterval);// to start refresh from the previous counters state and coz of hoisting this is possible.

    var countInterval = setInterval(function () {
        if (count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(currentNo, nextNo);
        count++;
    }, 1000);

}



function resetNumbers(currentNo, nextNo) {
    currentNo.innerText = 0;
    nextNo.innerText = 1;
}
// 0 - 1, count = 0, 
// 1-2, count = 1,
function increaseCount(currentNo, nextNo) {
    nextNo.classList.add("animate");
    setTimeout(function () {// here in this situation we didnt have any condition as in when to stop it like we do in setInterval so we used setTimeout
        currentNo.innerText = nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText = parseInt(nextNo.innerText) + 1;
    }, 500);

}

