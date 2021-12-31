
$('#button1').click(function(){
    var value1 = $('#rNo').val();
    var value2 = $('#name').val();
    var value3 = $('#marks').val();
    if( value1 && value2 && value3 ){
        $('aside').append(`<div class = "newData"> RollNo - <span class = "heading"> ${value1} </span>,  <span class = "heading"> ${value1} </span> has scored <span class = "heading"> ${value1} </span> marks </div>`);
    }
    else{
        alert('Please fill all the fields');
    }
});
//scroll how
//how to color those in green
//is my condition for that required correct
//vertical line not working
//why jQuery - coz of func like append
`<div class = "newData"><p> RollNo - <span class = "heading"> ${value1} </span>,   <span class = "heading"> ${value2} </span> has scored  <span class = "heading"> ${value3} </span> marks </p></div>`