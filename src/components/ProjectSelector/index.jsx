import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { useOutsideClick } from './../../hooks';

import Button from './../Button';

import './ProjectSelector.scss';
import Panel from '../Panel';
import { Link, useLocation } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

const ProjectSelector = ({ userInfo, ...props }) => {

    const location = useLocation();

    const [open, setOpen] = useState(false);
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [projectByUser, setProjectByUser] = useState("");

    const handleClickOutside = () => {
        setOpen(false);
    };

    const myRef = useOutsideClick(handleClickOutside);

    const handleOpen = () => {
        setOpen(!open);
    }

    /**
     * TODO: If a new project is created, the selector does not show the name, instead, it looks like no project was selected.
     */
    const handleCurrentProjectByOwner = async () =>
    {
        const currentPath = location.pathname.split(`/`);

        const currentProjectUid = currentPath[2];

        setProjectByUser(false);

        if(projects.length !== 0)
        {
            const currentProjectIndex = projects.findIndex(project => currentProjectUid === project.data().uid);

            if(currentProjectIndex !== -1)
            {
                setProjectByUser(projects[currentProjectIndex].data().title)
            }
        }
    }

    const getProjectsByOwner = async () => {
        const q = query(collection(db, "projects"), where("ownerId", "==", userInfo.uid));

        const ownerProjects = await getDocs(q);

        await setProjects(ownerProjects.docs);
        await handleCurrentProjectByOwner();
        await setIsLoading(false);
    }

    useEffect(() => {
        userInfo.uid && getProjectsByOwner();
    }, [userInfo]);

    useEffect(() =>
    {
        handleCurrentProjectByOwner();
    }, [location.pathname, projects, open]);

    return (
        <div className="ProjectSelector" ref={myRef} >
            <div
                className={`ProjectSelector__header  ${open ? 'open' : ''}`}
                onClick={handleOpen}
            >
                <div className="ProjectSelector__header__meta">
                    <div className="ProjectSelector__header__meta__username">
                        {userInfo.username}
                    </div>
                    {
                        projectByUser &&
                        <div className="ProjectSelector__header__meta__project">
                            { projectByUser }
                        </div>
                    }
                </div>
                <FontAwesomeIcon
                    className={`ProjectSelector__header__interaction ${open ? 'open' : ''}`}
                    icon={open ? faCircleXmark : faChevronCircleDown}
                    onClick={handleOpen}
                />
            </div>
            <div className={`ProjectSelector__menu ${open ? 'open' : ''}`}>
                <div className="ProjectSelector__menu__list">
                    {
                        isLoading === false ?
                            (
                                <>
                                    {
                                        projects.length !== 0 ?
                                            (
                                                <ul>
                                                    {
                                                        projects.map((project, i) => {
                                                            return <li key={i}>
                                                                <Link
                                                                    to={`/${userInfo.username}/${project.data().uid}`}
                                                                    onClick={() => setOpen(false)}
                                                                >
                                                                        {project.data().title}
                                                                </Link>
                                                            </li>
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
                                                    <Link to={`/${userInfo.username}/create-project`} onClick={() => setOpen(false)}>Create one now!</Link>
                                                </Panel>

                                            )
                                    }
                                </>
                            )
                            :
                            (<p>Loading....</p>)
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
