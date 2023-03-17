import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
 // eslint-disable-next-line
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useUserAuth } from "../../context/";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardArea from "../../components/DashboardArea";
import { Button } from "../../components";
import { useProject } from "../../hooks";

const Dashboard = () =>
{
    const { user } = useUserAuth();
    const { username } = useParams();
    const { hasProjects, projects, isLoading, getProjectsByOwner } = useProject();

    useEffect(() =>
    {
        getProjectsByOwner(user.uid);
    }, [user, getProjectsByOwner]);

    return (
        <DashboardLayout>
            <DashboardArea
                title="Projects"
                interactions={[
                    <Button success isLink to={`/${username}/create-project`}>New project</Button>
                ]}
            >
            {
                hasProjects ?
                (
                    <>
                    {
                        isLoading === false &&
                        <ul>
                            {
                                projects.map((project, i) =>
                                {
                                    return <li key={i}><Link to={`/${username}/${project.data().uid}`}>{ project.data().title }</Link></li>
                                })
                            }
                        </ul>
                    }
                    </>
                )
                :
                (
                    <lottie-player
                        autoplay
                        loop
                        mode="normal"
                        src="https://assets10.lottiefiles.com/private_files/lf30_bn5winlb.json"
                        style={{paddingTop: "10rem", margin: "0 auto", width:"50%"}}
                    />
                )
            }
            
            </DashboardArea>
        </DashboardLayout>
    );
};

export default Dashboard;