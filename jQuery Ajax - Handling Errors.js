//Method 1
// function fetchImage(){
//     $.ajax({
//         url:'https://dog.ceo/api/breeds/image/random',
//         method:'get',
//         success: function(data){// this data is the response data that you are getting
//             var imageURL = data.message;//this data.message is in JSON already so we dont need to parse it.
//             $('#dog-image').attr('src', imageURL);//we can put image in img tag only, not in div tag
//         },
//     }).fail(function(){//see it goes inside the fail everytime, but it will go inside the function only if there is error and execute the function. If there is no error it will go inside the fail but not inside the function and thus the funcion wont be executed. 
//         console.log('error');//we get error only if there is  error in the api and not from our side error
//     });
// }


//Method - 2
function fetchImage(){
    $.get('https://dog.ceo/api/breeds/image/random',function(data){
        var imageURL = data.message;//this data.message is in JSON already so we dont need to parse it.
        $('#dog-image').attr('src', imageURL);//we can put image in img tag only, not in div tag
    }).fail(function(xhr,textStatus,errorThrown){//see it goes inside the fail everytime, but it will go inside the function only if there is error and execute the function. If there is no error it will go inside the fail but not inside the function and thus the funcion wont be executed. 
          console.log('Request Failed');//we get error only if there is  error in the api and not from our side error
    });
}

$('#fetchB').click(fetchImage);
