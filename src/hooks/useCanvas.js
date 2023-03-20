import { useEffect, useRef, } from 'react';

const requestAnimationFrame = (
	window.requestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.msRequestAnimationFrame
);

const cancelAnimationFrame = (
	window.cancelAnimationFrame ||
	window.mozCancelAnimationFrame
);

export const useCanvas = (contextType = '2d', contextAttributes = undefined) => {
	const canvasRef = useRef(null);
	let canvas, context, animationFrameId, tracer;

    let lastTimestamp = 0;

    let currentFPS = 0;
    const maxFPS = 30;

	const updateContext = () => {
		canvas = canvasRef.current;
		if (canvas) {
			context = canvas.getContext(contextType, contextAttributes);
			animationFrameId = requestAnimationFrame(renderFrame);
		}
	};

	const setTracer = (tracerFn) => {
		tracer = tracerFn;
		return updateContext;
	};

	function renderFrame(timestamp) {
        if (animationFrameId) {
            window.cancelAnimationFrame(animationFrameId)
        }

		animationFrameId = requestAnimationFrame(renderFrame);
		tracer(context, canvas);
        
        if (timestamp - lastTimestamp < 1000 / maxFPS) return;
        currentFPS = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
	}
    
    const frame = () => animationFrameId;
    const fps = () => currentFPS.toFixed();

	useEffect(() => {
		updateContext();
		return () => cancelAnimationFrame(animationFrameId);
	}, []);

	return [canvasRef, setTracer, frame, fps];
};