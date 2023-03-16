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
import {
    query,
    getDocs,
    collection,
    where,
    addDoc
} from "firebase/firestore";
import { auth, db } from "../firebase";

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

    const githubSignIn = async () =>
    {
        try
        {
            const githubAuthProvider = new GithubAuthProvider();
            const res = await signInWithPopup(auth, githubAuthProvider);

            const user = res.user;
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
        
            if (docs.docs.length === 0) {
                await addDoc(collection(db, "users"), {
                    uid: user.uid,
                    authProvider: "github",
                    name: user.displayName,
                    username: user.reloadUserInfo.screenName,
                    email: user.email
                });
            }
        }
        catch(err)
        {
            console.error(err);
        }
    }

    useEffect(() => 
    {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
        {
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
