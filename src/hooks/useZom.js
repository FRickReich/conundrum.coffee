import { useEffect, useState } from "react";

export const useZoom = () =>
{
    const [ currentZoom, setCurrentZoom ] = useState(1);
    const [ isZoomResetAllowed, setIsZoomResetAllowed ] = useState(false);
    const [ isowZoomInAllowed, setIsZoomInAllowed ] = useState(false);
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
            setCurrentZoom(currentZoom - 1);
        }
    };

    const handleZoomOut = () =>
    {
        if(currentZoom < 4)
        {
            setCurrentZoom(currentZoom + 1);
        }
    };

    useEffect(() =>
    {
        switch(currentZoom)
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
    }, [currentZoom]);

    return [ currentZoom, handleZoomIn, handleZoomOut, handleZoomReset, isowZoomInAllowed, isZoomOutAllowed, isZoomResetAllowed ];
}