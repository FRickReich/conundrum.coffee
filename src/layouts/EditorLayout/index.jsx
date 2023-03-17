import Split from 'react-split';
import { AdPanel, ConsoleView, EditorView, ViewPanel } from '../../components';

import './EditorLayout.scss';

const EditorLayout = (props) =>
{
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
                        <Split
                            className="split-panel"
                            direction="vertical"
                            sizes={[50, 50]}
                            minSize={[28, 28]}
                            gutterSize={4}
                        >
                            <ViewPanel title="Library">A</ViewPanel>
                            <ViewPanel title="Assets">B</ViewPanel>
                        </Split>
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
                                <ViewPanel title="Nodes">A</ViewPanel>
                                <ViewPanel title="Properties">B</ViewPanel>
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
