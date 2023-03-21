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


// context.beginPath();
// context.lineWidth = 2;
// context.strokeStyle = '#121212';

// const curve = {
//     from: { x: 300, y: 50 }, 
//     to: { x: 500, y: 200 }
// }

// context.moveTo(
//     curve.from.x, // start x 
//     curve.from.y // start y
// );
// context.bezierCurveTo(
//     (curve.to.x + curve.from.x) / 2, // halb zwischen start x und ende x
//     curve.from.y, // auch start y


//     (curve.to.x + curve.from.x) / 2, // halb zwischen start x und ende x
//     curve.to.y, // auch ende y
    
//     curve.to.x, // ende x
//     curve.to.y  // ende y
// );
// context.stroke();