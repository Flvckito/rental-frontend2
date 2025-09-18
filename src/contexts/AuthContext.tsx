import React, { createContext, useContext, useEffect, useState} from "react";
import { parseJwt } from "@/utils/jwt";
import * as authService from "@/services/auth";

type User = {
    id: string;
    name: string;
    email: string;
    role: 'tanent' | 'landlord'} | null
type AuthContextType = {
    user: User;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (name: string, email: string, password: string, role: 'tenant' | 'landlord') => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));   
    const [user, setUser] = useState<User>(() => {
        const u = localStorage.getItem('user');
        return u ? JSON.parse(u) : null;
    });

    useEffect(() => {
        // validate token expiry on app load
        if (token) {
            const payload = parseJwt(token);
            if (payload || payload.exp * 1000 < Date.now()) {
                logout();
            }
        }
    }, []);

    async function login(email: string, password: string) {
        const data = await authService.login(email, password);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setToken(data.token);
        setUser(data.user);
    }

    async function register(payload: any) {
        const data = await authService.register(payload);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setToken(data.token);
        setUser(data.user);
    }

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error("useAuth must be used within an AuthProvider");
    return ctx;
    }
}