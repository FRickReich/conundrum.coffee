import CanvasWindow from '../CanvasWindow';
import ViewPanel from '../ViewPanel';

import './EditorView.scss';

const EditorView = () =>
{
    return (
        <ViewPanel
            className="EditorView"
            unscrollable={true}
            title={ "Editor" }
            content={
                <div className="EditorView__canvas__container" >
                    <CanvasWindow/>
                </div>
            }
        />
    );
};
  
export default EditorView;

// import React, { useRef, useEffect, ReactComponentElement, ReactNode, useState } from 'react';

// import ViewPanel from '../ViewPanel';

// import './EditorView.scss';

// const EditorView = () =>
// {
//     const [canvasContext, setCanvasContext] = useState(null);

//     const canvasRef = useRef(null);
//     const panelRef = useRef(null);

//     return (
//         <ViewPanel
//             className="EditorView"
//             unscrollable={true}
//             ref={panelRef}
//             title={ "Editor" }
//             content={
//                 <div className="EditorView__canvas__container" >
//                     <canvas
//                         // onClick={handleClickTest}
//                         ref={canvasRef}
//                     />
//                 </div>
//             }
//         />
//     );
// };
  
// export default EditorView;

// const drawGrid = (ctx) => 
//     {
//             ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//             ctx.fillStyle = "salmon";
//             ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//             ctx.fillStyle = "white";
//             ctx.font = "50px sans-serif";
//             ctx.fillText("Resize Me!", canvasRef.current.width / 2 - 100, canvasRef.current.height / 2, 200);

//             requestAnimationFrame(() => drawGrid(ctx));
        
//     }

//     useEffect(() => {
//         if (canvasRef.current) {
//             const canvas = canvasRef.current;

//             canvas.width = panelRef.current.clientWidth;
//             canvas.height = panelRef.current.clientHeight;
            
//             const context = canvas.getContext("2d");
//             setCanvasContext(context);
//         }
//     }, []);

//     useEffect(() =>
//     {
//         if(canvasRef.current)
//         {
//             requestAnimationFrame(() => drawGrid(canvasContext));
//         }
//     }
//     , []);

// const handleClickTest = () => {
//     const colors = ["red", "green", "blue", "yellow", "purple", "orange", "black", "white", "brown"];

//     const randomIndex = Math.floor(Math.random() * colors.length);

//     canvasContext.fillStyle = colors[randomIndex];
//     canvasContext.fillRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
// }

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
