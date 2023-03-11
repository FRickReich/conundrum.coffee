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
            content={props.body || ">" }
            menu={
                <>
                    <ViewPanelButton label="Clear"/>
                    <ViewPanelButton label="Copy"/>
                </>
            }
        />
    );
};
  
export default ConsoleView;
