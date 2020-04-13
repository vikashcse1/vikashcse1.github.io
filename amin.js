var canvas = document.querySelector('canvas');

canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

var c=canvas.getContext('2d');

c.fillRect(1, 1 ,60, 100);
c.fillRect(900, 1 ,60, 100);
c.fillRect(300, 100 ,60, 100);
c.fillRect(400, 300 ,60, 100);

//lines
c.beginPath();
c.moveTo(500,300);
c.lineTO(300,300);
c.lineTo(400,300);
c.stroke();
