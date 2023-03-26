export const drawNodeVariable = (
    ctx,
    data
) => {
    if(ctx)
    {
        const { x, y, w, h, title = "Default", zoom, selected } = data;

        const handleSize = input => input / zoom;

        const drawConnectionDot = ({ x, y, isFilled, size, color = "grey" }) =>
        {
            ctx.beginPath();
            ctx.lineWidth = handleSize(1);
            ctx.arc(x, y, handleSize(size || 3), 0, 2 * Math.PI);
    
            if(isFilled === true)
            {
                ctx.fillStyle = color;
                ctx.fill();
            }
            else if(isFilled === false)
            {
                ctx.strokeStyle = color;
                ctx.stroke();
            }
        }

        const outputProperty = ({ title, color = "grey", textColor = "white" }) =>
        {
            ctx.fillStyle = textColor
            ctx.font = `${handleSize(12)}px Helvetica`;
            ctx.textAlign = "right";
            ctx.fillText(title, (zoomedX + zoomedW) - handleSize(20), zoomedY + handleSize(h / 2 + 3));
    
            drawConnectionDot({
                x: (zoomedX + zoomedW) - handleSize(10), 
                y: zoomedY + handleSize(h / 2),
                isFilled: false,
                color
            });
        }

        const zoomedX = handleSize(x);
        const zoomedY = handleSize(y);
        const zoomedW = handleSize(w);
        const zoomedH = handleSize(h);

        ctx.save();
        
        // shadow of node box
        ctx.beginPath();
        ctx.shadowColor = "rgb(0, 0, 0, 0.5)";
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 15;

        // background of node box
        ctx.beginPath();
        ctx.fillStyle = selected ? "#444444" : "#333333";
        ctx.roundRect(zoomedX, zoomedY, zoomedW, zoomedH, handleSize(5));
        
        ctx.lineWidth = handleSize(4);
        // ctx.strokeStyle = "#FFCCCC";
        // ctx.strokeStyle = "#CCFFFF";
        ctx.strokeStyle = "#f8d568";
        ctx.stroke();
        ctx.fill();

        // title of node box
        ctx.beginPath();
        ctx.font = `${handleSize(12)}px Helvetica`;
        ctx.fillStyle = 'white';
        ctx.fillText(title, zoomedX + handleSize(23), zoomedY + handleSize(h / 2 + 3));

        outputProperty({ title: "number", color: "#f8d568", textColor: "#f8d568" });
        
        ctx.restore();
    }
}
