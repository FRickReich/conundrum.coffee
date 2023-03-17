import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { useOutsideClick, useProject } from './../../hooks';

import Button from './../Button';

import './ProjectSelector.scss';
import Panel from '../Panel';
import { Link } from 'react-router-dom';

const ProjectSelector = ({ userInfo, ...props }) =>
{
    const [ open, setOpen ] = useState(false);

    const handleClickOutside = () => {
        setOpen(false);
    };

    const { isLoading, getProjectsByOwner, hasProjects, projects } = useProject();

    const myRef = useOutsideClick(handleClickOutside);

    const handleOpen = () =>
    {
        setOpen(!open);
    }

    useEffect(() => {
        getProjectsByOwner(userInfo.uid);
    }, [userInfo, getProjectsByOwner])

    return (
        <div className="ProjectSelector" ref={myRef} >
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
                    {
                        hasProjects  && isLoading === false ?
                        (
                            <ul>
                            {
                                projects.map((project, i) =>
                                {
                                    return <li><Link to={`/${userInfo.username}/${project.data().uid}`}>{ project.data().title }</Link></li>
                                })
                            }
                            </ul>
                        )
                        :
                        (
                            <Panel
                                info
                            >
                                You have not yet created any projects.
                                <br />
                                <Link to={`/${userInfo.username}/create-project`}>Create one now!</Link>
                            </Panel>
                        )
                    }
                    
                </div>
                <div className="ProjectSelector__menu__interaction">
                    <Button isLink to={`/${userInfo.username}/create-project`} fluid secondary>Create new project</Button>
                </div>
            </div>
        </div>
    );
};
  
export default ProjectSelector;
