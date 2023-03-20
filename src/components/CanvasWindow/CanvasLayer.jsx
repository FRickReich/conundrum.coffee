import { useEffect, useRef, useState } from "react";
import { drawBackground } from "./drawBackground";
import { drawGrid } from './drawGrid';
import { drawStartCircle } from "./DrawStartCircle";
import { drawNode } from "./drawNode";
import { drawNodeConnectionLine } from "./drawNodeConnectionLine";
import { drawNodeVariable } from "./drawNodeVariable";

export const CanvasLayer = ({ width, height, zoom, ...props }) =>
{
    const canvasRef = useRef(null);

    let isDown = false;
    let dragTarget = null;
    let startX = null;
    let startY = null;
    let isTarget = null;

    const boxes = [
        { x: 200, y: 200, w: 150, h: 50, title: "testValue", type: "variable" },
        { x: 400, y: 110, w: 150, h: 120, title: "2", type: "node" },
        { x: 600, y: 150, w: 150, h: 150, title: "3", type: "node" }
    ]

    const draw = (ctx, frameCount) => {
        if(ctx)
        {
            drawBackground(ctx, { x: canvasRef.current.width, y: canvasRef.current.height});
            drawGrid(ctx, { zoom, x: canvasRef.current.width, y: canvasRef.current.height });

            drawStartCircle(ctx, { zoom, x: 150, y: canvasRef.current.height / 2, state: "stop" });

            boxes.map((data, i, arr) => 
            {
                if(data.type === "variable") drawNodeVariable(ctx, { zoom, ...data});
                if(data.type === "node") drawNode(ctx, { zoom, ...data});

                if(i > 0)
                {
                    drawNodeConnectionLine(ctx, { zoom, from: arr[i - 1], to: arr[i], parentType: arr[i - 1].type });
                }
            });

        }
    }

    const hitBox = (x, y) => {
        isTarget = null;

        for (let i = 0; i < boxes.length; i++) {
            const box = boxes[i];
            if(boxes[i].type === "node")
            {
                if (x >= box.x && x <= box.x + box.w && y >= box.y && y <= box.y + 20) {
                    dragTarget = box;
                    isTarget = true;
                    break;
                }
               }
            else if(boxes[i].type === "variable")
            {
                if (x >= box.x && x <= box.x + box.w && y >= box.y && y <= box.y + box.h) {
                    dragTarget = box;
                    isTarget = true;
                    break;
                }
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
        isTarget = null;
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

            console.log(isTarget)
            // setSelected(isTarget);
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
            {/* <p style={{ color: selected ? 'green' : 'red' }}>isTarget</p> */}
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
