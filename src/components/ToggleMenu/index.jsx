import { useState } from "react";
import { useNavigate } from "react-router";

import { useUserAuth, useDatabase } from '../../context/';

import Button from "../Button";

import './ToggleMenu.scss';

const ToggleMenu = ({ children, userInfo, ...props }) =>
{
    const [ toggle, setToggle ] = useState(false);
    
    const { logOut, user } = useUserAuth();

    const navigate = useNavigate();

    const handleLogout = async () =>
    {
        try{
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    const showMenu = () =>
    {  
        setToggle(!toggle);
    }

    return (
        <div
            className="ToggleMenu"
            onClick={showMenu}
            { ...props }
        >
            <div className={`ToggleMenu__toggle ${ toggle ? 'open' : ''}`}>
                { children }
            </div>
            <div className={`ToggleMenu__container ${toggle ? 'open' : ''}`}>
                <div className="ToggleMenu__container__section">
                    <div className="name">{ userInfo.name }</div>
                    <div className="email">{ userInfo.email }</div>
                </div>
                <div className="ToggleMenu__container__section">Menu</div>
                <div className="ToggleMenu__container__section">
                    <Button onClick={handleLogout} fluid info>Log Out</Button>
                </div>
                <div className="ToggleMenu__container__section">Footer</div>
            </div>  
        </div>
    );
};
  
export default ToggleMenu;
