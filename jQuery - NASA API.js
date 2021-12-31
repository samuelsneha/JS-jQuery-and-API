function displayImage(data){
    //Method - 1
    $('<img>',{//So this is how we create a new element in jQuery ie. pass the element and pass the attribute values.So this will create the image tag. Then add the imag tag to the container.Then add the image as source.
    src:data.url,
    height:'100%',
    width:'100%'
    }).appendTo('#dog-image-container');
    
    //Method - 2
    // var img = $(document.createElement('img'));
    // img.attr('src',data.hdurl);
    // console.log(img);
    // img.appendTo('#dog-image-container');
 
    //Method - 3
 // $(document.createElement('img')).attr('src', data.url).appendTo('#dog-image-container');
 // you can also use .append function
}



$.ajax({
   // url:'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-06-05',
    url:'https://api.nasa.gov/planetary/apod',
    method:'get',
    success:displayImage,
    data:{// you can put query parameters here also instead of adding them into the url
        //api_key: 'DEMO_KEY',
        api_key: 'VE9sQIIeMN3i00YgQ78Rb1svnDmmpXh5GCrJlS5h',//this key should be in strings
        date:'2018-06-05',
    }
});