var canvas = document.getElementById('canvasPage');
var ctx =  canvas.getContext('2d');
canvas.width = window.innerWidth; //D1 - Why are we doing it in canvas? and not in ctx like for stylestroke/linejoin/linecap 
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// ctx.lineWidth = 30;
ctx.globalCompositeOperation = 'difference';
var hue = 0;
var direction
isDrawing = false; //creating a flag
var startX, startY;
// [startX, startY] = [0, 0];
function draw(event){
    if( isDrawing ){
        console.log(event); 
        ctx.strokeStyle = `hsl(${hue}, 100%, 50% )`;
        // ctx.lineWidth = hue;
        ctx.beginPath();
        ctx.moveTo(startX,startY);//it starts from here
        ctx.lineTo(event.offsetX, event.offsetY );//it will end here
        [startX, startY] = [event.offsetX, event.offsetY];
        ctx.stroke(); //because of this the actual stroke happens.
        hue++;
        if( hue >= 360 ){
            hue = 0;
        }
        if( ctx.lineWidth >= 100 || ctx.lineWidth <= 1 ){
            direction = !direction;
        }
        if( direction ){
            ctx.lineWidth++;
        }
        else{
            ctx.lineWidth--;
        }
    }
    else
        return;
}

canvas.addEventListener('mousemove', draw ); //D3 - first mouseup/mousedown happens right and then this is triggered right? So mousemove includes mouseup/mousedown right ? So thats why we have called the function only in this right ?
canvas.addEventListener('mousedown', (event) => 
    {
      isDrawing = true;
      [ startX, startY ] = [event.offsetX, event.offsetY]; 
    }); // mousedown happens first then mousemove happens
canvas.addEventListener('mouseup', () => isDrawing = false );
canvas.addEventListener('mouseout',() => isDrawing = false); // D2 - why are we doing this in canvas and whhy are we doing mouseout


