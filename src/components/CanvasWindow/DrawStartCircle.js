export const drawStartCircle = (
    ctx,
    data
) => {
    if(ctx)
    {
        const { zoom, x, y, state } = data;

        const handleSize = (input) =>
        {
            return (input / zoom)
        };
    
        ctx.save();
    
        ctx.beginPath();
        ctx.shadowColor = "rgb(0, 0, 0, 0.5)";
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 15;
    
        ctx.beginPath();
        ctx.arc(x, y, 35 / zoom, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    
        ctx.beginPath();
        switch(state)
        {
            case "stop":
                ctx.fillStyle = "red";
                ctx.fillRect(x - handleSize(13), y - handleSize(13), handleSize(26), handleSize(26));
                break;
            case "pause":
                ctx.fillStyle = "orange";
                ctx.fillRect(x - 13, y - 13, 10, 26);
                ctx.fillRect(x + 13, y - 13, -10, 26);
                break;
            case "play":
                ctx.moveTo(x + 15, y );
                ctx.lineTo(x - 7, y - 15);
                ctx.lineTo(x - 7, y + 15);
                ctx.fillStyle = "green";
                break;
            default:
                ctx.fillStyle = "grey";
                ctx.fillRect(x - 13, y - 13, 26, 26);
        }
        ctx.fill();
        
    }
    
    
    
};