
function displayTask(data){
    $('#text').hide();
    $('#fetchC').hide();
    $('main').hide();
    console.log(data.data.courses);
    for(let i = 0; i < data.data.courses.length;i++){
        var title = data.data.courses[i].title;
        var level = data.data.courses[i].level;
        var imageURL = data.data.courses[i].classroom_icon_url;

        $('#mainStuff').append(`<div> <img src= ${imageURL}> <span>${title}</span> <span>${level}</span> </div>`);
    }
}
function task(){
    $.ajax({
        url:'https://api.codingninjas.in/api/v3/courses',
        method:'get',
        success:displayTask
    });
}

$('#fetchC').click(task);