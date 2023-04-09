import ViewPanel from '../ViewPanel';

import './AssetWindow.scss';

const AssetWindow = () =>
{
    return (
        <ViewPanel
            className="AssetWindow"
            title={`Assets`} 
            scollable={true}
        >
            Project Assets
        </ViewPanel>
    );
};
  
export default AssetWindow;
