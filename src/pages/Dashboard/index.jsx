import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useUserAuth } from "../../context/";

const Dashboard = () =>
{
    const { user } = useUserAuth();
    const { username } = useParams();

    useEffect(() =>
    {
        console.log(user);
    }, [user]);

    return (
        <>
            <div>
                {
                    username === user?.reloadUserInfo?.screenName ?
                    (<p>private user settings</p>)
                    :
                    (<p>public user profile</p>)
                }
                </div>

                {/* Hello, { user?.email } - { user?.reloadUserInfo?.screenName} */}
            <div>
                content...
            </div>
        </>
    );
};

export default Dashboard;