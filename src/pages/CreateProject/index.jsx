import { useState } from "react";
import { customAlphabet } from 'nanoid';
import { useNavigate, useParams } from "react-router";

import {
    collection,
    addDoc
} from "firebase/firestore";

import { auth, db } from "../../firebase";

import { DashboardLayout } from "../../layouts";
import DashboardArea from "../../components/DashboardArea";
import { Button } from "../../components";

const CreateProject = () =>
{
    const [inputs, setInputs] = useState({});

    const { username } = useParams();

    const navigate = useNavigate();

    const createProject = async (data) =>
    {
        const { projectTitle } = data;

        const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 10);
        let projectId = await nanoid();

        console.log(data);

        await addDoc(collection(db, "projects"),
        {
            uid: projectId,
            ownerId: auth.currentUser.uid,
            title: projectTitle
        });

        await navigate(`/${username}/${projectId}`);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return (
        <DashboardLayout>
            <DashboardArea
                title="Create a new Project"
                footer={<><Button success onClick={ () => createProject(inputs) }>ok</Button></>}
            >
                <form>
                    <label>Project title
                    <input 
                        type="text" 
                        name="projectTitle" 
                        value={inputs.projectTitle || ""} 
                        onChange={handleChange}
                    />
                    </label>
                </form>
            </DashboardArea>
        </DashboardLayout>
    );
};
  
export default CreateProject;
