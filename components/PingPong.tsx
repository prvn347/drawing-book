"use client";
import React, { useRef, useEffect, useState } from "react";

export const PingPong = () => {
  const canvasRef = useRef(null);
  const [paddle1Y, setPaddle1Y] = useState(250);
  const [paddle2Y, setPaddle2Y] = useState(250);
  const [ball, setBall] = useState({ x: 400, y: 300, dx: 2, dy: 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const paddleHeight = 100;
    const paddleWidth = 10;
    const ballRadius = 10;
    const paddleSpeed = 10;

    const drawPaddle = (x, y) => {
      context.fillStyle = "white";
      context.fillRect(x, y, paddleWidth, paddleHeight);
    };

    const drawBall = () => {
      context.beginPath();
      context.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
      context.fillStyle = "white";
      context.fill();
      context.closePath();
    };

    const draw = () => {
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw paddles
      drawPaddle(10, paddle1Y); // Left paddle
      drawPaddle(canvas.width - paddleWidth - 10, paddle2Y); // Right paddle

      // Draw ball
      drawBall();

      // Ball movement
      setBall((prevBall) => {
        let newBall = { ...prevBall };

        // Update ball position
        newBall.x += newBall.dx;
        newBall.y += newBall.dy;

        // Collision with top or bottom walls
        if (
          newBall.y + ballRadius > canvas.height ||
          newBall.y - ballRadius < 0
        ) {
          newBall.dy = -newBall.dy; // Reverse Y direction
        }

        // Collision with left paddle
        if (
          newBall.x - ballRadius < paddleWidth + 10 &&
          newBall.y > paddle1Y &&
          newBall.y < paddle1Y + paddleHeight
        ) {
          newBall.dx = -newBall.dx; // Reverse X direction
        }

        // Collision with right paddle
        if (
          newBall.x + ballRadius > canvas.width - paddleWidth - 10 &&
          newBall.y > paddle2Y &&
          newBall.y < paddle2Y + paddleHeight
        ) {
          newBall.dx = -newBall.dx; // Reverse X direction
        }

        // Ball out of bounds (left or right side)
        if (
          newBall.x + ballRadius > canvas.width ||
          newBall.x - ballRadius < 0
        ) {
          newBall = { x: 400, y: 300, dx: 2, dy: 2 }; // Reset ball to center
        }

        return newBall;
      });
    };

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "w":
          if (paddle1Y > 0) setPaddle1Y((prev) => prev - paddleSpeed);
          break;
        case "s":
          if (paddle1Y < canvas.height - paddleHeight)
            setPaddle1Y((prev) => prev + paddleSpeed);
          break;
        case "ArrowUp":
          if (paddle2Y > 0) setPaddle2Y((prev) => prev - paddleSpeed);
          break;
        case "ArrowDown":
          if (paddle2Y < canvas.height - paddleHeight)
            setPaddle2Y((prev) => prev + paddleSpeed);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const gameLoop = setInterval(draw, 10);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(gameLoop);
    };
  }, [paddle1Y, paddle2Y, ball]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={1500}
        height={720}
        style={{ backgroundColor: "black" }}
      ></canvas>
    </div>
  );
};
