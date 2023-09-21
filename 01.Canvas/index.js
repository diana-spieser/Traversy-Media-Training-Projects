const canvas = document.getElementById('my-canvas');

const ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 150, 100); // x -horizontal axis, y -verticam axis, width, height

// Draw circle
ctx.fillStyle = 'blue';
ctx.arc(300, 300, 100, 0, Math.PI * 2); // x, y, radius, start angle, end angle
ctx.fill();

// Draw Line

ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 5;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw text
ctx.font = '30px Arial';
ctx.lineWidth = 2; // stroke width
ctx.fillStyle = 'green';
ctx.strokeStyle = 'purple';
ctx.fillText('Hello World', 300, 100, 300); // text, x, y
ctx.strokeText('Hello World', 300, 500, 300); // text, x, y

// Draw image

const image = document.querySelector('img');
image.style.display = 'none';

image.addEventListener('load', () => {
  ctx.drawImage(image, 250, 250, 100, 100);
});
