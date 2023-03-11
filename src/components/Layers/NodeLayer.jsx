import { useCallback } from 'react';
import { Layer, useLayer } from 'react-canvas-resize';

export default function NodeLayer({ color, onMouseDown })
{
	const handleDraw = useCallback(
		({ canvas }) => {
			const ctx = canvas.getContext('2d');
			if (!ctx) throw new Error();

			const { width, height } = canvas;

			const boxes = [
		        { x: 200, y: 220, w: 100, h: 50 },
        		{ x: 100, y: 120, w: 100, h: 50 }
    		];

			let isDown = false;
			let dragTarget = null;
			let startX = 0;
			let startY = 0;

			const drawLine = (from, to) => 
			{
				ctx.save();
				ctx.lineWidth = 2;
				ctx.strokeStyle = 'black';
            	ctx.beginPath();
            	ctx.moveTo(from.x, from.y);
				ctx.lineTo(from.x + 40, from.y);
				ctx.lineTo(to.x - 40, to.y);
				ctx.lineTo(to.x, to.y);
				ctx.stroke();
				ctx.restore();
			}

			const drawBox = (data) =>
			{
				const { x, y, w, h } = data;
			
				ctx.save();
				ctx.beginPath();
				ctx.fillStyle = 'black';
				ctx.fillRect(x, y, w, h);
				ctx.restore();
			}

			const hitBox = (x, y) =>
			{
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

			// const handleMouseDown = (e) =>
			// {
			// 	startX = e.nativeEvent.offsetX - canvas.current.clientLeft;
			// 	startY = e.nativeEvent.offsetY - canvas.current.clientTop;
				
			// 	isDown = hitBox(startX, startY);
			// }

			// const handleMouseMove = (e) =>
			// {
			// 	if(!isDown) return;

			// 	const mouseX = e.nativeEvent.offsetX - canvas.current.clientLeft;
			// 	const mouseY = e.nativeEvent.offsetY - canvas.current.clientTop;

			// 	const dx = mouseX - startX;
			// 	const dy = mouseY - startY;

			// 	startX = mouseX;
			// 	startY = mouseY;

			// 	dragTarget.x += dx;
			// 	dragTarget.y += dy;

			// 	draw();
			// }

			// const handleMouseUp = (e) =>
			// {
			// 	dragTarget = null;
			// 	isDown = false;
			// }

			// const handleMouseOut = (e) =>
			// {
			// 	handleMouseUp(e);
			// }

			const draw = () =>
			{
				boxes.map((data, i) => 
				{   
					drawBox(data);
				});

				drawLine({x: 40, y: 30}, { x: 150, y: 200 });
			}


			ctx.save();

			draw();

			ctx.restore();
		},
		[color]
	);

	return (
		<Layer
			onDraw={handleDraw}
			onMouseDown={onMouseDown}
			// onMouseDown={handleMouseDown}
			// onMouseMove={handleMouseMove}
			// onMouseUp={handleMouseUp}
			// onMouseOut={handleMouseOut}
		/>
	);
}

// useLayer(handleDraw);

// ctx.strokeStyle = "rgb(255, 0, 0)";
// ctx.fillStyle = "rgba(255, 255, 0, .5)";
// ctx.beginPath();
// ctx.roundRect(100, 5, 100, 100, 20);
// ctx.stroke();
// ctx.fill();