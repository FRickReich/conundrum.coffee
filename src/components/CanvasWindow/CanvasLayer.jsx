import { useEffect } from 'react';
import { useCanvas, useToggle, useDrawNodes } from "./../../hooks/";

import { drawBackground } from "./drawBackground";
import { drawNodeFunc } from "./drawNodeFunc";
import { drawGrid } from './drawGrid';
import { drawNodeConnectionLine } from "./drawNodeConnectionLine";
import { drawNodeVariable } from "./drawNodeVariable";
import { useEditor } from '../../context/EditorContext';

export const CanvasLayer = ({ width, height, zoom, ...props }) =>
{
    const [canvasRef, tracer, frame ] = useCanvas('2d');

    const { nodes, setCurrentZoom, setSelectedNode, selectedNode } = useEditor();

    let isDown = false;
    let dragTarget = null;
    let startX = null;
    let startY = null;
    let isTarget = null;

    const selectTarget = (box) =>
    {
        if(selectedNode === null)
        {
            setSelectedNode(box);
        }
        else if(box.uid !== selectedNode.uid)
        {
            setSelectedNode(box);
        }
    }

	const draw = tracer((context) => {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
		
        drawBackground(context, { x: canvasRef.current.width, y: canvasRef.current.height});
        drawGrid(context, { zoom, x: canvasRef.current.width, y: canvasRef.current.height });

        if(dragTarget !== null)
        {
            selectTarget(dragTarget);
        }

        nodes.map((data, i, arr) => 
        {
            if(data.type === "variable") drawNodeVariable(context, { zoom, ...data});
            if(data.type === "node") drawNodeFunc(context, { zoom, ...data});

            if(i > 0)
            {
                drawNodeConnectionLine(context, { zoom, from: arr[i - 1], to: arr[i], parentType: arr[i - 1].type });
            }

            return true;
        });
	});

    const hitBox = (x, y) => {
        isTarget = null;

        
        for (let i = 0; i < nodes.length; i++)
        {
            const box = nodes[i];
            if(nodes[i].type === "node")
            {
                if (x >= box.x && x <= box.x + box.w && y >= box.y && y <= box.y + 20) {
                    nodes[i].selected = true;
                    dragTarget = box;
                    isTarget = true;
                    break;
                }
            }
            else if(nodes[i].type === "variable")
            {
                if (x >= box.x && x <= box.x + box.w && y >= box.y && y <= box.y + box.h) {
                    nodes[i].selected = true;
                    dragTarget = box;
                    isTarget = true;
                    break;
                }
            }
        }
        return isTarget;
    }

	useEffect(() => {
        draw();

        return () => {
            window.cancelAnimationFrame(frame());
        }
    }, [width, height, zoom, draw, frame]);
    
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
        
        
        if(dragTarget !== null)
        {
            dragTarget.selected = false;
        }
        dragTarget = null;
        isDown = false;
    }

    const handleMouseOut = e => {
        handleMouseUp(e);
    }

	return (
        <>
            <canvas
                className={`CanvasLayer`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseOut={handleMouseOut}
                width={width}
                height={height}
                ref={canvasRef}
                {...props}
            />
        </>
	);
}

// <button onClick={() => setDipColor(!dipColor)}>change</button>
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
