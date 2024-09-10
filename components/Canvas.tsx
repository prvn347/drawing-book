"use client";
import { useDraw } from "@/hooks/useDraw";
import { colorState, lineWidhtState } from "@/store/atom";
import { Draw } from "@/types/Draw";
import React from "react";
import { useRecoilValue } from "recoil";

export const Canvas = () => {
  const color = useRecoilValue(colorState);
  const lineWidthValue = useRecoilValue(lineWidhtState);
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine);

  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = color;
    const lineWidth = lineWidthValue;

    let startPoint = prevPoint ?? currentPoint;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.globalAlpha = 0.1;
    // ctx.beginPath();
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.fillStyle = lineColor;
    ctx.fill();
    // ctx.closePath();
    ctx.globalAlpha = 1.9;
  }

  return (
    <div className=" relative">
      <div>
        <button
          className=" bg-red-500 text-sm font-medium px-2 py-1 rounded-md  m-5"
          onClick={clear}
        >
          clear canvas
        </button>
      </div>
      <canvas
        ref={canvasRef}
        width={1500}
        height={1080}
        onMouseDown={onMouseDown}
        className=""
      ></canvas>
    </div>
  );
};
