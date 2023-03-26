export const drawNodeFunc = (
    ctx,
    data
) => {
    if(ctx)
    {
        const { x, y, name = "Default", zoom, selected, nodeProps } = data;

        let w = 150;
        let h = 50;

        const headerHeight = 20;

        const createHeader = () =>
        {
            ctx.save();

            // background of title
            ctx.beginPath();
            ctx.fillStyle = selected ? "#444444" : "#333333";
            ctx.fillRect(x, y, w, headerHeight);
            ctx.fill();

            // title of node box
            ctx.beginPath();
            ctx.font = `12px Helvetica`;
            ctx.fillStyle = 'white';
            ctx.fillText(name, x + 23, y + 14);

            ctx.restore();
        }

        const createBody = () =>
        {
            // background of node box
            ctx.save();
            // shadow of node box

            ctx.beginPath();
            ctx.shadowColor = "rgb(0, 0, 0, 0.5)";
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 15;

            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.roundRect(x, y, w, h, 5);
            ctx.fill();

            ctx.restore();
        }
        
        createBody();
        createHeader();


    }
}

// const inputKeys =
        // [
        //     {
        //         title: "gc",
        //         type: "string"
        //     },
        // ];
        
        // const outputKeys =
        // [
        //     {
        //         title: "return",
        //         type: "string"
        //     },
        // ];
        
        // let h = (25 * (inputKeys.length + outputKeys.length));

        // const handleSize = (input) =>
        // {
        //     return (input / zoom)
        // };

        // const zoomedX = handleSize(x);
        // const zoomedY = handleSize(y);
        // const zoomedW = handleSize(w);
        // const zoomedH = handleSize(h);

        // const drawConnectionDot = ({ x, y, isFilled, size, color = "grey" }) =>
        // {
        //     ctx.beginPath();
        //     ctx.lineWidth = handleSize(1);
        //     ctx.arc(x, y, handleSize(size || 3), 0, 2 * Math.PI);
    
        //     if(isFilled === true)
        //     {
        //         ctx.fillStyle = color;
        //         ctx.fill();
        //     }
        //     else if(isFilled === false)
        //     {
        //         ctx.strokeStyle = color;
        //         ctx.stroke();
        //     }
        // }

        // const mainInput = ({ color = "grey" }) =>
        // {    
        //     drawConnectionDot({
        //         x: zoomedX + handleSize(10), 
        //         y: zoomedY + handleSize(10),
        //         size: 5,
        //         isFilled: false,
        //         color
        //     });
        // }
    
        // const inputProperty = ({ title, vPos, color = "grey", textColor = "white" }) =>
        // {
        //     ctx.fillStyle = textColor
        //     ctx.font = `${handleSize(12)}px Helvetica`;
        //     ctx.textAlign = "left";
        //     ctx.fillText(title, zoomedX + handleSize(20), zoomedY + handleSize(39 * vPos));
    
        //     drawConnectionDot({
        //         x: zoomedX + handleSize(10), 
        //         y: zoomedY + handleSize(35),
        //         isFilled: false,
        //         color
        //     });
        // }
    
        // const outputProperty = ({ title, vPos, color = "grey", textColor = "white" }) =>
        // {
        //     ctx.fillStyle = textColor
        //     ctx.font = `${handleSize(12)}px Helvetica`;
        //     ctx.textAlign = "right";
        //     ctx.fillText(title, (zoomedX + zoomedW) - handleSize(20), zoomedY + handleSize(39 * vPos));
    
        //     drawConnectionDot({
        //         x: (zoomedX + zoomedW) - handleSize(10), 
        //         y: zoomedY + handleSize(35),
        //         isFilled: false,
        //         color
        //     });
        // }
    
        // ctx.save();
        
        // // shadow of node box
        // ctx.beginPath();
        // ctx.shadowColor = "rgb(0, 0, 0, 0.5)";
        // ctx.shadowOffsetX = 2;
        // ctx.shadowOffsetY = 2;
        // ctx.shadowBlur = 15;
        
        // // background of node box
        // ctx.beginPath();
        // ctx.fillStyle = "black";
        // ctx.roundRect(zoomedX, zoomedY, zoomedW, zoomedH, 5);
        // ctx.fill();
    
        // // background of title
        // ctx.beginPath();
        // ctx.fillStyle = selected ? "#444444" : "#333333";
        // ctx.fillRect(zoomedX, zoomedY, zoomedW, handleSize(20));
        // ctx.fill();

        // inputKeys.forEach((property, i) =>
        // {
        //     inputProperty({ title: property.title, vPos: i + 1, color: "cyan"});
        // });

        // outputKeys.forEach((property, i) =>
        // {
        //     outputProperty({ title: property.title, vPos: i + 1, color: "cyan", textColor: "cyan" });
        // });
    
        // // title of node box
        // ctx.beginPath();
        // ctx.font = `${handleSize(12)}px Helvetica`;
        // ctx.fillStyle = 'white';
        // ctx.fillText(title, zoomedX + handleSize(23), zoomedY + handleSize(14));
    
        // // line below title of node box
        // ctx.beginPath();
        // ctx.lineWidth = handleSize(2);
        // ctx.strokeStyle = "#555555";
        // ctx.moveTo(zoomedX, zoomedY +  handleSize(20));
        // ctx.lineTo(zoomedX + zoomedW, zoomedY + handleSize(20));
        // ctx.stroke();
        
        // mainInput({ title: "str", color: "red"});
        
        // // inputProperty({ title: "str", color: "cyan"});
    
        // ctx.restore();