import React, { useEffect, useRef, useState } from 'react';
import { CanvasLayer } from './CanvasLayer';

import { useKeyPress, useZoom } from './../../hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faArrowsToDot } from '@fortawesome/free-solid-svg-icons';

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

    const {
        currentZoom,
        handleZoomReset,
        handleZoomIn,
        handleZoomOut,
        isZoomResetAllowed,
        isZoomInAllowed,
        isZoomOutAllowed
    } = useZoom(1);

    useKeyPress(['-', '+', '.'], (event) => {
        switch(event.key)
        {
            case "+":
                handleZoomIn();
                break;
            case "-":
                handleZoomOut();
                break;
            case ".":
                handleZoomReset();
                break;
        }
    });

    useEffect(() => {
        const resizeObserver = new ResizeObserver((event) => {
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
            <CanvasLayer width={width} height={height} zoom={currentZoom}/>
            
            <div className="CanvasWindow__menu">
                <button
                    className={`CanvasWindow__menu__button ${ isZoomResetAllowed ? '' : 'disabled' }`}
                    onClick={handleZoomReset}
                >
                    <FontAwesomeIcon
                        icon={ faArrowsToDot }
                        />
                </button>
                <button
                    className={`CanvasWindow__menu__button ${ isZoomInAllowed ? '' : 'disabled' }`}
                    onClick={handleZoomIn}
                >
                    <FontAwesomeIcon
                        icon={ faPlus }
                        />
                </button>
                <button
                    className={`CanvasWindow__menu__button ${ isZoomOutAllowed ? '' : 'disabled' }`}
                    onClick={handleZoomOut}
                >
                    <FontAwesomeIcon
                        icon={ faMinus }
                        />
                </button>
            </div> 
        </div>
    );
};
  
export default CanvasWindow;
