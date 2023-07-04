import React, { useRef, useEffect, useState } from 'react';

const ServiceCanvas = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [mouseX, setMouseX] = useState();
  const [mouseY, setMouseY] = useState();
  const [oldMouseX, setOldMouseX] = useState();
  const [oldMouseY, setOldMouseY] = useState();

  const canvasRef = useRef(null);
  let canvas, context;

  const mouseMove = (e) =>{
    setOldMouseX(mouseX);
    setOldMouseY(mouseY);
    setMouseX(e.nativeEvent.offsetX); 
    setMouseY(e.nativeEvent.offsetY);
  }

  const draw = ctx => {
    ctx.beginPath();
    ctx.lineWidth = 100;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000000';
    ctx.moveTo(oldMouseX, oldMouseY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
  }

  //set up
  useEffect(()=>{ 
      canvas = canvasRef.current
      context = canvas.getContext('2d')
      context.fillStyle = '#FFFFFF'
      context.fillRect(0, 0, context.canvas.width, context.canvas.height)

      const handleResize = () => {
          setScreenWidth(window.innerWidth);
          setScreenHeight(window.innerHeight);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, [])

  useEffect(()=>{
      canvas = canvasRef.current
      context = canvas.getContext('2d')

      let frameCount = 0;
      let animationFrameId;
      
      const render = () => {
        frameCount++
        draw(context, frameCount) 
        animationFrameId = window.requestAnimationFrame(render)
      }
      render()
      
      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
  },[draw]);

  

  return (
    <canvas ref={canvasRef} width={screenWidth} height={screenHeight} onMouseMove={mouseMove} />
  )
};
export default ServiceCanvas;