import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Container,
    Paper,
    TextField,
    Button,
    Typography,
    Alert,
    CircularProgress,
    Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Email, ArrowBack, CheckCircle } from '@mui/icons-material';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Simulate API call for password reset
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // In a real app, you would call your password reset API here
            // await authAPI.forgotPassword(email);
            
            setSuccess(true);
        } catch (err) {
            setError('Failed to send reset email. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url(/auth-background.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                p: { xs: 2, md: 4 },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 1,
                },
            }}
        >
            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 3, md: 5 },
                            borderRadius: 3,
                            background: '#fff',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                        }}
                    >
                        {/* Back to Login Link */}
                        <Link
                            component={RouterLink}
                            to="/login"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                mb: 3,
                                color: '#667eea',
                                textDecoration: 'none',
                                fontWeight: 600,
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            <ArrowBack sx={{ mr: 0.5, fontSize: 20 }} />
                            Back to Login
                        </Link>

                        {!success ? (
                            <>
                                {/* Header */}
                                <Box sx={{ mb: 4, textAlign: 'center' }}>
                                    <Box
                                        sx={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mx: 'auto',
                                            mb: 2,
                                        }}
                                    >
                                        <Email sx={{ color: '#fff', fontSize: 35 }} />
                                    </Box>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 900,
                                            mb: 1,
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        Forgot Password?
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        No worries! Enter your email and we'll send you reset instructions.
                                    </Typography>
                                </Box>

                                {/* Error Message */}
                                {error && (
                                    <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                                        {error}
                                    </Alert>
                                )}

                                {/* Form */}
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        fullWidth
                                        required
                                        type="email"
                                        label="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your-email@example.com"
                                        sx={{
                                            mb: 3,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                                '&:hover fieldset': {
                                                    borderColor: '#667eea',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#667eea',
                                                },
                                            },
                                        }}
                                    />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        size="large"
                                        disabled={loading}
                                        sx={{
                                            py: 1.5,
                                            borderRadius: 2,
                                            textTransform: 'none',
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, #5568d3 0%, #6a3f8e 100%)',
                                                boxShadow: '0 8px 20px rgba(102, 126, 234, 0.5)',
                                            },
                                            '&:disabled': {
                                                background: '#ccc',
                                            },
                                        }}
                                    >
                                        {loading ? (
                                            <CircularProgress size={24} color="inherit" />
                                        ) : (
                                            'Send Reset Link'
                                        )}
                                    </Button>
                                </form>
                            </>
                        ) : (
                            /* Success State */
                            <Box sx={{ textAlign: 'center', py: 4 }}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, type: 'spring' }}
                                >
                                    <Box
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mx: 'auto',
                                            mb: 3,
                                        }}
                                    >
                                        <CheckCircle sx={{ color: '#fff', fontSize: 60 }} />
                                    </Box>
                                </motion.div>

                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                    Check Your Email!
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                    We've sent password reset instructions to:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: 600,
                                        color: '#667eea',
                                        mb: 4,
                                    }}
                                >
                                    {email}
                                </Typography>

                                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                    Didn't receive the email? Check your spam folder or
                                </Typography>

                                <Button
                                    variant="outlined"
                                    onClick={() => setSuccess(false)}
                                    sx={{
                                        textTransform: 'none',
                                        borderColor: '#667eea',
                                        color: '#667eea',
                                        '&:hover': {
                                            borderColor: '#5568d3',
                                            bgcolor: 'rgba(102, 126, 234, 0.08)',
                                        },
                                    }}
                                >
                                    Try Again
                                </Button>
                            </Box>
                        )}
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
};

export default ForgotPassword;

