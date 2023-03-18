import { useEffect, useRef, useState } from "react";
import { drawBackground } from "./drawBackground";
import { drawGrid } from './drawGrid';
import { drawStartCircle } from "./DrawStartCircle";

export const CanvasLayer = ({ width, height, ...props }) => {
    const canvasRef = useRef(null);
    let isDown = false;
    let dragTarget = null;
    let startX = null;
    let startY = null;

    const boxes = [
        { x: 200, y: 220, w: 100, h: 50 },
        { x: 100, y: 120, w: 100, h: 50 }
    ]

    const draw = (ctx, frameCount) => {
        drawBackground(ctx, {x: canvasRef.current.width, y: canvasRef.current.height});
        drawGrid(ctx, {x: canvasRef.current.width, y: canvasRef.current.height});
        
        drawStartCircle(ctx, {
            radius: 50,
            lineWidth: 3,
            strokeStyle: "black",
            colorFill: "black",
            startY: canvasRef.current.height / 2,
            startX: 150
          });
        
        boxes.map(info => drawFillRect(ctx, info));
    }

    const drawFillRect = (ctx, info, style = {}) => {
        const { x, y, w, h } = info;
        const { backgroundColor = 'black' } = style;

        ctx.beginPath();
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(x, y, w, h);
    }

    const hitBox = (x, y) => {
        let isTarget = null;
        for (let i = 0; i < boxes.length; i++) {
            const box = boxes[i];
            if (x >= box.x && x <= box.x + box.w && y >= box.y && y <= box.y + box.h) {
                dragTarget = box;
                isTarget = true;
                break;
            }
        }
        return isTarget;
    }

    const handleMouseDown = e => {
        startX = parseInt(e.nativeEvent.offsetX - canvasRef.current.clientLeft);
        startY = parseInt(e.nativeEvent.offsetY - canvasRef.current.clientTop);
        isDown = hitBox(startX, startY);
    }
    const handleMouseMove = e => {
        if (!isDown) return;

        const mouseX = parseInt(e.nativeEvent.offsetX - canvasRef.current.clientLeft);
        const mouseY = parseInt(e.nativeEvent.offsetY - canvasRef.current.clientTop);
        const dx = mouseX - startX;
        const dy = mouseY - startY;
        startX = mouseX;
        startY = mouseY;
        dragTarget.x += dx;
        dragTarget.y += dy;
        draw();
    }
    const handleMouseUp = e => {
        dragTarget = null;
        isDown = false;
    }
    const handleMouseOut = e => {
        handleMouseUp(e);
    }

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId

        //Our draw came here
        const render = () => {
            frameCount++;

            context.clearRect(0, 0, context.canvas.width, context.canvas.height)
            context.fillStyle = "darkgrey";
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }

        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])


    return (
        <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseOut}
            width={width}
            height={height}
            {...props}
        />
    );
};
