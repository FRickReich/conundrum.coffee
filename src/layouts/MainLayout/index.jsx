import Button from "../../components/Button";
import { useUserAuth } from "../../context/UserAuthContext";

import './MainLayout.scss';

const MainLayout = ({ children }) =>
{
    // const { user } = useUserAuth();

    return (
        <div className="MainLayout">
            <div className="MainLayout__header">
                <div className="MainLayout__header__logo">
                    A
                </div>
                <div className="MainLayout__header__menu">
                    <Button>Sign Up</Button>
                    <Button>Log In</Button>
                </div>
                {/* header - { user ? 'logged in' : 'not logged in' } */}
            </div>
            <div className="MainLayout__content">
                { children }
                <footer>footer</footer>
            </div>
        </div>
    );
};
  
export default MainLayout;
