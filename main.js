canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth=2;
ctx.rect(180,189,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth=5;
ctx.arc(280, 241, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth=5;
ctx.arc(380, 241, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=5;
ctx.arc(480, 241, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth=5;
ctx.arc(330, 280, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "lime";
ctx.lineWidth=5;
ctx.arc(425, 280, 40, 0, 2 * Math.PI);
ctx.stroke();