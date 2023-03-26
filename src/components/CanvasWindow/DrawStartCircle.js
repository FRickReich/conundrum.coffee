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

        const zoomedX = handleSize(x);
        const zoomedY = handleSize(y);
    
        ctx.save();
    
        ctx.beginPath();
        ctx.shadowColor = "rgb(0, 0, 0, 0.5)";
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 15;
    
        ctx.beginPath();
        ctx.arc(zoomedX, zoomedY, 35 / zoom, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    
        ctx.beginPath();
        switch(state)
        {
            case "stop":
                ctx.fillStyle = "red";
                ctx.fillRect(zoomedX - handleSize(13), zoomedY - handleSize(13), handleSize(26), handleSize(26));
                break;
            case "pause":
                ctx.fillStyle = "orange";
                ctx.fillRect(zoomedX - 13, zoomedY - 13, 10, 26);
                ctx.fillRect(zoomedX + 13, zoomedY - 13, -10, 26);
                break;
            case "play":
                ctx.moveTo(zoomedX + 15, zoomedY );
                ctx.lineTo(zoomedX - 7, zoomedY - 15);
                ctx.lineTo(zoomedX - 7, zoomedY + 15);
                ctx.fillStyle = "green";
                break;
            default:
                ctx.fillStyle = "grey";
                ctx.fillRect(zoomedX - 13, zoomedY - 13, 26, 26);
        }
        ctx.fill();
        
    }
};
