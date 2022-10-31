import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const appContext = createContext(null);

export function MainContext({ children }) {
    // states
    const [LoggedIn, setLoggedIn] = useState(false);
    const [Username, setUsername] = useState("");
    const [Avatar, setAvatar] = useState("");

    // useEffect to get user data from the localstorage
    useEffect(() => {
        let user = localStorage.getItem("jovens_visionarios_username");
        let userAvatar = localStorage.getItem("jovens_visionarios_avatar");

        if (!user) {
            setLoggedIn(false);
        } else {
            setLoggedIn(true);
            setUsername(user)
            setAvatar(userAvatar)
        }
    }, []);

    // values to be shared across the context
    var contextValues = {
        LoggedIn,
        setLoggedIn,
        setUsername,
        Username,
    };

    return (
        <appContext.Provider value={contextValues}>
            {children}
        </appContext.Provider>
    );
}
