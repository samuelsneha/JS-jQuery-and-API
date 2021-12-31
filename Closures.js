var i = 10;
function outer(){
    var j = 20;
    var inner = function(){
        var k = 30;
        console.log(i,j,k);
        i++;
        j++;
        k++;
    }
    return inner;// here we are returning an entire function which happens only in js.
  }
  var inner = outer();
  inner();
  //inner = outer();
  inner();
  // here its like one executionn stackof outer is being created and then inside that 2 different execution stacks of inner is being created coz of which k value gets refreshed everytime while i and j increments.
