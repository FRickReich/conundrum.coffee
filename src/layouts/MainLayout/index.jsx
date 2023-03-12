import HeaderBar from "../../components/HeaderBar";

import './MainLayout.scss';

const MainLayout = ({ children }) =>
{
    return (
        <div className="MainLayout">
            <HeaderBar/>
            <div className="MainLayout__content">
                { children }
                <footer>footer</footer>
            </div>
        </div>
    );
};
  
export default MainLayout;
