import './ViewPanelButton.scss';

const ViewPanelButton = (props : any) =>
{
    return (
        <button className="ViewPanelButton" onClick={ props.onClick }>
            { props.label || "Default" }
        </button>
    );
};
  
export default ViewPanelButton;
