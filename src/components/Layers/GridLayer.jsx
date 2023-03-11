import { useCallback } from 'react';
import { useLayer } from 'react-canvas-resize';

export default function GridLayer({ color }) {
	const handleDraw = useCallback(
		({ canvas }) => {
			const ctx = canvas.getContext('2d');
			if (!ctx) throw new Error();

			const { width, height } = canvas;

            let s = 24;
            let pL = 0;
            let pT = 0;
            let pR = 0;
            let pB = 0;

            ctx.save();

            ctx.lineWidth = 0.25;
            ctx.strokeStyle = '#121212';
            ctx.beginPath();

            for(let x = pL; x <= width - pR; x += s)
            {
                ctx.moveTo(x, pT);
                ctx.lineTo(x, height - pB);
            }

            for(let y = pT; y <= height - pB; y += s)
            {
                ctx.moveTo(pL, y);
                ctx.lineTo(width - pR, y);
            }
            
            ctx.stroke();

            ctx.restore();


		},
		[]
	);

	useLayer(handleDraw);

	return null;
}
