import React, { useEffect, useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, CircularProgress, Typography, Alert } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

const GoogleCallback = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    useEffect(() => {
        const handleGoogleCallback = async () => {
            try {
                // Get the full URL params
                const params = new URLSearchParams(location.search);
                const accessToken = params.get('access_token');

                if (accessToken) {
                    // Fetch user data from Strapi
                    const response = await fetch(
                        'https://developer-market-backend.onrender.com/api/auth/google/callback' + location.search
                    );

                    if (!response.ok) {
                        throw new Error('Authentication failed');
                    }

                    const data = await response.json();

                    // Store token and user data
                    if (data.jwt) {
                        localStorage.setItem('token', data.jwt);
                        localStorage.setItem('user', JSON.stringify(data.user));
                        setUser(data.user);

                        // Redirect to home page
                        navigate('/');
                    } else {
                        throw new Error('No token received');
                    }
                } else {
                    throw new Error('No access token found');
                }
            } catch (err) {
                console.error('Google OAuth error:', err);
                setError(err.message || 'Authentication failed. Please try again.');
                
                // Redirect to login after 3 seconds
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            }
        };

        handleGoogleCallback();
    }, [location, navigate, setUser]);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3,
                p: 3,
            }}
        >
            {error ? (
                <>
                    <Alert severity="error" sx={{ maxWidth: 500 }}>
                        {error}
                    </Alert>
                    <Typography variant="body2" color="text.secondary">
                        Redirecting to login page...
                    </Typography>
                </>
            ) : (
                <>
                    <CircularProgress size={60} />
                    <Typography variant="h6" color="text.secondary">
                        Completing Google Sign-In...
                    </Typography>
                </>
            )}
        </Box>
    );
};

export default GoogleCallback;

