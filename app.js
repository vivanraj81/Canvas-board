var width = document.querySelector("#width");
var canvas = document.querySelector("#canvas");
var px = document.querySelector(".px");
var ctx = canvas.getContext('2d');
var color = document.querySelector('#color')


console.log(canvas);

width.addEventListener("input", function fun() {
    px.innerText = width.value + "px"
});

var x = 0;
var y = 0;

function stopdraw() {
    isdrawing = false;
}


var isdrawing = false;
function startdraw(e){
    isdrawing = true;
    x = e.offsetX;
    y = e.offsetY;
}




function draw(e) {
    if (isdrawing == true) {
        const newX = e.offsetX;
        const newY = e.offsetY;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(newX, newY);
        ctx.stroke();

        x = newX
        y = newY

    }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", startdraw);
canvas.addEventListener("mouseup", stopdraw);


width.addEventListener('input', () =>{
    px.innerText= width.value + 'px';
     ctx.lineWidth= width.value;

});


color.addEventListener('input', function fun() {
    ctx.strokeStyle= color.value;

});