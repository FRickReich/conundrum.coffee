import { useEffect, useState } from "react";

export const useMousePosition = (global = false) => {
    const [mouseCoords, setMouseCoords] = useState({
        x: 0,
        y: 0
    });

    const handleCursorMovement = (event) => {
        let rect = event.target.getBoundingClientRect();
        setMouseCoords({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        });
    };
    useEffect(() => {
        if (global) {
            window.addEventListener("mousemove", handleCursorMovement);

            return () => {
                window.removeEventListener("mousemove", handleCursorMovement);
            };
        }
    }, [global]);

    return [mouseCoords, handleCursorMovement];
};