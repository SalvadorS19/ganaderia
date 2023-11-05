'use client'
import { redirect } from "next/navigation";
import { Context, createContext, useContext, useEffect, useState } from "react"
import { UsuarioModel } from "../models/usuario.model";
import { AppUsers } from "../dashboard/registro-trabajadores/trabajadores";

const AuthContext: Context<any> = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    
    const [ user, setUser ]: [UsuarioModel | null, Function] = useState(null);
    const [ protectedRoute, setProtectedRoute]: [boolean, Function] = useState(false);
    const [ loading, setLoading]: [boolean, Function] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = AppUsers.find((user: UsuarioModel) => user.username === token);
            setUser(user);
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, [])
    

    const login = (user: any) => {
        setUser(user);
        localStorage.setItem('token', user.username);
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    }

    if (!loading) {
        if (protectedRoute && !user) {
            redirect('/login');
        } else {
            return (
                <AuthContext.Provider value={{user, login, logout}}>
                    { children }
                </AuthContext.Provider>
            )
        }
    }
}

