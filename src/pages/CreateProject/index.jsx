import { useState } from "react";

import { useProject } from "../../hooks";

import { DashboardLayout } from "../../layouts";
import DashboardArea from "../../components/DashboardArea";
import { Button } from "../../components";

const CreateProject = () =>
{
    const [inputs, setInputs] = useState({});

    const { createProject } = useProject();

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
