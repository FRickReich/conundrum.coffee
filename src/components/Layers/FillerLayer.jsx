import { useCallback } from 'react';
import { useLayer } from 'react-canvas-resize';

export default function FillerLayer({ color }) {
	const handleDraw = useCallback(
		({ canvas }) => {
			const ctx = canvas.getContext('2d');
			if (!ctx) throw new Error();

			const { width, height } = canvas;

			ctx.save();
			ctx.fillStyle = color;
			ctx.fillRect(0, 0, width, height);
			ctx.restore();
		},
		[color]
	);

	useLayer(handleDraw);

	return null;
}
