
$('body').css({
    'display':'flex',
    'justify-content':'center',
    'align-items':'center',
    'flex-direction':'column',
     height:'100vh'
});


$('#div1').css({
 height:'54px',
 width:'150px',
'border-radius':'5rem',
'border':'3px solid black'
});


$('#div2').css({
    height:'50px',
    width:'50px',
    'background-color':'black',
    'border-radius':'50%',
    'margin':'2px'
});


$('#text').css({
   'font-size':'3rem',
   'font-family':'sans-serif',
   'margin':'3rem',
   'font-weight':'bold'
});

var value = 0;
$('#div2').click(function(){
   // console.log('event clicked');
    //var element = $(this);
    //console.log(element);
    //console.log( element.prop('margin') );
   // if( element.prop('margin') == '2px' ){
       if( value == 0 ){
        value = 1;   
        $('body').css('background-color','black');
        $('#div1').css('background-color','white');
        $('#div2').css({
            'margin-left':'100px'
        });
        $('#text').css('color','white');
    }
    else{
        value = 0
        $('body').css('background-color','white' );
        $('#div2').css({
            'background-color':'black',
            'margin':'2px'
        });
        $('#text').css('color','black');
    }
});



