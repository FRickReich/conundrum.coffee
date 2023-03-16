import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import Button from './../Button';

import './ProjectSelector.scss';
import Panel from '../Panel';
import { Link } from 'react-router-dom';

const ProjectSelector = ({ userInfo, ...props }) =>
{
    const [ open, setOpen ] = useState(false);

    const handleOpen = () =>
    {
        setOpen(!open);
    }

    return (
        <div className="ProjectSelector">
            <div 
                className={`ProjectSelector__header  ${ open ? 'open' : '' }`}
                onClick={handleOpen}
            >
                <div className="ProjectSelector__header__meta">
                    <div className="ProjectSelector__header__meta__username">
                        { userInfo.username}
                    </div>
                </div>
                <FontAwesomeIcon 
                    className={`ProjectSelector__header__interaction ${ open ? 'open' : '' }`} 
                    icon={open ? faCircleXmark : faChevronCircleDown }
                    onClick={handleOpen}
                />
            </div>
            <div className={`ProjectSelector__menu ${ open ? 'open' : '' }`}>
                <div className="ProjectSelector__menu__list">
                <Panel
                    info
                >
                    You have not yet created any projects.
                    <br />
                    <Link to="/projects">Create one now!</Link>
                </Panel>
                </div>
                <div className="ProjectSelector__menu__interaction">
                    <Button isLink to="/projects" fluid secondary>Create new project</Button>
                </div>
            </div>
        </div>
    );
};
  
export default ProjectSelector;
