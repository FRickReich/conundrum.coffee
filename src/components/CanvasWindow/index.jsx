import React, { useEffect, useRef, useState } from 'react';
import { CanvasLayer } from './CanvasLayer';

import { useKeyPress } from './../../hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faArrowsToDot } from '@fortawesome/free-solid-svg-icons';

import './CanvasWindow.scss';

const CanvasWindow = ({ ...props }) =>
{
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);

    const [ zoom, setZoom ] = useState(1);
    const [ isZoomResetAllowed, setIsZoomResetAllowed ] = useState(false);
    const [ isowZoomInAllowed, setIsZoomInAllowed ] = useState(false);
    const [ isZoomOutAllowed, setIsZoomOutAllowed ] = useState(false);

    const handleZoomReset = () =>
    {
        if(zoom !== 1)
        {
            setZoom(1);
        }
    };

    const handleZoomIn = () =>
    {
        if(zoom > 1)
        {
            setZoom(zoom - 1);
        }
    };

    const handleZoomOut = () =>
    {
        if(zoom < 4)
        {
            setZoom(zoom + 1);
        }
    };

	const handleContextMenu = (e) => {
		e.preventDefault();
		e.stopPropagation();

        // ... context menu goes here...
	};

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

    useEffect(() =>
    {
        switch(zoom)
        {
            case 1:
                setIsZoomResetAllowed(false);
                setIsZoomInAllowed(false);
                setIsZoomOutAllowed(true);
                break;
            case 2:
                setIsZoomResetAllowed(true);
                setIsZoomInAllowed(true);
                setIsZoomOutAllowed(true);
                break;
            case 3:
                setIsZoomResetAllowed(true);
                setIsZoomInAllowed(true);
                setIsZoomOutAllowed(true);
                break;
            case 4:
                setIsZoomResetAllowed(true);
                setIsZoomInAllowed(true);
                setIsZoomOutAllowed(false);
                break;
        }
    }, [zoom]);

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
            <CanvasLayer width={width} height={height} zoom={zoom}/>
            
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
                    className={`CanvasWindow__menu__button ${ isowZoomInAllowed ? '' : 'disabled' }`}
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
