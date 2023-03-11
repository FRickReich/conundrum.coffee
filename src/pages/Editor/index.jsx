import React, { useRef, useEffect } from 'react';
import { EditorLayout } from '../../layouts';

const Editor = () =>
{
        return(
        <EditorLayout>
            {/* <canvas
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseOut={handleMouseOut}
                onContextMenu={handleContextMenu}
            /> */}
        </EditorLayout>
    );
};

export default Editor;

// //     const canvasRef : React.RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
// //     let ctx : CanvasRenderingContext2D | null = null;
    
// //     const boxes = [
// //         { x: 200, y: 220, w: 100, h: 50 },
// //         { x: 100, y: 120, w: 100, h: 50 }
// //     ]
  
// //     let isDown : boolean = false;
// //     let dragTarget : any = null;
// //     let startX : number = 0;
// //     let startY : number = 0;

// //     useEffect(() => {
// //         if (canvasRef.current) {
// //             const canvasEle = canvasRef.current;
// //             canvasEle.width = canvasEle.clientWidth;
// //             canvasEle.height = canvasEle.clientHeight;
            
// //             ctx = canvasEle.getContext("2d");
// //         }
// //     }, []);

// //     useEffect(() => {
// //         draw();
// //     }, []);

// //     const draw = () => {
// //         if(ctx && canvasRef.current)
// //         {
// //             canvasRef.current.style.width ='100%';
// //             canvasRef.current.style.height='100%';
// //             canvasRef.current.width  = canvasRef.current.offsetWidth;
// //             canvasRef.current.height = canvasRef.current.offsetHeight;

// //             ctx.clearRect(0, 0, canvasRef.current.clientWidth, canvasRef.current.clientHeight);
// //             ctx.fillStyle = 'lightgray';
// //             ctx.fillRect(0, 0, canvasRef.current.clientWidth, canvasRef.current.clientHeight);

// //             drawGrid();

// //             boxes.map((info, i) => 
// //             {   
// //                 drawFillRect(info);
// //             });
// //         }
// //     }

// //     const drawFillRect = (info : any, style = {}) =>
// //     {
// //         if(ctx && canvasRef.current)
// //         {
// //             const { x, y, w, h } = info;
// //             ctx.beginPath();
// //             ctx.fillStyle = 'black';
// //             ctx.fillRect(x, y, w, h);
// //         }
// //     }

// //     const drawLine = (from : any, to : any) => 
// //     {
// //         if(ctx && canvasRef.current)
// //         {
// //             ctx.beginPath();
// //             ctx.moveTo(from.x, from.y);
// //             ctx.lineTo(to.x, to.y);
// //             ctx.stroke();
// //         }
// //     }

// //     const drawGrid = () =>
// //     {
// //         if(ctx && canvasRef.current)
// //         {
// //             let s = 24;
// //             let pL = 0;
// //             let pT = 0;
// //             let pR = 0;
// //             let pB = 0;

// //             ctx.strokeStyle = 'darkgray';

// //             ctx.beginPath()

// //             for(let x = pL; x <= canvasRef.current.clientWidth - pR; x += s)
// //             {
// //                 ctx.moveTo(x, pT);
// //                 ctx.lineTo(x, canvasRef.current.clientHeight - pB);
// //             }

// //             for(let y = pT; y <= canvasRef.current.clientHeight - pB; y += s)
// //             {
// //                 ctx.moveTo(pL, y);
// //                 ctx.lineTo(canvasRef.current.clientWidth - pR, y);
// //             }
            
// //             ctx.stroke()
// //         }
// //     }

// //     const hitBox = (x : number, y : number) =>
// //     {
// //         let isTarget : any = null;

// //         for (let i = 0; i < boxes.length; i++)
// //         {
// //             const box = boxes[i];

// //             if (x >= box.x && x <= box.x + box.w && y >= box.y && y <= box.y + box.h) {
// //                 dragTarget = box;
// //                 isTarget = true;
// //                 break;
// //             }
// //         }

// //         return isTarget;
// //     }

// //     const handleMouseDown = (e :  React.MouseEvent<HTMLCanvasElement, MouseEvent>) =>
// //     {
// //         if(canvasRef.current)
// //         {
// //             startX = e.nativeEvent.offsetX - canvasRef.current.clientLeft;
// //             startY = e.nativeEvent.offsetY - canvasRef.current.clientTop;
            
// //             isDown = hitBox(startX, startY);
// //         }
// //     }

// //     const handleMouseMove = (e :  React.MouseEvent<HTMLCanvasElement, MouseEvent>) =>
// //     {
// //         if(!isDown) return;

// //         if(canvasRef.current)
// //         {
// //             const mouseX : number = e.nativeEvent.offsetX - canvasRef.current.clientLeft;
// //             const mouseY : number = e.nativeEvent.offsetY - canvasRef.current.clientTop;

// //             const dx : number = mouseX - startX;
// //             const dy : number = mouseY - startY;

// //             startX = mouseX;
// //             startY = mouseY;

// //             dragTarget.x += dx;
// //             dragTarget.y += dy;

// //             draw();
// //         }
// //     }

// //     const handleMouseUp = (e :  React.MouseEvent<HTMLCanvasElement, MouseEvent>) =>
// //     {
// //         dragTarget = null;
// //         isDown = false;
// //     }

// //     const handleMouseOut = (e :  React.MouseEvent<HTMLCanvasElement, MouseEvent>) =>
// //     {
// //         handleMouseUp(e);
// //     }

// //     const handleContextMenu = (e :  React.MouseEvent<HTMLCanvasElement, MouseEvent>) =>
// //     {
// //         e.preventDefault();
// //         e.stopPropagation();

// //         if(canvasRef.current)
// //         {
// //             drawLine({ x: canvasRef.current.clientLeft, y: canvasRef.current.clientTop}, { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
// //         }
// //     }

//     return(
//         <EditorLayout>
//             {/* <canvas
//                 ref={canvasRef}
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={handleMouseUp}
//                 onMouseOut={handleMouseOut}
//                 onContextMenu={handleContextMenu}
//             /> */}
//         </EditorLayout>
//     );
// };

// export default Editor;
