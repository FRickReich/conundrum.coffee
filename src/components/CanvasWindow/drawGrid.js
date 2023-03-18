export const drawGrid = (
    ctx,
    size,
) => {
    
    let s = 24;
    let pL = 0;
    let pT = 0;
    let pR = 0;
    let pB = 0;

    ctx.save();

    ctx.lineWidth = 0.25;
    ctx.strokeStyle = '#121212';

    ctx.beginPath();

    for(let x = pL; x <= size.x - pR; x += s)
    {
        ctx.moveTo(x, pT);
        ctx.lineTo(x, size.y - pB);
    }

    for(let y = pT; y <= size.y - pB; y += s)
    {
        ctx.moveTo(pL, y);
        ctx.lineTo(size.x - pR, y);
    }
    
    ctx.stroke();

    ctx.restore();
}