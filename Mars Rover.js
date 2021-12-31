// function displayDate(){
//     $.ajax({
//         url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY',
//         method:'get',
//         success:function(data){
//             $(function(){
//                 $('#datePicker').datepicker();
//             });
//         }
//     });
// }
// $('#datePicker').click(displayDate);
var input = $("#datePicker").datepicker({ dateFormat: 'yy-mm-dd' });//so input has become a jQuery object now here

const key = 'VE9sQIIeMN3i00YgQ78Rb1svnDmmpXh5GCrJlS5h';
function appendImage(data){
    console.log(data);
    var list = data.photos;
    console.log(list)
    for(let i = 0; i < list.length; i++){
       $('#mainStuff').append(`<img src = ${list[i].img_src} height = 100px width = 100px >`);
    }
}
function displayImage(){
    $.ajax({
        url:`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${input.val()}&api_key=${key}`,
        method:'get',
        success:appendImage,
        error:function(error){
            console.log(error);
            console.log(input.val());
        }
    });

}
$('#getImages').click(displayImage);