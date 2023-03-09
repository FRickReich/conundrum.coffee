import './ViewPanelButton.scss';

const ViewPanelButton = (props) =>
{
    return (
        <button className="ViewPanelButton" onClick={ props.onClick }>
            { props.label || "Default" }
        </button>
    );
};
  
export default ViewPanelButton;
