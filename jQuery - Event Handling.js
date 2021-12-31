//eg1
$('#p1').click( function(){
    alert('P1 clicked');
});

//eg2
$('#p2').on('click',function(){
    alert('P2 clicked');
});

//eg3
function function1(){
    console.log('ready is executed');
}
$(document).ready( function1 );

//eg4
$('a').on('click', function(event){
   event.preventDefault();
    alert('Anchor tag clicked');
});

//eg5
$('#divid1').css({
    height:'100px',
    width:'100px',
    'background-color' : 'cyan'
});

$('#divid1').on('click', function(){
    var element = $(this);
    element.width(element.width() + 10 + 'px' );
    alert('Div is clicked');
})
