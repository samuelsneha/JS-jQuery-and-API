function fetchBreeds(){
    $.ajax({
        url:'https://dog.ceo/api/breeds/list/all',
        method:'get',
        success:function(data){
            let breeds = Object.keys(data.message);//Object.keys(name of the object)
          //  console.log(breeds);//breeds is basically storing many arrays.So it is an array in which each element is an array.
            for(let i = 0; i < breeds.length; i++ ){
                $('#dogsDropdown').append( `<option value= ${breeds[i]}> ${breeds[i]} </option>`);//appending the options in select tag
            }
        }
    });
}
$('#dogsDropdown').click(fetchBreeds);

// var allDogs;
// function dispalyNext(data){
//      console.log(data);
//      $('#subBreed').append( `<select id = "subBreedSelect" > </select>`);
//      for(let i = 0; i < data.length; i++ ){
//         $('#subBreedSelect').append( `<option value= ${data[i]}> ${data[i]} </option>`);
//     } 
//     var subBreed = $('#subBreedSelect').val();
//     document.querySelector('#subBreedSelect').addEventListener('change',function(){
//         $.ajax({
//             url:`https://dog.ceo/api/breed/${breed}/${subBreed}/images`,
//             method:'get',
//             success:function(data){
//                 console.log(data); 
//                 $('#image').remove();
//                 for( let i = 0; i < data.message.length; i++){
//                     $('<img>',{//So this is how we create a new element in jQuery ie. pass the element and pass the attribute values.So this will create the image tag. Then add the imag tag to the container.Then add the image as source.
//                         src:data.message[i],
//                         height:'400px',
//                         width:'400px'
//                         }).appendTo('#subBreedImage');  
//                    }
//                 },
//             error:function(error){
//                 console.log(error);
//             }    
//         });
//     });
// }
// function displayImage(data){
//     console.log(data);
//        for( let i = 0; i < data.message.length; i++){
//         $('<img>',{//So this is how we create a new element in jQuery ie. pass the element and pass the attribute values.So this will create the image tag. Then add the imag tag to the container.Then add the image as source.
//             src:data.message[i],
//             height:'400px',
//             width:'400px'
//             }).appendTo('#image');  
//        }
//        console.log(breed);
//        console.log(data.message);   
//        $.ajax({
//         url:`https://dog.ceo/api/breeds/list/all`,
//        // url:'https://dog.ceo/api/breed/'+document.getElementById("dogsDropdown").value+'/images',
//         method:'GET',
//         success:function(res){
//             console.log(res);
//             allDogs = res.message;
//             console.log(allDogs[breed]);
//             if(allDogs[breed].length > 0 ){
//                 dispalyNext(allDogs[breed]);//calling a function inside another func is allowed in js and other languages too!
//             }
//         },
//         error:function(error){// error handling
//             console.log(error);
//         }
//     });
       

//  }
// var breed = $('#dogsDropdown').val(); //breed is now a jQuery Object. But initially when you did '#dogsDropdown'.val() was wrong because you ant put a function on a string. You can put a function only on an object. 
// //if( data.message.[breed].length > 0){

// //}
// function getBreed(a){
//     if( a != 0 ){// becomes true in case of getImage and false in case of next
//         breed = $('#dogsDropdown').val()
//     }    
//     $.ajax({
//         url:`https://dog.ceo/api/breed/${breed}/images`,
//        // url:'https://dog.ceo/api/breed/'+document.getElementById("dogsDropdown").value+'/images',
//         method:'GET',
//         success:displayImage,
//         error:function(error){// error handling
//             console.log(error);
//         }
//     });
// }
// $('#getImage').click(function(){
//     numImage = 0;
//     getBreed(1);
// });
$('#getImage').click(function(){
    
    var breed=$('#dogsDropdown').val();
    
    $.ajax({
        url: `https://dog.ceo/api/breeds/list/all`, //use only breed for list url
        method:'get',
        success:function(data){  //data contains everything returned by url request
            console.log(data.message[breed]);
        if( data.message[breed].length > 0 ){ //check if subbreed exists. This is the syntax if yhe key of my object is a variable. 

            var subbreedsArray = data.message[breed];
            var subbreed=$('#subbreedA').val();
            rendersubbreedlist(subbreedsArray); //retrieve subbreed array from data
            $.ajax({
                url: `https://dog.ceo/api/breed/${breed}/${subbreed}/images`, // breed + subbreed for image url
                method:'get',
                success: function(data){ //render subbreed images
                    console.log(subbreed);
                    $('#subBreedImage').html(" ");
                    for( let i = 0; i < data.message.length; i++){
                        $('<img>',{ src:data.message[i], height:'100px', width:'100px'}).appendTo('#subBreedImage');
                    }
            	}
            });
        }
        else{
            $.ajax({
                url: `https://dog.ceo/api/breed/${breed}/images`,//use only breed image url
                method:'get',
                success:function(data){//addan aleert that subbreed doesnt exixts
                    $('#breedImage').html(" ");
                    for( let i = 0; i < data.message.length; i++){
                       $('<img>',{ src: data.message[i], height:'400px', width:'400px'}).appendTo('#breedImage');//retrieve breed images from data like fromm 32-38 of your code.
                    }   
           		}
            });
        }
      }
    }); 
});


function rendersubbreedlist(subbreedsArray){//here just do thw work that you are getting an array of subbreeds and you need to render it irrespective of the breed choosen bt the user. Render subbreeds dropdown
     var subbreedVariable = $('#subbreedA');
     if(subbreedsArray.length == 0 ){
         return;
     }
     console.log(subbreedVariable);
     if( subbreedVariable){//when select tag is selected
          $('#subbreedParent').html(" ");// in " " method only inner html is removed and in .remove inner html + element itself
     }
    var optionsVar;
    for( let i = 0; i < subbreedsArray.length; i++){
        optionsVar +=`<option value= ${subbreedsArray[i]}> ${subbreedsArray[i]} </option>`;//basically all the options tags are getting concatenated in this var  besides each other
    }
    var selectVar = "<select name = 'subbreed' id = 'subbreedA'> "+ optionsVar +" </select> "//and every optionsVar elememet is coming here
    $('#subbreedParent').append(selectVar);
}

$('#dogsDropdown').change(function(){
    breed=$('#dogsDropdown').val();
    $.ajax({
        url: `https://dog.ceo/api/breeds/list/all`, //use list url
        method: 'get',
        success:function(data){
           var subbreedsArray = data.message[breed]; //subbreed_arr is like data.message[i]. Store this in a var and that var is subbreed
           console.log(subbreedsArray, breed, data.message[breed]);
        	rendersubbreedlist(subbreedsArray) //retrieve subbreeds from data
    	}
    });
});

