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