import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

export const useDrawNodes = (ctx) => 
{

    // const exampleNode =
    // {
    //     name: "FUNC",
    //     rows: [
    //         {
    //             inputs:
    //             [

    //             ],
    //             outputs:
    //             [

    //             ]
    //         }
    //     ],
    //     return: "String"
    // }

    const [ context, setContext ] = useState(ctx);
    const [ nodes, setNodes] = useState(
        [
            { uid: "1", x: 200, y: 200, type: "variable", name: "VAR" },
            { uid: "2", x: 400, y: 110, type: "node", name: "FUNC1", rows: [], returns: "String"},
            { uid: "3", x: 600, y: 150, type: "node", name: "FUNC2", rows: [], returns: "Bool" }
        ]
    );

    const createNode = (data) =>
    {
        setNodes([...nodes, data]);
        console.log("creating node")
    }

    const drawNode = () =>
    {

    }

    return { context, nodes, createNode, drawNode };
}
