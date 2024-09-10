import { useEffect, useRef } from "react";
import { InfiniteCanvas } from "../utils/infinite-canvas"; // Adjust the import path if needed

const InfiniteCanvasComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      new InfiniteCanvas(30); // Initialize the InfiniteCanvas class with your desired cell size
    }
  }, []);

  return (
    <div className="container">
      <canvas id="canvas" ref={canvasRef}></canvas>
      <div id="controls">
        <button type="button" id="zoom-in">
          +
        </button>
        <button type="button" id="zoom-out">
          -
        </button>
        <button type="button" id="move-left">
          &lt;-
        </button>
        <button type="button" id="move-right">
          -&gt;
        </button>
        <button type="button" id="move-up">
          ^
        </button>
        <button type="button" id="move-down">
          v
        </button>
      </div>
    </div>
  );
};

export default InfiniteCanvasComponent;
