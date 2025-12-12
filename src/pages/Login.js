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
import { Person } from '@mui/icons-material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(formData.email, formData.password);
            // Redirect to portfolio page after successful login
            navigate('/portfolio');
        } catch (err) {
            console.error('Login error details:', err);
            const errorMessage = err.response?.data?.error?.message 
                || err.response?.data?.message 
                || err.message 
                || 'Login failed. Please check your credentials and try again.';
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
                    minHeight: { xs: 'auto', md: 700 },
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
            {/* Left image/marketing panel */}
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
                        Developer Market Hub
                    </Typography>
                    <Typography 
                        variant="h1" 
                        sx={{ 
                            fontWeight: 300,
                            fontSize: { xs: '3rem', md: '5rem' },
                            lineHeight: 1.1, 
                            mb: 4,
                            fontFamily: 'serif',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Get<br/>
                        Everything<br/>
                        You Want
                        </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            opacity: 0.95,
                            fontWeight: 300,
                            lineHeight: 1.8,
                            fontSize: '1rem',
                            maxWidth: '450px',
                        }}
                    >
                        Buy your project requirement here
                        </Typography>
                </Box>
            </Grid>

            {/* Right form panel */}
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
                                Welcome Back
                            </Typography>

                        <Typography 
                            variant="body2" 
                            color="text.secondary" 
                            sx={{ mb: 5, fontSize: '0.95rem', fontWeight: 400 }}
                        >
                            Enter your email and password to access your account
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
                                    autoComplete="current-password"
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

                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <FormControlLabel 
                                        control={<Checkbox size="small" />} 
                                        label="Remember me"
                                        sx={{ 
                                            '& .MuiFormControlLabel-label': { 
                                                fontSize: '0.875rem',
                                                color: 'text.secondary',
                                            } 
                                        }}
                                    />
                                    <Link 
                                        component={RouterLink} 
                                        to="/forgot-password" 
                                        underline="none" 
                                        sx={{ 
                                            fontSize: '0.875rem',
                                            fontWeight: 500,
                                            color: '#6366f1',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                color: '#4f46e5',
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        Forgot Password?
                                    </Link>
                            </Stack>

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
                                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
                                </Button>
                            </motion.div>

                                <Box sx={{ mt: 4, textAlign: 'center' }}>
                                    <Typography variant="body2" sx={{ color: '#666' }}>
                                        Don't have an account?{' '}
                                        <Link
                                            component={RouterLink}
                                            to="/signup"
                                            underline="hover"
                                            sx={{
                                                fontWeight: 600,
                                                color: '#000',
                                            }}
                                        >
                                            Sign Up
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

export default Login;