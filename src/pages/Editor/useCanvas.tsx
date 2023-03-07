import { useRef, useEffect } from 'react'

const useCanvas = (draw: any) => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current
            const context = canvas.getContext('2d');
            let frameCount = 0
            let animationFrameId: any;

            

            const render = () => {
                frameCount++
                draw(context, frameCount)
                animationFrameId = window.requestAnimationFrame(render)
            }
            render()

            return () => {
                window.cancelAnimationFrame(animationFrameId)
            }
        }
    }, [draw])

    return canvasRef
}

export default useCanvas