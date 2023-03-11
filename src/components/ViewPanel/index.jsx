import React from 'react';

import Scrollable from '../Scrollable';

import './ViewPanel.scss';

const ViewPanel = React.forwardRef((props, ref) =>
{
    return (
        <div className={`ViewPanel ${ props.className && props.className }`} ref={ ref }>
            <div className="ViewPanel__heading">
                <div className="ViewPanel__heading__title">
                    { props.title || "Default" }
                </div>
                <div className="ViewPanel__heading__menu">
                { props.menu }
                </div>
            </div>
            <div className="ViewPanel__content">
                <Scrollable inactive={props.unscrollable}>
                    { props.content }
                </Scrollable>
            </div>
        </div>
    );
});
  
export default ViewPanel;
