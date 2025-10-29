import React from 'react';
import { Navigate } from 'react-router-dom';
import { authAPI } from '../services/api';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = authAPI.isAuthenticated();

    if (!isAuthenticated) {
        // Redirect to signup page if not authenticated
        return <Navigate to="/signup" replace />;
    }

    return children;
};

export default ProtectedRoute;

