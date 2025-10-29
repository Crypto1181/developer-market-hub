import React, { createContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check authentication on mount
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = () => {
        const authenticated = authAPI.isAuthenticated();
        const currentUser = authAPI.getCurrentUser();
        setIsAuthenticated(authenticated);
        setUser(currentUser);
        setLoading(false);
    };

    const login = async (email, password) => {
        const response = await authAPI.login(email, password);
        setIsAuthenticated(true);
        setUser(response.user);
        return response;
    };

    const register = async (email, password, username) => {
        const response = await authAPI.register(email, password, username);
        setIsAuthenticated(true);
        setUser(response.user);
        return response;
    };

    const logout = () => {
        authAPI.logout();
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider 
            value={{ 
                isAuthenticated, 
                user, 
                loading,
                login, 
                register, 
                logout,
                checkAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

