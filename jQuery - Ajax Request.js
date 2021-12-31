//Method 1
function fetchImage(){
$.ajax({
    url:'https://dog.ceo/api/breeds/image/random',
    method:'get',
    success: function(data){// this data is the response data that you are getting
        var imageURL = data.message;//this data.message is in JSON already so we dont need to parse it.
        $('#dog-image').attr('src', imageURL);//we can put image in img tag only, not in div tag
    },
    error:function(error){//only for jQuery this synatx is there. This is for, suppose you get wrong api only then this function will be executed. 
        console.log('error')
    }
});
}
//Method 2
// function fetchImage(){
// $.get('https://dog.ceo/api/breeds/image/random',function(data){
//     var imageURL = data.message;//this data.message is in JSON already so we dont need to parse it.
//     $('#dog-image').attr('src', imageURL);//we can put image in img tag only, not in div tag
// });
// }// there are other methods also like ppost, delete in jQuery. Now ma'am gave only get. You cant do post in dog api

$('#fetchB').click(fetchImage);