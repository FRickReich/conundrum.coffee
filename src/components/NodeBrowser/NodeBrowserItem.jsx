import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const NodeBrowserItem = ({ files, expanded = false, layer = 0 }) =>
{
    const [ isExpanded, setIsExapanded ] = useState(expanded);
    const [ currentLayer, setCurrentLayer ] = useState(layer);

    useEffect(() =>
    {
        setCurrentLayer(layer + 1);
    },
    [isExpanded, currentLayer]);

    useEffect(() =>
    {
        setIsExapanded(expanded);
    }, [expanded])

    if(files.type === "file")
    {
        return (
            <>
                <div className={`NodeBrowser__itemsList__item file layer-${currentLayer}`}>{ files.name }</div >
            </>
        )
    }

    return (
        <>
            <div
                className={`NodeBrowser__itemsList__item directory ${ isExpanded ? 'open' : 'closed'} layer-${currentLayer}`}
                onClick={() => setIsExapanded(!isExpanded)}
            >
                { files.name }
                <FontAwesomeIcon
                    icon={isExpanded ? faChevronDown : faChevronUp}
                />
            </div>
            {
                isExpanded && files.items.map((item, i) => <NodeBrowserItem key={i} files={ item } layer={currentLayer}/>)
            }
        </>
    )
}

export default NodeBrowserItem;