import './DashboardArea.scss';

const DashboardArea = ({ children, title, interactions, footer, ...props }) =>
{
    return (
        <div className='DashboardArea'>
            <div className="DashboardArea__header">
                <div className="DashboardArea__header__items">
                    <h2 className="DashboardArea__header__items__title">
                        { title }
                    </h2>
                    <div className="DashboardArea__header__items__iteractions">
                    {
                        interactions && 
                        <>
                        {
                            interactions.map((interaction, i) => {
                                return interaction
                            })
                        }
                        </>
                    }
                    </div>
                </div>
            </div>
            <div className="DashboardArea__content">
                <div className="DashboardArea__content__main">
                    { children }
                </div>
                {
                    footer && <div className="DashboardArea__content__footer">{ footer }</div>
                }
            </div>
            
            
        </div>
    );
};
  
export default DashboardArea;
