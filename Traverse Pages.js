var page = 1;
var maxPages;
function appendNext(data){
    console.log(data);
    let list = data.photos;
    console.log(list);
    for(let i = 0; i < list.length; i++){
        $('#mainStuff').append(`<img src = ${list[i].img_src} height = 100px width = 100px >`);
    }
}
function displayNext(){//add cond so that pages doesnt exceeds maxpages or if the photos are less than 25 then it means its the last page 
    const key = 'VE9sQIIeMN3i00YgQ78Rb1svnDmmpXh5GCrJlS5h';
    var solVar =  $('#sol').val();// now solVar is a jQuery object but $('#sol').val() is not jQuery object.
    page++;
    if( page > maxPages){
        $('#nextPage').prop('disabled', true);
    }
    if( solVar < 0 ){
        alert('Enter positive values');
        return;
    }
    $('#prevPage').prop('disabled', false);
    $.ajax({
        url:`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solVar}&page=${page}&api_key=${key}`,
        method:'get',
        success:appendNext,
    });
}





function appendImage(data){
    console.log(data);
    let list = data.photos;
    console.log(list);
    for(let i = 0; i < list.length; i++){
        $('#mainStuff').append(`<img src = ${list[i].img_src} height = 100px width = 100px >`);
    }
}
function displayImage(){
    const key = 'VE9sQIIeMN3i00YgQ78Rb1svnDmmpXh5GCrJlS5h';
    var solVar =  $('#sol').val();// now solVar is a jQuery object but $('#sol').val() is not jQuery object
    if( solVar < 0 ){
        alert('Enter positive values');
        return;
    }
    $('#nextPage').prop('disabled', false);
    $.ajax({//put the query of page+sol wth page = 1
        url:`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solVar}&page=${page}&api_key=${key}`, //why
        method:'get',
        success:appendImage,
    });
 
    $.ajax({//du
        url:`https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=${key}`, //from where
        method:'get',
        success:function(data){
            console.log(data);
            let photos = data.photo_manifest.photos;//the entire array of photos went into photos
            for( let i = 0; i < photos.length; i++){
                if(photos[i].sol == solVar ){
                     maxPages = (photos[i].total_photos)/25;//inside photos array, elments are objects and total_photos is the key
                }
            }
        }
    });
}


$( document ).ready( function(){
    $('#prevPage').prop('disabled', true);
    $('#nextPage').prop('disabled', true);
});
$('#getImages').click(displayImage);
$('#nextPage').click(displayNext);