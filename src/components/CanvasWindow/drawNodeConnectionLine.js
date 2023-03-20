export const drawNodeConnectionLine = (
    ctx,
    data
) => {
    if(ctx)
    {
        const { zoom, from, to, parentType = "node", } = data;

        const handleSize = (input) =>
        {
            return (input / zoom)
        };

        ctx.save();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = handleSize(4);
        ctx.strokeStyle = 'red';
        ctx.beginPath();

        if(parentType === "node")
        {
            ctx.moveTo((handleSize(from.x) + handleSize(from.w)) - handleSize(10), handleSize(from.y) + handleSize(35));
        }
        else if(parentType === "variable")
        {
            ctx.moveTo((handleSize(from.x) + handleSize(from.w)) - handleSize(10), handleSize(from.y) + handleSize(from.h / 2));
        }
        
        ctx.lineTo(handleSize(to.x) + handleSize(10), handleSize(to.y) + handleSize(10));

        ctx.stroke();
        ctx.restore();

    }
}