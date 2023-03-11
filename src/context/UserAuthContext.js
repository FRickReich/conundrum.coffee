import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) =>
{
    const [ user, setUser ] = useState({});

    const logIn = (email, password) =>
    {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signUp = (email, password) =>
    {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>
    {
        return signOut(auth);
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    function githubSignIn()
    {
        const githubAuthProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubAuthProvider);
    }

    useEffect(() => 
    {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
        {
            console.log('Auth', currentUser);
            setUser(currentUser);
        });

        return () =>{
            unsubscribe();
        }
    }, []);

    return (
        <userAuthContext.Provider
            value={{ user, logIn, logOut, signUp, googleSignIn, githubSignIn }}
            children={children}
        />
    )
}

export const useUserAuth = () =>
{
    return useContext(userAuthContext);
}
