import React, { useEffect, useRef } from 'react'

const Canvas = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current as unknown as HTMLCanvasElement;
    if (canvas!== null) {
      const context = canvas?.getContext('2d');
      if (context !== null) {
        context.fillStyle = '#000000';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      }

    }
  }, [canvasRef]);

  return (
    <canvas ref={canvasRef} {...props} />
  )
}

export {}

export default Canvas