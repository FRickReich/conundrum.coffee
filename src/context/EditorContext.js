import { createContext, useContext, useEffect, useState } from "react";
import { useZoom } from "../hooks";

const editorContext = createContext();

const exampleNode1 =
{
    uid: "x1",
    pos: { x: 400, y: 110 },
    name: "FUNC 1",
    type: "function",
}

const exampleNode2 =
{
    uid: "x2",
    pos: { x: 600, y: 150 },
    name: "Func 2",
    type: "function"
}

export const EditorProvider = ({ children }) =>
{
    const [ currentProject, setCurrentProject ] = useState(null);
    const [ context, setContext ] = useState();
    const [ nodes, setNodes] = useState(
        [
            { uid: "1", x: 200, y: 200, w: 150, h: 50, name: "testValue", type: "variable" },
            { uid: "2", x: 400, y: 110, w: 150, h: 120, name: "FUNC1", type: "node" },
            { uid: "3", x: 600, y: 150, w: 150, h: 150, name: "FUNC2", type: "node" }
        ]
    );

    const createNode = (data) =>
    {
        setNodes([...nodes, data]);
        console.log("creating node")
    }

    return (
        <editorContext.Provider
            value={{ 
                nodes, 
                setNodes,
                context,
                setContext,
                createNode,
            }}
            children={children}
        />
    )
}

export const useEditor = () =>
{
    return useContext(editorContext);
}