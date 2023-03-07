import Canvas from './Canvas';

const Editor = () =>
{
    const draw = (ctx : any, frameCount: any) => {

        const circles = [
            { x:  50, y:  50, r: 25 },
            { x: 250, y:  50, r: 25 },
            { x: 250, y: 250, r: 25 },
            { x:  50, y: 250, r: 25 },
        ];

        const mainCircle = { x: 150, y: 150, r: 44 };
        
        const drawCircle = (data : any) =>
        {

        }

        const drawLine = (from_: any, to : any) => {}

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.fill()
        

      }

    return (
        <div>
            <h1>Editor</h1>

            <Canvas draw={draw}/>
        </div>
    );
};

export default Editor;
