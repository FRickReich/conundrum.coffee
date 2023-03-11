import { useCallback } from 'react';
import { useLayer } from 'react-canvas-resize';

export default function StatsLayer({ color }) {
	const handleDraw = useCallback(
		({ canvas, fps, interval, count }) => {
			const ctx = canvas.getContext('2d');
			if (!ctx) throw new Error();

			const { width, height } = canvas;
			const statsBoxSize = { x: 100, y: 50 };
			const statsBoxLocation = { x: width - statsBoxSize.x - 25, y: height - statsBoxSize.y - 25};
			
			ctx.save();

            ctx.beginPath();
			ctx.shadowColor = "rgb(0, 0, 0, 0.75)";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;
			ctx.shadowBlur = 15;
			
			ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
			ctx.roundRect(statsBoxLocation.x, statsBoxLocation.y, statsBoxSize.x, statsBoxSize.y, 5);
			
			ctx.lineWidth = 2;
			ctx.strokeStyle = "#121212";
			ctx.stroke();
			ctx.fill();

            ctx.beginPath();
			ctx.font = "14px Arial";
			ctx.fillStyle = "white";
			ctx.fillText(`fps: ${fps}`, statsBoxLocation.x + 10, (statsBoxLocation.y - 20) + statsBoxSize.y);
			
			ctx.restore();
			

			
			
			

		},
		[]
	);

	useLayer(handleDraw);

	return null;
}