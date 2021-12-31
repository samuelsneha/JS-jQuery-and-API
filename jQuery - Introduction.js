$('#p1').html('Welcome');
$('#p1').text('First One');
// $('#p2').hide();
$('#p3').width();
$('#p3').width(500);
$('.c1').html('hey');
var paras = $('div');
//paras.html('hi');
var one = paras.eq(0);//one is also a jquery object now
one.text('again changed through eq');//jQuery function is .text
var two = paras[3];// here var two returns the DOM object whereas var one returned the jquery object
one.html('again and again changed through eq');//jQuery function is .html
console.log(two);
two.innerHTML = 'DOM Object changed through its conventional way';//DOM element function
$(two);
