function appendImage(data){
    console.log(data);
    var list = data.photos;
    console.log(list);
    for(var i = 0; i < list.length; i++){
        $('#mainStuff').append(`<img src = ${list[i].img_src} height = 100px width = 100px >`);
    }
}
function displayImage(){
    const key = 'VE9sQIIeMN3i00YgQ78Rb1svnDmmpXh5GCrJlS5h';
    var solVar =  $('#sol').val();// now solVar is a jQuery object but $('#sol').val() is not jQuery
    var pageVar = $('#page').val();
    if( solVar < 0  || pageVar < 0 ){
        alert('Enter positive values');
        return;
    }
    $.ajax({
        url:`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solVar}page=2&api_key=${key}`,
        method:'get',
        success:appendImage,
    });
}
$('#getImages').click(displayImage);