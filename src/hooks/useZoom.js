import { useEffect, useState } from "react";

export const useZoom = (initialState) => {
    const [ currentZoom , setCurrentZoom ] = useState(initialState);
    const [ maxZoom, setMaxZoom ] = useState(2);

    const [ isZoomResetAllowed, setIsZoomResetAllowed ] = useState(false);
    const [ isZoomInAllowed, setIsZoomInAllowed ] = useState(false);
    const [ isZoomOutAllowed, setIsZoomOutAllowed ] = useState(false);

    const handleZoomReset = () =>
    {
        if(currentZoom !== 1)
        {
            setCurrentZoom(1);
        }
    };

    const handleZoomIn = () =>
    {
        if(currentZoom > 1)
        {
            setCurrentZoom(currentZoom - 0.5);
        }
    };

    const handleZoomOut = () =>
    {
        if(currentZoom < maxZoom)
        {
            setCurrentZoom(currentZoom + 0.5);
        }
    };


    useEffect(() =>
    {
        if(currentZoom === 1)
        {
            setIsZoomResetAllowed(false);
            setIsZoomInAllowed(false);
            setIsZoomOutAllowed(true);
        }
        else if(currentZoom > 1 && currentZoom < maxZoom)
        {
            setIsZoomResetAllowed(true);
            setIsZoomInAllowed(true);
            setIsZoomOutAllowed(true);
        }
        else if(currentZoom === maxZoom)
        {
            setIsZoomResetAllowed(true);
            setIsZoomInAllowed(true);
            setIsZoomOutAllowed(false);
        }
    }, [
        currentZoom,
        maxZoom,
        handleZoomIn,
        handleZoomOut,
        handleZoomReset
    ]);

    return {
        currentZoom,
        maxZoom,
        handleZoomReset,
        handleZoomIn,
        handleZoomOut,
        isZoomResetAllowed,
        isZoomInAllowed,
        isZoomOutAllowed
    };
}
