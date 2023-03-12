import { Link } from 'react-router-dom';

import './Button.scss';

const Button = ({
    children,
    isLink,
    onClick,
    to,
    primary,
    secondary,
    info,
    success, 
    warning, 
    error, 
    outline,
    className,
    icon,
    ...props
}) =>
{
    return(
        <>
        {
            isLink && to !== undefined ?
            (
                <Link
                    to={to}
                    className={`Button
                        ${ className ? className : '' }
                        ${ primary ? 'primary' : '' }
                        ${ secondary ? 'secondary' : '' }
                        ${ info ? 'info' : '' }
                        ${ success ? 'success' : '' }
                        ${ warning ? 'warning' : '' }
                        ${ error ? 'error' : '' }
                        ${ outline ? 'outline' : '' }
                    `}
                    {...props}
                >
                    { icon && <div className="Button__icon">{icon}</div> }
                    <>
                        { children }
                    </>
                </Link>
            )
            :
            (   
                <button
                    onClick={onClick}
                    className={`Button
                        ${ className ? className : '' }
                        ${ primary ? 'primary' : '' }
                        ${ secondary ? 'secondary' : '' }
                        ${ info ? 'info' : '' }
                        ${ success ? 'success' : '' }
                        ${ warning ? 'warning' : '' }
                        ${ error ? 'error' : '' }
                        ${ outline ? 'outline' : '' }
                    `}
                    {...props}
                >
                    { icon && <div className="Button__icon">{icon}</div> }
                    <>
                        { children }
                    </>
                </button>
            )
        }
        </>
    );
};
  
export default Button;
