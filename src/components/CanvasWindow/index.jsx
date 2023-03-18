import React, { useEffect, useRef, useState } from 'react';
import { CanvasLayer } from './CanvasLayer';
import './CanvasWindow.scss';

const CanvasWindow = ({ ...props }) =>
{
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);

	const handleContextMenu = (e) => {
		e.preventDefault();
		e.stopPropagation();

        // ... context menu goes here...
	};

    useEffect(() => {
        const resizeObserver = new ResizeObserver((event) => {
            // Depending on the layout, you may need to swap inlineSize with blockSize
            // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
            setWidth(event[0].contentBoxSize[0].inlineSize);
            setHeight(event[0].contentBoxSize[0].blockSize);
        });

        resizeObserver.observe(document.getElementById("editor"));
    }, [width, height]);

    return (
        <div
            id="editor"
            onContextMenu={handleContextMenu}
            className="CanvasWindow"
        >
            <CanvasLayer width={width} height={height}/>  
        </div>
    );
};
  
export default CanvasWindow;
