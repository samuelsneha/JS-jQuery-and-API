function fetchBreeds(){
    $.ajax({
        url:'https://dog.ceo/api/breeds/list/all',
        method:'get',
        success:function(data){
            let breeds = Object.keys(data.message);//Object.keys(name of the object)
            console.log(breeds);
            for(let i = 0; i < breeds.length; i++ ){
                $('#dogsDropdown').append( `<option value= ${breeds[i]}> ${breeds[i]} </option>`);
            }
        }
    });
}
$('#dogsDropdown').click(fetchBreeds);


var numImage = 0;//global variable to indicate the next image from the breed list
function displayImage(data){
    console.log(data);
        if( numImage == data.message.length){
            numImage = 0;
        }
        document.getElementById('image').innerHTML = " ";//to clear out the screen from previous images
        $('<img>',{//So this is how we create a new element in jQuery ie. pass the element and pass the attribute values.So this will create the image tag. Then add the imag tag to the container.Then add the image as source.
        src:data.message[numImage],
        //class:imageClass,
        height:'400px',
        width:'400px'
        }).appendTo('#image');  
}
var breed = $('#dogsDropdown').val(); //breed is now a jQuery Object. But initially when you did '#dogsDropdown'.val() was wrong because you ant put a function on a string. You can put a function only on an object. 
function getBreed(a){
    if( a != 0 ){// becomes true in case of getImage and false in case of next
        breed = $('#dogsDropdown').val()
    }    
    $.ajax({
        url:`https://dog.ceo/api/breed/${breed}/images`,
       // url:'https://dog.ceo/api/breed/'+document.getElementById("dogsDropdown").value+'/images',
        method:'GET',
        success:displayImage,
        error:function(error){// error handling
            console.log(error);
        }
    });
}
$('#getImage').click(function(){
    numImage = 0;
    getBreed(1);
});
$('#next').click(function (){
    numImage++;
    getBreed(0);
});
