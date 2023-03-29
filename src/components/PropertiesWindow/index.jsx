import ViewPanel from '../ViewPanel';
import ViewPanelButton from '../ViewPanelButton';

import { useEditor } from './../../context/EditorContext';

import './PropertiesWindow.scss';

const PropertiesWindow = (props) =>
{
    const { selectedNode } = useEditor();
    
    return (
        <ViewPanel
            className="PropertiesWindow"
            title={`${ selectedNode ? selectedNode.name : "Properties" }`} 
            scollable={true}
            menu={
                <>
                    <ViewPanelButton label="Reset"/>
                    <ViewPanelButton label="?"/>
                </>
            }
        >
            {
                selectedNode && selectedNode.uid
            }
        </ViewPanel>
    );
};
  
export default PropertiesWindow;
