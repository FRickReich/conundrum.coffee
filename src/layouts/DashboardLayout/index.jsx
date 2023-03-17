import './DashboardLayout.scss';

const DashboardLayout = ({ children }) =>
{
    return (
        <div className="DashboardLayout">
            <div className="DashboardLayout__sidebar">
                ...menu
            </div>
            <div className="DashboardLayout__content">
                { children }
                <footer>footer</footer>
            </div>
        </div>
    );
};
  
export default DashboardLayout;
