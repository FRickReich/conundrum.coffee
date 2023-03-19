export const drawGrid = (
    ctx,
    data
) => {
    if(ctx, data)
    {
        let s = 24 / data.zoom;
        let pL = 0;
        let pT = 0;
        let pR = 0;
        let pB = 0;
    
        ctx.save();
    
        ctx.lineWidth = 0.25;
        ctx.strokeStyle = '#121212';
    
        ctx.beginPath();
    
        for(let x = pL; x <= data.x - pR; x += s)
        {
            ctx.moveTo(x, pT);
            ctx.lineTo(x, data.y - pB);
        }
    
        for(let y = pT; y <= data.y - pB; y += s)
        {
            ctx.moveTo(pL, y);
            ctx.lineTo(data.x - pR, y);
        }
        
        ctx.stroke();
    
        ctx.restore();    
    }
    
}