import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Paper,
    Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
    Code,
    Web,
    PhoneAndroid,
    Cloud,
    Storage,
    Security,
    ArrowForward,
    CheckCircle,
} from '@mui/icons-material';

const Portfolio = () => {
    const navigate = useNavigate();

    const skills = [
        { name: 'Frontend Development', icon: <Web />, color: '#6366f1' },
        { name: 'Backend Development', icon: <Code />, color: '#ec4899' },
        { name: 'Mobile Development', icon: <PhoneAndroid />, color: '#10b981' },
        { name: 'Cloud Services', icon: <Cloud />, color: '#3b82f6' },
        { name: 'Database Design', icon: <Storage />, color: '#f59e0b' },
        { name: 'Security', icon: <Security />, color: '#ef4444' },
    ];

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        },
        {
            title: 'SaaS Dashboard',
            description: 'Modern admin dashboard with real-time analytics, user management, and customizable widgets.',
            tech: ['Vue.js', 'Python', 'PostgreSQL', 'Redis'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        },
        {
            title: 'Mobile Banking App',
            description: 'Secure mobile banking application with biometric authentication and transaction management.',
            tech: ['React Native', 'Firebase', 'Node.js'],
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
        },
    ];

    const achievements = [
        '10+ Years of Experience',
        '50+ Projects Completed',
        '100+ Happy Clients',
        'Expert in Modern Technologies',
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#fafafa',
                pt: { xs: 4, md: 6 },
                pb: 8,
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Hero Section */}
                    <motion.div variants={itemVariants}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 4, md: 6 },
                                mb: 6,
                                borderRadius: 4,
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                position: 'relative',
                                overflow: 'hidden',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: -50,
                                    right: -50,
                                    width: 200,
                                    height: 200,
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -30,
                                    left: -30,
                                    width: 150,
                                    height: 150,
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                },
                            }}
                        >
                            <Grid container spacing={4} alignItems="center">
                                <Grid item xs={12} md={8}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontWeight: 800,
                                                mb: 2,
                                                fontSize: { xs: '2rem', md: '3rem' },
                                                position: 'relative',
                                                zIndex: 1,
                                            }}
                                        >
                                            Welcome to My Portfolio
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                mb: 3,
                                                opacity: 0.95,
                                                fontWeight: 400,
                                                fontSize: { xs: '1rem', md: '1.25rem' },
                                                position: 'relative',
                                                zIndex: 1,
                                            }}
                                        >
                                            I'm a Full-Stack Developer specializing in creating
                                            innovative digital solutions and premium products for developers.
                                        </Typography>
                                        <Stack direction="row" spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                endIcon={<ArrowForward />}
                                                onClick={() => navigate('/')}
                                                sx={{
                                                    bgcolor: 'white',
                                                    color: '#667eea',
                                                    fontWeight: 600,
                                                    px: 4,
                                                    py: 1.5,
                                                    borderRadius: 3,
                                                    textTransform: 'none',
                                                    fontSize: '1rem',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                                                    },
                                                    transition: 'all 0.3s ease',
                                                }}
                                            >
                                                Explore Products
                                            </Button>
                                        </Stack>
                                    </motion.div>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                position: 'relative',
                                                zIndex: 1,
                                            }}
                                        >
                                            <Avatar
                                                sx={{
                                                    width: { xs: 150, md: 200 },
                                                    height: { xs: 150, md: 200 },
                                                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                                                    border: '4px solid white',
                                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                                                }}
                                            >
                                                <Code sx={{ fontSize: { xs: 80, md: 100 }, color: 'white' }} />
                                            </Avatar>
                                        </Box>
                                    </motion.div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </motion.div>

                    {/* Achievements Section */}
                    <motion.div variants={itemVariants}>
                        <Grid container spacing={2} sx={{ mb: 6 }}>
                            {achievements.map((achievement, index) => (
                                <Grid item xs={6} md={3} key={index}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            textAlign: 'center',
                                            borderRadius: 3,
                                            bgcolor: 'white',
                                            border: '1px solid rgba(0, 0, 0, 0.05)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                                            },
                                        }}
                                    >
                                        <CheckCircle
                                            sx={{
                                                fontSize: 40,
                                                color: '#667eea',
                                                mb: 1,
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 600,
                                                color: '#111827',
                                            }}
                                        >
                                            {achievement}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    color: '#111827',
                                    textAlign: 'center',
                                }}
                            >
                                Core Skills & Expertise
                            </Typography>
                        </Box>
                        <Grid container spacing={3} sx={{ mb: 6 }}>
                            {skills.map((skill, index) => (
                                <Grid item xs={6} md={4} key={index}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Card
                                            elevation={0}
                                            sx={{
                                                p: 3,
                                                textAlign: 'center',
                                                borderRadius: 3,
                                                bgcolor: 'white',
                                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                                                    borderColor: skill.color,
                                                },
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'inline-flex',
                                                    p: 2,
                                                    borderRadius: '50%',
                                                    bgcolor: `${skill.color}15`,
                                                    color: skill.color,
                                                    mb: 2,
                                                }}
                                            >
                                                {skill.icon}
                                            </Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: '#111827',
                                                }}
                                            >
                                                {skill.name}
                                            </Typography>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>

                    {/* Featured Projects Section */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 1,
                                    color: '#111827',
                                    textAlign: 'center',
                                }}
                            >
                                Featured Projects
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#666',
                                    textAlign: 'center',
                                    mb: 4,
                                }}
                            >
                                A showcase of my recent work and innovative solutions
                            </Typography>
                        </Box>
                        <Grid container spacing={4} sx={{ mb: 6 }}>
                            {projects.map((project, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <Card
                                            elevation={0}
                                            sx={{
                                                height: '100%',
                                                borderRadius: 3,
                                                overflow: 'hidden',
                                                bgcolor: 'white',
                                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    transform: 'translateY(-8px)',
                                                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                                                },
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image={project.image}
                                                alt={project.title}
                                                sx={{
                                                    objectFit: 'cover',
                                                }}
                                            />
                                            <CardContent sx={{ p: 3 }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 700,
                                                        mb: 1,
                                                        color: '#111827',
                                                    }}
                                                >
                                                    {project.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: '#666',
                                                        mb: 2,
                                                        minHeight: 60,
                                                    }}
                                                >
                                                    {project.description}
                                                </Typography>
                                                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                                    {project.tech.map((tech, techIndex) => (
                                                        <Chip
                                                            key={techIndex}
                                                            label={tech}
                                                            size="small"
                                                            sx={{
                                                                bgcolor: '#f3f4f6',
                                                                color: '#111827',
                                                                fontWeight: 500,
                                                                fontSize: '0.75rem',
                                                            }}
                                                        />
                                                    ))}
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div variants={itemVariants}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 4, md: 6 },
                                borderRadius: 4,
                                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                                color: 'white',
                                textAlign: 'center',
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    fontSize: { xs: '1.75rem', md: '2.5rem' },
                                }}
                            >
                                Ready to Explore Premium Products?
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 4,
                                    opacity: 0.95,
                                    fontSize: { xs: '1rem', md: '1.125rem' },
                                    maxWidth: 600,
                                    mx: 'auto',
                                }}
                            >
                                Discover APIs, templates, tools, and more to power your next project.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForward />}
                                onClick={() => navigate('/')}
                                sx={{
                                    bgcolor: 'white',
                                    color: '#6366f1',
                                    fontWeight: 600,
                                    px: 5,
                                    py: 1.5,
                                    borderRadius: 3,
                                    textTransform: 'none',
                                    fontSize: '1.1rem',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                Browse All Products
                            </Button>
                        </Paper>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Portfolio;

