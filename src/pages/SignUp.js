import React, { useState, useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
    Box,
    InputAdornment,
    IconButton,
    FormControlLabel,
    Checkbox,
    Stack,
    Link,
    Alert,
    CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { PersonAdd } from '@mui/icons-material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { AuthContext } from '../context/AuthContext';

const SignUp = () => {
    const navigate = useNavigate();
    const { register } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Validate password length
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setLoading(true);

        try {
            // Extract username from email (before @)
            const username = formData.email.split('@')[0];
            await register(formData.email, formData.password, username);
            // Redirect to home page after successful registration
            navigate('/');
        } catch (err) {
            console.error('Signup error details:', err);
            const errorMessage = err.response?.data?.error?.message 
                || err.response?.data?.message 
                || err.message 
                || 'Registration failed. Please check your connection and try again.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    };

    const formVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };

    const inputVariants = {
        hidden: { x: -10, opacity: 0 },
        visible: { x: 0, opacity: 1 },
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
            <Grid 
                container 
                component="main" 
                sx={{ 
                    maxWidth: 1400,
                    minHeight: { xs: 'auto', md: 750 },
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        background: 'transparent',
                        position: 'relative',
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 4,
                        overflow: 'hidden',
                    }}
                >
                <Box sx={{ color: 'white', maxWidth: 500, position: 'relative', zIndex: 1 }}>
                    <Typography 
                        variant="caption" 
                        sx={{ 
                            letterSpacing: 4,
                            fontWeight: 600,
                            mb: 6,
                            display: 'block',
                            opacity: 0.9,
                            fontSize: '0.75rem',
                        }}
                    >
                        GET YOUR PROJECT REQUIREMENT TODAY
                    </Typography>
                    <Typography 
                        variant="h1" 
                        sx={{ 
                            fontWeight: 700,
                            fontSize: { xs: '3rem', md: '5rem' },
                            lineHeight: 1, 
                            mb: 4,
                            fontFamily: 'Arial, sans-serif',
                            letterSpacing: '-0.02em',
                            textTransform: 'lowercase',
                        }}
                    >
                        Developer<br/>
                        market hub
                    </Typography>
                </Box>
            </Grid>

            <Grid
                item
                xs={12}
                md={6}
                component={Box}
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(10px)',
                    p: 4,
                }}
            >
                <Box
                    sx={{
                        my: 4,
                        mx: { xs: 3, sm: 4 },
                        width: { xs: '100%', sm: 'auto' },
                        maxWidth: 480,
                    }}
                >
                    <motion.div variants={containerVariants} initial="hidden" animate="visible">
                        <Typography 
                            component="h1" 
                            variant="h3" 
                            sx={{ 
                                fontWeight: 400,
                                mb: 1.5,
                                fontFamily: 'serif',
                                fontSize: '3rem',
                            }}
                        >
                                Create Account
                            </Typography>

                        <Typography 
                            variant="body2" 
                            color="text.secondary" 
                            sx={{ mb: 5, fontSize: '0.95rem', fontWeight: 400 }}
                        >
                            Start your journey as a creator — publish projects, sell templates, and reach developers.
                        </Typography>

                        <motion.form
                            variants={formVariants}
                            initial="hidden"
                            animate="visible"
                            onSubmit={handleSubmit}
                            style={{ width: '100%' }}
                        >
                            <Stack spacing={3}>
                                {error && (
                                    <Alert severity="error" sx={{ mb: 2 }}>
                                        {error}
                                    </Alert>
                                )}
                                <Box>
                                    <Typography 
                                        variant="body2" 
                                        sx={{ mb: 1, fontWeight: 500, color: 'text.primary' }}
                                    >
                                        Email
                                    </Typography>
                            <motion.div variants={inputVariants}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                            placeholder="Enter your email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    backgroundColor: '#fff',
                                                    '& fieldset': {
                                                        borderColor: '#ddd',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#999',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#000',
                                                        borderWidth: 2,
                                                    },
                                                    '& input': {
                                                        color: '#000',
                                                        fontSize: '0.95rem',
                                                    }
                                                }
                                            }}
                                />
                            </motion.div>
                                </Box>

                                <Box>
                                    <Typography 
                                        variant="body2" 
                                        sx={{ mb: 1, fontWeight: 500, color: 'text.primary' }}
                                    >
                                        Password
                                    </Typography>
                            <motion.div variants={inputVariants}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                            placeholder="Enter your password"
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    backgroundColor: '#fff',
                                                    '& fieldset': {
                                                        borderColor: '#ddd',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#999',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#000',
                                                        borderWidth: 2,
                                                    },
                                                    '& input': {
                                                        color: '#000',
                                                        fontSize: '0.95rem',
                                                    }
                                                }
                                            }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                        <IconButton 
                                                            onClick={() => setShowPassword((s) => !s)} 
                                                            edge="end"
                                                            sx={{ color: '#666' }}
                                                        >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </motion.div>
                                </Box>

                                <Box>
                                    <Typography 
                                        variant="body2" 
                                        sx={{ mb: 1, fontWeight: 500, color: 'text.primary' }}
                                    >
                                        Confirm Password
                                    </Typography>
                            <motion.div variants={inputVariants}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                            placeholder="Confirm your password"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    backgroundColor: '#fff',
                                                    '& fieldset': {
                                                        borderColor: '#ddd',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#999',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#000',
                                                        borderWidth: 2,
                                                    },
                                                    '& input': {
                                                        color: '#000',
                                                        fontSize: '0.95rem',
                                                    }
                                                }
                                            }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                        <IconButton 
                                                            onClick={() => setShowConfirmPassword((s) => !s)} 
                                                            edge="end"
                                                            sx={{ color: '#666' }}
                                                        >
                                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </motion.div>
                                </Box>

                                <motion.div 
                                    variants={inputVariants}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        disabled={loading}
                                        sx={{
                                            mt: 2,
                                            py: 1.6,
                                            borderRadius: 2,
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            background: '#000',
                                            color: 'white',
                                            boxShadow: 'none',
                                            '&:hover': {
                                                background: '#222',
                                                boxShadow: 'none',
                                            },
                                            transition: 'all 0.2s ease',
                                        }}
                                    >
                                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Account'}
                                </Button>
                            </motion.div>

                                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                                    <Button 
                                        variant="outlined" 
                                        fullWidth 
                                        startIcon={
                                            <svg width="18" height="18" viewBox="0 0 18 18">
                                                <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
                                                <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
                                                <path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z"/>
                                                <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
                                            </svg>
                                        } 
                                        sx={{ 
                                            py: 1.6,
                                            borderRadius: 2,
                                            fontWeight: 500,
                                            fontSize: '0.95rem',
                                            borderColor: 'rgba(0,0,0,0.12)',
                                            color: '#000',
                                            '&:hover': {
                                                borderColor: 'rgba(0,0,0,0.3)',
                                                backgroundColor: 'rgba(0,0,0,0.02)',
                                            }
                                        }}
                                    >
                                        Sign Up with Google
                            </Button>
                                </motion.div>

                                <Box sx={{ mt: 4, textAlign: 'center' }}>
                                    <Typography variant="body2" sx={{ color: '#666' }}>
                                        Already have an account?{' '}
                                        <Link
                                            component={RouterLink}
                                            to="/login"
                                            underline="hover"
                                            sx={{
                                                fontWeight: 600,
                                                color: '#000',
                                            }}
                                        >
                                            Sign In
                                        </Link>
                                    </Typography>
                            </Box>
                            </Stack>
                        </motion.form>
                    </motion.div>
                </Box>
            </Grid>
        </Grid>
        </Box>
    );
};

export default SignUp;