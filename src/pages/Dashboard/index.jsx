import { useEffect } from "react";
import { useUserAuth } from "../../context/UserAuthContext";

const Dashboard = () =>
{
    const { user } = useUserAuth();

    useEffect(() =>
    {
        console.log(user);
    }, [user]);

    return (
        <>
            <div>
                Hello, { user?.email } - { user?.reloadUserInfo?.screenName}
                <br />
            </div>
            <div>
                content...
            </div>
        </>
    );
};

export default Dashboard;