import { useEffect, useRef, useState } from 'react';
import { useCanvas } from "./../../hooks/useCanvas";

import { drawBackground } from "./drawBackground";
import { drawGrid } from './drawGrid';

export const CanvasLayer = ({ width, height, zoom, ...props }) =>
{
    const [canvasRef, tracer, frame ] = useCanvas('2d');

	const draw = tracer((context) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		
        drawBackground(context, { x: canvasRef.current.width, y: canvasRef.current.height});
        drawGrid(context, { zoom, x: canvasRef.current.width, y: canvasRef.current.height });
	});

	useEffect(() => {
        draw();

        return () => {
            window.cancelAnimationFrame(frame());
        }
    }, [width, height, zoom]);

	return (
        <>
		<canvas
			width={width}
			height={height}
			ref={canvasRef}
		/>
        </>
	);
}

{/* <button onClick={() => setDipColor(!dipColor)}>change</button> */}
// const [ dipColor, setDipColor ] = useState(true);
// useEffect relies on dipColor...

// context.clearRect(0, 0, width, height);
// context.fillStyle = dipColor ? "red" : "blue";
// context.fillRect(0, 0, width, height);

// context.fillStyle = "#000000";
// context.beginPath();
// context.arc(50 / zoom, 100 / zoom, (20 * Math.sin(frame() * 0.05) ** 2) / zoom, 0, 2 * Math.PI);
// context.fill();
// console.log(fps());
