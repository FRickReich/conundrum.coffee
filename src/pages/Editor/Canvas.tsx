import useCanvas from './useCanvas';

const Canvas = (props: any) => {

    const { draw, ...rest } = props
    const canvasRef = useCanvas(draw);

    return (
        <canvas ref={canvasRef} />
    )
}

export default Canvas
