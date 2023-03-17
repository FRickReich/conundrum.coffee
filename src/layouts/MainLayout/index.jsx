import './MainLayout.scss';

const MainLayout = ({ children }) =>
{
    return (
        <div className="MainLayout">
            <div className="MainLayout__content">
                { children }
                <footer>footer</footer>
            </div>
        </div>
    );
};
  
export default MainLayout;
