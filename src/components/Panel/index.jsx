import './Panel.scss'

const Panel = ({
    children,
    className,
    primary,
    secondary,
    info,
    success, 
    warning, 
    error,
    outline,
    ...props
}) =>
{
    return (
        <div className={`Panel
            ${ className ? className : '' }
            ${ primary ? 'primary' : '' }
            ${ secondary ? 'secondary' : '' }
            ${ info ? 'info' : '' }
            ${ success ? 'success' : '' }
            ${ warning ? 'warning' : '' }
            ${ error ? 'error' : '' }
            ${ outline ? 'outline' : '' }`}
        >
            { children }
        </div>
    );
};
  
export default Panel;
