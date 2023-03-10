import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";

const Dashboard = () =>
{
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    useEffect(() =>
    {
        console.log(user);
    }, [user])
    const handleLogout = async () =>
    {
        try{
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div>
                Hello, { user?.email }
                <br />
            </div>
            <div>
                <button onClick={handleLogout}>
                    Log out
                </button>
            </div>
        </>
  );
};

export default Dashboard;