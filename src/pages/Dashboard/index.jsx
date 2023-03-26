import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
// eslint-disable-next-line
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useUserAuth } from "../../context/";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardArea from "../../components/DashboardArea";
import { Button } from "../../components";
import { useEmail } from "../../hooks";

import { db } from "../../firebase";
import { query, where, getDocs, collection, addDoc } from "firebase/firestore";

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const { send } = useEmail();

    const { user } = useUserAuth();
    const { username } = useParams();

    const getProjectsByOwner = async () => {
        const q = query(collection(db, "projects"), where("ownerId", "==", user.uid));

        const ownerProjects = await getDocs(q);

        setProjects(ownerProjects.docs);
        setIsLoading(false);

        console.log(ownerProjects.docs)
    }

    useEffect(() => {
        user.uid && getProjectsByOwner();
    }, [user])

    return (
        <DashboardLayout>
            <DashboardArea
                title="Projects"
                interactions={[
                    <Button success isLink to={`/${username}/create-project`}>New project</Button>
                ]}
            >
                {
                    isLoading === false ?
                        (
                            <>
                                {
                                    projects.length !== 0 ?
                                        (
                                            <ul>
                                                {
                                                    projects.map((project, i) => {
                                                        return <li key={i}><Link to={`/${username}/${project.data().uid}`}>{project.data().title}</Link></li>
                                                    })
                                                }
                                            </ul>
                                        )
                                        :
                                        (<lottie-player
                                            autoplay
                                            loop
                                            mode="normal"
                                            src="https://assets10.lottiefiles.com/private_files/lf30_bn5winlb.json"
                                            style={{ paddingTop: "10rem", margin: "0 auto", width: "50%" }}
                                        />)
                                }
                                <br />
                                {/* <button onClick={() => setName({val:'foo', callback: ()=>setName({val: 'then bar'})})}>Send Email!</button> */}
                                <button onClick={ () => send({
                                    to: "frickreich@gmail.com",
                                    subject: `${ username }, You created a new Project!`,
                                    body: "Hello World!"
                                }, (g) => console.log(g))}>SEND!</button>
                            </>
                        )
                        :
                        (<p>Loading....</p>)
                }
            </DashboardArea>
        </DashboardLayout>
    );
};

export default Dashboard;