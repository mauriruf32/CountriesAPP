const canvas = document.querySelector('#drawingCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const xwing = document.createElement('img');
const tiefigther = document.createElement('img')

xwing.src = 'images/xwing1.png';
tiefigther.src= 'images/tiefigther1.png';

let paintbrush = xwing;

const context = canvas.getContext('2d');

const handleMouseMove = (event) => {
  const left = event.clientX;
  const top = event.clientY;

  context.drawImage(paintbrush, left, top);
}

const handleClick = () => {

  if (paintbrush === xwing) {
    paintbrush = tiefigther;
  } else {
    paintbrush = xwing;
  }

}

canvas.addEventListener('click', handleClick);
canvas.addEventListener('mousemove', handleMouseMove);