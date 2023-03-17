import { createContext, useContext } from "react";
import { db } from "../firebase";
import {
    query, 
    collection, 
    onSnapshot, 
    doc, 
    addDoc, 
    getDocs,
    where, 
    deleteDoc, 
    updateDoc, 
    serverTimestamp
} from "firebase/firestore";

export const databaseContext = createContext();

export const DatabaseProvider = ({ children }) =>
{
    return (
        <databaseContext.Provider
            value={{ 
                db,
                query, 
                getDocs,
                collection, 
                onSnapshot,
                where, 
                doc, 
                addDoc, 
                deleteDoc, 
                updateDoc, 
                serverTimestamp
            }}
            children={children}
        />
    )
}

export const useDatabase = () =>
{
    return useContext(databaseContext);
}
