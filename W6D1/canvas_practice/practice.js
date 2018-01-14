document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("mycanvas");
  canvas.height = 500;
  canvas.width = 500;

  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(249, 249, 100, 0, 2*Math.PI);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 20;
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(249, 249, 100, 0, Math.PI);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(249, 249, 100, 0, Math.PI, true);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(249, 249, 20, 0, 2*Math.PI);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 20;
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(145,249);
  ctx.lineTo(229,249);
  ctx.lineWidth = 10;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(269,249);
  ctx.lineTo(355,249);
  ctx.lineWidth = 10;
  ctx.stroke();
});
