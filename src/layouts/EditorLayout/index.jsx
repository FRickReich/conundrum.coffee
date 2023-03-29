import Split from 'react-split';
import { AdPanel, ConsoleView, EditorView, ViewPanel, Button, NodeBrowser, PropertiesWindow } from '../../components';

import { useEditor } from './../../context/EditorContext'

import './EditorLayout.scss';

const EditorLayout = (props) =>
{
    const { nodes, createNode, selectedNode } = useEditor();

    return (
        <div className="EditorLayout">
            <div className="viewport">
                <Split
                    className="horizontal"
                    minSize={[200, 100, 200]}
                    gutterSize={4}
                    sizes={[15, 70, 15]}
                >
                    <div className="browser">
                        {/* <Split
                            className="split-panel"
                            direction="vertical"
                            sizes={[50, 50]}
                            minSize={[28, 28]}
                            gutterSize={4}
                        >
                            {/* <ViewPanel title="Library" content={
                                <>
                                    {/* <Button
                                        onClick={() => createNode({ uid: "4", x: Math.floor(Math.random() * (500 - 200) + 200), y: 450, w: 250, h: 250, title: "4", type: "node" })}
                                    >Create</Button> 
                                    <NodeBrowser/>
                                </>
                            }/>
                             
                            <NodeBrowser/>
                            <ViewPanel title="Assets">
                                Project assets
                            </ViewPanel>
                        </Split> */}
                        <NodeBrowser/>
                        <AdPanel/>
                    </div>

                    <div className="editor">
                        <Split
                            className="split-panel"
                            direction="vertical"
                            sizes={[75, 25]}
                            minSize={[100, 100]}
                            gutterSize={4}
                            >
                                <EditorView/>
                                <ConsoleView/>
                        </Split>
                    </div>

                    <div className="elements">
                        <Split
                            className="split-panel"
                            direction="vertical"
                            sizes={[50, 50]}
                            minSize={[28, 28]}
                            gutterSize={4}
                            >
                                <ViewPanel title="Assets">
                                    Project assets
                                </ViewPanel>
                                <PropertiesWindow />
                        </Split>
                    </div>
                </Split>
            </div>
            <div className="bar">
                Bar
            </div>
        </div>
    );
};

export default EditorLayout;
