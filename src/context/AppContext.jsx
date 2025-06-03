import { children, createContext, useContext, useState } from "react";
import App from "../App";
import { useNavigate } from "react-router-dom";

export const AppContext=createContext();

export const AppContextProvider =({children})=>{
    const Navigate =useNavigate();
    const [user, setUser]=useState(null)

        const [isSeller, setIsSeller]=useState(null)

    const value ={Navigate,user,setUser,setIsSeller,isSeller}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext =()=>{
    return useContext(AppContext)
}