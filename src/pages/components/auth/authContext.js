import React, { createContext, useEffect, useState } from "react";

const defaultContextValue = {
    isAuthenticated: false,
    LoginUsername: "",
    UserLogin: () => { },
    UserLogout: () => { },
}

const AuthContext = createContext(defaultContextValue)

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        defaultContextValue.isAuthenticated,
    );
    const [LoginUsername, setLoginUsername] = useState(
        defaultContextValue.LoginUsername,
    );
    useEffect(() => {
        // 防止JSON錯誤，如果錯誤就什麼也不做
        try {
            const authState = JSON.parse(localStorage.getItem('shopee:auth.state'))
            if (authState && authState.token) {
                setIsAuthenticated(true);
            }
        } catch { }
    }, [])
    const UserLogin = async (Username, password) => {
        const token = "good_token"
        if (Username === "allaboutlove" && password === "5201314") {

            localStorage.setItem('shopee:auth.state', JSON.stringify({ token }))
            setIsAuthenticated(true)
            setLoginUsername(Username)
            return { token };

        }
        setIsAuthenticated(false)
        return { token: null, error: "invalid password" };
    }
    const UserLogout = async () => {
        localStorage.removeItem('shopee:auth.state')
        setIsAuthenticated(false)
    }
    return <AuthContext.Provider
        value={{
            isAuthenticated,
            setIsAuthenticated,
            LoginUsername,
            setLoginUsername,
            UserLogin,
            UserLogout,
        }}
    >
        {children}
    </AuthContext.Provider>;
}
export default AuthContext;