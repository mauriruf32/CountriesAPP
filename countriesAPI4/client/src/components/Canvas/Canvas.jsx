import React, { useRef, useEffect } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);
  

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const xwing = new Image();
    const tiefigther = new Image();

    xwing.src = "./images/xwing1.png";
    tiefigther.src = './images/tiefigther1.png';

    let paintbrush = xwing;

    const handleMouseMove = (event) => {
      const left = event.clientX;
      const top = event.clientY;

      context.drawImage(paintbrush, left, top);
    };

    const handleClick = () => {
      if (paintbrush === xwing) {
        paintbrush = tiefigther;
      } else {
        paintbrush = xwing;
      }
    };

    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};

export default Canvas;
