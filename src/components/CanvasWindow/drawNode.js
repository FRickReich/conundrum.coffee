export const drawNode = (
    ctx,
    data
) => {
    if(ctx)
    {
        const { x, y, w, h, title = "Default" } = data;

        const drawConnectionDot = ({ x, y, isFilled, color = "grey" }) =>
        {
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, 2 * Math.PI);
    
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
    
        const inputProperty = ({ title, color = "grey", textColor = "white" }) =>
        {
            ctx.fillStyle = textColor
            ctx.font = "12px helvetica";
            ctx.textAlign = "left";
            ctx.fillText(title, x + 20, y + 39);
    
            drawConnectionDot({
                x: x + 10, 
                y: y + 35,
                isFilled: false,
                color
            });
        }
    
        const outputProperty = ({ title, color = "grey", textColor = "white" }) =>
        {
            ctx.fillStyle = textColor
            ctx.font = "12px helvetica";
            ctx.textAlign = "right";
            ctx.fillText(title, (x + w) - 20, y + 39);
    
            drawConnectionDot({
                x: (x + w) - 10, 
                y: y + 35,
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
        ctx.roundRect(x, y, w, h, 5);
        ctx.fill();
    
        // background of title
        ctx.beginPath();
        ctx.fillStyle = "#333333";
        ctx.fillRect(x, y, w, 20, 5);
        ctx.fill();
    
        // title of node box
        ctx.beginPath();
        ctx.font = "12px Helvetica";
        ctx.fillStyle = 'white';
        ctx.fillText(title, x + 5, y + 15);
    
        // line below title of node box
        ctx.beginPath();
        ctx.strokeStyle = "#777777";
        ctx.moveTo(x, y + 20);
        ctx.lineTo(x + w, y + 20);
        
        // input section
        
        // input indicator
        inputProperty({ title: "str", color: "cyan"});
    
        // output indicator
        outputProperty({ title: "return", color: "cyan", textColor: "cyan" });
    
        ctx.restore();
    }
}
