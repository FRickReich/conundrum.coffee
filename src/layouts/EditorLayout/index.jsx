import { AdPanel, ConsoleView, EditorView, NodeBrowser, PropertiesWindow, AssetWindow } from '../../components';

// @todo: reimplement react-split
// @body: removed the use of react-split for now, implementation needs to be rewritten, when main editor visuals are finished

import './EditorLayout.scss';


const EditorLayout = (props) =>
{
    return (
        <div className="EditorLayout">
            <div className="viewport">
                <div className="horizontal">
                    <div className="browser">
                        <NodeBrowser/>
                        <AdPanel/>
                    </div>

                    <div className="editor">
                        <EditorView/>
                        <ConsoleView/>
                    </div>

                    <div className="elements">
                        <AssetWindow/>
                        <PropertiesWindow />
                    </div>
                </div>
            </div>
            <div className="bar">
                Bar
            </div>
        </div>
    );
};

export default EditorLayout;
