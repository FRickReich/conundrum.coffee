import { useState, useEffect } from 'react';

import { useUserAuth, useDatabase } from '../../context/';
import { Avatar, Button, ProjectSelector, ToggleMenu } from './../';

import logo from './logo.png' 

import './HeaderBar.scss';

import { Link } from 'react-router-dom';

const HeaderBar = ({ ...props }) =>
{
    const [ userInfo, setUserInfo ] = useState({});

    const { user } = useUserAuth();
    const { query, collection, db, where, getDocs } = useDatabase();

    const fetchUserInfo = async () =>
    {
        try
        {
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            setUserInfo(data);
        }
        catch (err)
        {
            console.error(err);
        }
    };

    useEffect(() => {
        if(user?.uid) fetchUserInfo();
      }, [user]);

    return (
        <div className='HeaderBar'>
            <div className="HeaderBar__container">
                <div className="HeaderBar__container__left">
                    <Link to={user?.uid ? '/projects' : ''}>
                        <img src={ logo } className="logo" alt="" />
                    </Link>
                    <div className="divider"></div>
                    <div className="menu">
                    {
                        user?.uid ?
                        (
                            <ProjectSelector userInfo={userInfo} />
                        )
                        :
                        (<></>) 
                    }
                    </div>
                </div>
                <div className="HeaderBar__container__menu">
                    {
                        user ? 
                        (
                            <>
                                <ToggleMenu
                                    userInfo={ userInfo }
                                >
                                    <Avatar displayName={ userInfo.name }/>
                                </ToggleMenu>
                            </>   
                        )
                        :
                        (
                            <div className="main">
                                <Button isLink to={"/login"} info>Log In</Button>
                                <Button isLink to={"/signup"} info outline>Sign Up</Button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
  
export default HeaderBar;
