import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import ViewPanel from '../ViewPanel';
import NodeBrowserItem from './NodeBrowserItem';
import ViewPanelButton from '../ViewPanelButton';

import './NodeBrowser.scss';

const NodeBrowser = ({ children }) =>
{
    const [ isExpanded, setIsExpanded ] = useState(true);

    const nodeList =
    {
        name: "JavaScript",
        type: "folder",
        items:
        [
            {
                name: "Libraries",
                type: "folder",
                items: [
                    {
                        name: "Math",
                        type: "folder",
                        items: [
                            {
                                name: "Properties",
                                type: "folder",
                                items: 
                                [
                                    {
                                        name: "PI",
                                        type: "file"
                                    }
                                ]
                            },
                            {
                                name: "Methods",
                                type: "forder",
                                items: 
                                [
                                    {
                                        name: "ceil",
                                        type: "file"
                                    },
                                    {
                                        name: "floor",
                                        type: "file"
                                    },
                                    {
                                        name: "max",
                                        type: "file"
                                    },
                                    {
                                        name: "min",
                                        type: "file"
                                    },
                                    {
                                        name: "random",
                                        type: "file"
                                    },
                                    {
                                        name: "round",
                                        type: "file"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "Logics",
                type: "folder",
                items: [
                    {
                        name: "if",
                        type: "file"
                    },
                    {
                        name: "if/else",
                        type: "file"
                    },
                    {
                        name: "if/else if",
                        type: "file"
                    },
                    {
                        name: "switch",
                        type: "file"
                    }
                ]
            },
            {
                name: "Function",
                type: "file"
            },
            {
                name: "Variable",
                type: "file"
            },
        ]
    };

    const collapseAll = () => {
        setIsExpanded(false);
    }

    return (
        <ViewPanel
            title="Library"
            className="NodeBrowser"
            scollable={true}
            menu={
                <>
                    <ViewPanelButton label="Collapse All" onClick={() => collapseAll()}/>
                </>
            }
        >
            <div className="NodeBrowser__itemsList">
                <NodeBrowserItem files={nodeList} expanded={isExpanded}/>
            </div>
        </ViewPanel>
    );
};
  
export default NodeBrowser;
