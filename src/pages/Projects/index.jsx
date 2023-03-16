import { useState, useEffect } from 'react';

import { useDatabase, useUserAuth } from './../../context/';

const Projects = () =>
{
    const { user } = useUserAuth();
    const { query, collection, db, where, getDocs } = useDatabase();

    const [ userInfo, setUserInfo ] = useState({});

    const fetchUserInfo = async () =>
    {
        try
        {
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            console.log(user);

            setUserInfo(data);
        }
        catch (err)
        {
            console.error(err);
        }
    };

    useEffect(() => {
        if(user.uid) fetchUserInfo();
      }, [user]);

    return (
        <div>
            <h1>Projects</h1>
            { userInfo.email } 
        </div>
    );
};
  
export default Projects;
