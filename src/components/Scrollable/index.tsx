import './Scrollable.scss';

const Scrollable = (props : any) =>
{
    return (
        <div className={`Scrollable ${ props.inactive ? '' : 'active'}`}>
            <div className="Scrollable__container">
                <div className="Scrollable__container__content content">
                    { props.children }
                </div>
            </div>
        </div>
    );
};
  
export default Scrollable;
