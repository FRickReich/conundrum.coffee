import ViewPanel from '../ViewPanel';
import ViewPanelButton from '../ViewPanelButton';

import './ConsoleView.scss';

const ConsoleView = (props) =>
{
    return (
        <ViewPanel
            className="ConsoleView"
            title="Console" 
            scollable={true}
            menu={
                <>
                    <ViewPanelButton label="Clear"/>
                    <ViewPanelButton label="Copy"/>
                </>
            }
        >
            {props.body || ">" }
        </ViewPanel>
    );
};
  
export default ConsoleView;
