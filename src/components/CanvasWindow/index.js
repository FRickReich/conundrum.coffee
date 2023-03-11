import { CanvasBase } from 'react-canvas-resize';

import { FillerLayer, GridLayer, NodeLayer } from '../Layers';

import './CanvasWindow.scss';

const CanvasWindow = ({ ...props }) =>
{
	const handleContextMenu = (e) => {
		e.preventDefault();
		e.stopPropagation();

        // ... context menu goes here...
	};

    return (
        <CanvasBase
            className="CanvasWindow"
            play
            ratio={[13, 8]}
            onContextMenu={handleContextMenu}
        >
            <FillerLayer color="#363636"/>
            <GridLayer color="red"/>
            <NodeLayer
                onMouseDown={() => console.log("ok...")}
            />
        </CanvasBase>
    );
};
  
export default CanvasWindow;
