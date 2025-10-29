import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Button,
    Paper,
    Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
    Rocket, 
    ArrowBack,
    Timer,
} from '@mui/icons-material';

const ComingSoon = ({ title = "Coming Soon", subtitle = "This page is under construction" }) => {
    const navigate = useNavigate();

    return (
        <Box 
            sx={{ 
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Animated background elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.1,
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />
            
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 4, md: 8 },
                            borderRadius: 4,
                            textAlign: 'center',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        {/* Animated Icon */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.2,
                                type: "spring",
                                stiffness: 200,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    p: 3,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    mb: 3,
                                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
                                }}
                            >
                                <Rocket sx={{ fontSize: 60, color: '#fff' }} />
                            </Box>
                        </motion.div>

                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 900,
                                    mb: 2,
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {title}
                            </Typography>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#666',
                                    fontWeight: 400,
                                    mb: 4,
                                    fontSize: { xs: '1.1rem', md: '1.5rem' },
                                }}
                            >
                                {subtitle}
                            </Typography>
                        </motion.div>

                        {/* Timer Icon with text */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Stack 
                                direction="row" 
                                spacing={1} 
                                alignItems="center" 
                                justifyContent="center"
                                sx={{ mb: 4 }}
                            >
                                <Timer sx={{ color: '#667eea', fontSize: 24 }} />
                                <Typography variant="body1" sx={{ color: '#666', fontWeight: 500 }}>
                                    We're working hard to bring you something amazing!
                                </Typography>
                            </Stack>
                        </motion.div>

                        {/* Loading Animation */}
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: '100%' }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            <Box
                                sx={{
                                    height: 4,
                                    borderRadius: 2,
                                    bgcolor: 'rgba(102, 126, 234, 0.1)',
                                    mb: 4,
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}
                            >
                                <motion.div
                                    animate={{
                                        x: ['-100%', '100%'],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                    style={{
                                        position: 'absolute',
                                        width: '50%',
                                        height: '100%',
                                        background: 'linear-gradient(90deg, transparent, #667eea, transparent)',
                                    }}
                                />
                            </Box>
                        </motion.div>

                        {/* Back Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<ArrowBack />}
                                onClick={() => navigate('/')}
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 3,
                                    textTransform: 'none',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #5568d3 0%, #6a3f8e 100%)',
                                        boxShadow: '0 12px 28px rgba(102, 126, 234, 0.5)',
                                        transform: 'translateY(-2px)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                Back to Home
                            </Button>
                        </motion.div>

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#999',
                                    mt: 4,
                                    fontSize: '0.9rem',
                                }}
                            >
                                Stay tuned for updates • Follow us for announcements
                            </Typography>
                        </motion.div>
                    </Paper>
                </motion.div>
            </Container>

            {/* Floating particles animation */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                    }}
                    style={{
                        position: 'absolute',
                        left: `${20 + i * 15}%`,
                        bottom: `${10 + i * 10}%`,
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.6)',
                    }}
                />
            ))}
        </Box>
    );
};

export default ComingSoon;

