import { useEffect } from 'react';
import { useUserAuth } from './../../context/';
import { useNavigate } from 'react-router';

const Home = () =>
{
    const { user } = useUserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(user?.uid) navigate(`/${user.reloadUserInfo.screenName}`);
    }, [user, navigate]);

    return (
        <div>
            <h1>Home</h1>

            <p>This is conundrum.coffee...</p>
        </div>
    );
};

export default Home;
