var inputSearch = document.getElementById('search');
inputSearch.addEventListener('keypress', function() { console.log ('Key is Pressed 1') } );

document.addEventListener('keypress', function() { console.log ('Key is Pressed 2') } );

document.addEventListener('keyup', function() { console.log ('Key is Pressed 3') } );

document.addEventListener('keydown', function() { console.log ('Key is Pressed 4') } );

document.addEventListener('keydown', function(event) { console.log ('Key is Pressed 5',event.keyCode) } );