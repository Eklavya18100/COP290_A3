import { useRef, useEffect } from 'react'

const useCanvas = draw => {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render)
    }
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw]);

  return canvasRef
};

export default useCanvas