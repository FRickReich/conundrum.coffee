export const drawBackground = (
    ctx,
    size,
) => {
    ctx.save();
   
    ctx.fillStyle = "darkgrey";
	ctx.fillRect(0, 0, size.x, size.y);
    
    ctx.restore();
}
