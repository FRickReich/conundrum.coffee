export const drawNode = (
    ctx,
    data
) => {
    if(ctx)
    {
        const { x, y, w, h, title = "Default", zoom } = data;

        const handleSize = (input) =>
        {
            return (input / zoom)
        };

        const zoomedX = handleSize(x);
        const zoomedY = handleSize(y);
        const zoomedW = handleSize(w);
        const zoomedH = handleSize(h);

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

        const mainInput = ({ color = "grey" }) =>
        {    
            drawConnectionDot({
                x: zoomedX + handleSize(10), 
                y: zoomedY + handleSize(10),
                size: 5,
                isFilled: false,
                color
            });
        }
    
        const inputProperty = ({ title, color = "grey", textColor = "white" }) =>
        {
            ctx.fillStyle = textColor
            ctx.font = `${handleSize(12)}px Helvetica`;
            ctx.textAlign = "left";
            ctx.fillText(title, zoomedX + handleSize(20), zoomedY + handleSize(39));
    
            drawConnectionDot({
                x: zoomedX + handleSize(10), 
                y: zoomedY + handleSize(35),
                isFilled: false,
                color
            });
        }
    
        const outputProperty = ({ title, color = "grey", textColor = "white" }) =>
        {
            ctx.fillStyle = textColor
            ctx.font = `${handleSize(12)}px Helvetica`;
            ctx.textAlign = "right";
            ctx.fillText(title, (zoomedX + zoomedW) - handleSize(20), zoomedY + handleSize(39));
    
            drawConnectionDot({
                x: (zoomedX + zoomedW) - handleSize(10), 
                y: zoomedY + handleSize(35),
                isFilled: false,
                color
            });
        }
    
        ctx.save();
        
        // shadow of node box
        ctx.beginPath();
        ctx.shadowColor = "rgb(0, 0, 0, 0.5)";
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 15;
        
        // background of node box
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.roundRect(zoomedX, zoomedY, zoomedW, zoomedH, 5);
        ctx.fill();
    
        // background of title
        ctx.beginPath();
        ctx.fillStyle = "#333333";
        ctx.fillRect(zoomedX, zoomedY, zoomedW, handleSize(20));
        ctx.fill();
    
        // title of node box
        ctx.beginPath();
        ctx.font = `${handleSize(12)}px Helvetica`;
        ctx.fillStyle = 'white';
        ctx.fillText(title, zoomedX + handleSize(23), zoomedY + handleSize(14));
    
        // line below title of node box
        ctx.beginPath();
        ctx.lineWidth = handleSize(2);
        ctx.strokeStyle = "#555555";
        ctx.moveTo(zoomedX, zoomedY +  handleSize(20));
        ctx.lineTo(zoomedX + zoomedW, zoomedY + handleSize(20));
        ctx.stroke();
        
        mainInput({ title: "str", color: "red"});
        
        inputProperty({ title: "str", color: "cyan"});
        
        // input indicator
    
        // output indicator
        outputProperty({ title: "return", color: "cyan", textColor: "cyan" });
    
        ctx.restore();
    }
}
