import { useEffect, useState } from 'react';
import './Avatar.scss';

const Avatar = ({ displayName, ...props }) =>
{
    const [ userInitials, setUserInitials ] = useState("ME");

    useEffect(() =>
    {
        if(displayName)
        {
            setUserInitials(createInitials(displayName))
        }
    }, [displayName]);

    const createInitials = (input) =>
    {
        let initials = input.split(' ') .map(i => i.charAt(0)) .toString() .toUpperCase().split(',')

        return initials;
    }

    return (

        <div className="Avatar" 
        { ...props }
        >
            {
                displayName &&
                <div className="Avatar__container">
                    <span className="Avatar__container__initials">{ userInitials }</span>    
                </div>
            }
        </div>
    );
};

export default Avatar;
