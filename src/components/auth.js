import { useState, useContext, createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ childern }) => {
    const [user, setUser] = useState(null);

    const login = (user) => {
        setUser(user);
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {childern}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider;