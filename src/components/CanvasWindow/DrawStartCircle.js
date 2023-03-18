export const drawStartCircle = (
    ctx,
    circleDims,
    rectDims= { w: 400, h: 3500 }
) => {
    const {
        radius,
        strokeStyle,
        startX,
        startY,
        lineWidth,
        colorFill
    } = circleDims;
    // ctx?.clearRect(0, 0, rectDims.w, rectDims.h);

    ctx.save();

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;

    ctx?.beginPath();
    ctx?.arc(startX, startY, radius, 0, Math.PI * 2, true);
    ctx?.stroke();
    if (colorFill) {
        ctx.fillStyle = colorFill;
        ctx.fill();
    }
    ctx.restore();
};