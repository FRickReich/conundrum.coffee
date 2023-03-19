import { useEffect, useRef, useState } from "react";
import { drawBackground } from "./drawBackground";
import { drawGrid } from './drawGrid';
import { drawStartCircle } from "./DrawStartCircle";
import { drawNode } from "./drawNode";

export const CanvasLayer = ({ width, height, zoom, ...props }) =>
{
    const canvasRef = useRef(null);
    let isDown = false;
    let dragTarget = null;
    let startX = null;
    let startY = null;

    const boxes = [
        { x: 390, y: 220, w: 150, h: 200 },
        { x: 440, y: 110, w: 150, h: 120 },
        { x: 200, y: 120, w: 150, h: 150 }
    ]

    const draw = (ctx, frameCount) => {
        drawBackground(ctx, {x: canvasRef.current.width, y: canvasRef.current.height});
        drawGrid(ctx, {x: canvasRef.current.width, y: canvasRef.current.height, zoom});
        
        drawStartCircle(ctx, { zoom, x: 150, y: canvasRef.current.height / 2, state: "stop" });
        
        boxes.map(data => drawNode(ctx, data));
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
        // if (!isDown) {
        //     const canvas = canvasRef.current;
        //     const ctx = canvas.getContext('2d');

        //     for (var i = boxes.length - 1; i >= 0; i--)
        //     {
        //         console.log("s")
        //     // if (boxes[i] && ctx.isPointInPath(boxes[i], e.offsetX, e.offsetY)) {
        //     //         ctx.fillStyle = 'orange';
        //     //         ctx.fill(boxes[i]);
        //     //     } else {
        //     //         ctx.fillStyle = 'red';
        //     //         for (var d = boxes.length - 1; d >= 0; d--){ 
        //     //             ctx.fill(boxes[d]);
        //     //         }
        //     //     }
        //     }
        // };

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
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId;

        const render = () => {
            frameCount++;

            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            context.fillStyle = "darkgrey";
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        }

        if(context)
        {            
            render();
        }

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [draw])


    return (
        <>
            <canvas
                className={"CanvasLayer"}
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseOut={handleMouseOut}
                width={width}
                height={height}
                {...props}
            />
        </>
    );
};
