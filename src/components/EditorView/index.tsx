import React, { useRef, useEffect, ReactComponentElement, ReactNode, useState } from 'react';

import ViewPanel from '../ViewPanel';

import './EditorView.scss';

const EditorView = () =>
{
    const [canvasContext, setCanvasContext] = useState<any>(null);

    const canvasRef : React.RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
    const panelRef : any = useRef(null);

    useEffect(() => {
        if (canvasRef.current && panelRef.current) {

		    const canvas = canvasRef.current;

		    canvas.width = panelRef.current.clientWidth;
		    canvas.height = panelRef.current.clientHeight;

            const context = canvas.getContext("2d");
            
            setCanvasContext(context);
        }
    }, [canvasRef]);

    const handleClickTest = () => {
        const colors = ["red", "green", "blue", "yellow", "purple", "orange", "black", "white", "brown"];

        const randomIndex = Math.floor(Math.random() * colors.length);

        canvasContext.fillStyle = colors[randomIndex];
		canvasContext.fillRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
    }

    return (
        <ViewPanel
            className="EditorView"
            unscrollable={true}
            ref={panelRef}
            title={ "Editor" }
            content={
                <canvas 
                    // width={window.innerWidth}
                    // height={window.innerHeight}
                    onClick={handleClickTest}
                    ref={canvasRef}
                />
            }
        />
    );
};
  
export default EditorView;


    // useEffect(() => {
    //     if (canvasRef.current && panelRef.current) {
    //         canvasRef.current.width = panelRef.current.clientWidth;
    //         canvasRef.current.height = panelRef.current.clientHeight;
    //     }
    // }, []);

    // useEffect(() => {
    //     if (canvasRef.current && panelRef.current) {
    //         const ctx = canvasRef.current.getContext("2d");
    //         requestAnimationFrame(() => draw(ctx));

    //         const handleResize = () => {
    //             if (ctx && panelRef.current) {
    //                 ctx.canvas.width = panelRef.current.clientWidth;
    //                 ctx.canvas.height =panelRef.current.clientHeight;
    //             }
    //         };

    //         handleResize();

    //         window.addEventListener("resize", handleResize);
    //         return () => window.removeEventListener("resize", handleResize);
    //     }

    // }, []);

    // const draw = (ctx : any) =>
    // {
    //     if(canvasRef.current)
    //     {
    //         ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    //         ctx.fillStyle = "salmon";
    //         ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    //         ctx.fillStyle = "white";
    //         ctx.font = "50px sans-serif";
    //         ctx.fillText("Resize Me!", canvasRef.current.width / 2 - 100, canvasRef.current.height / 2, 200);

    //         requestAnimationFrame(() => draw(ctx));
    //     }
    // }
