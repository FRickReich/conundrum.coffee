import { useEffect, useState } from "react";
import { customAlphabet } from 'nanoid'

import {
    query,
    getDocs,
    collection,
    where,
    addDoc
} from "firebase/firestore";

import { auth, db } from "../firebase";

export const useProject = () =>
{
    const [ projects, setProjects ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ hasProjects, setHasProjects ] = useState(false);
    const [ error, setError ] = useState(null);

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
    }

    const getProjectsByOwner = async (userId) =>
    {
        try
        {
            const q = query(collection(db, "projects"), where("ownerId", "==", userId));
            const projects = await getDocs(q);
            
            if (projects.docs.length === 0) {
                setHasProjects(false);
            }
            else {
                setIsLoading(false)
                setProjects(projects.docs);
                setHasProjects(true);
            }
        }
        catch(err)
        {
            setError(err.message);
            console.error(err);
        }
    }

    useEffect(() =>
    {
        
    }, [])

    return {
        isLoading, 
        error, 
        projects,
        hasProjects,
        createProject, 
        getProjectsByOwner
    };
}