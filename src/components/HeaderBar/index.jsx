import { useUserAuth } from '../../context/UserAuthContext';
import { useNavigate } from "react-router";
import { Button } from './../';

import './HeaderBar.scss';

const HeaderBar = ({ ...props }) =>
{
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

    return (
        <div className='HeaderBar'>
            <div className="HeaderBar__container">
                <div className="HeaderBar__container__logo">Logo</div>
                <div className="HeaderBar__container__menu">
                    {
                        user ? 
                        (
                            <Button onClick={handleLogout} info>Log Out</Button>
                        )
                        :
                        (
                            <>
                                <Button isLink to={"/login"} info>Log In</Button>
                                <Button isLink to={"/signup"} info outline>Sign Up</Button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
  
export default HeaderBar;
