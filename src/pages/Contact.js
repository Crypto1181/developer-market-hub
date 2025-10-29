import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Grid,
    Alert,
    CircularProgress,
    Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
    Email,
    Person,
    Message,
    Send,
    CheckCircle,
} from '@mui/icons-material';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // EmailJS Configuration
            // Replace these with your actual EmailJS credentials from https://www.emailjs.com/
            const serviceId = 'YOUR_SERVICE_ID';      // Get from EmailJS dashboard
            const templateId = 'YOUR_TEMPLATE_ID';    // Get from EmailJS dashboard
            const publicKey = 'YOUR_PUBLIC_KEY';      // Get from EmailJS dashboard

            // Prepare template params for EmailJS
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'your-email@example.com',  // Your email address
            };

            // Send email using EmailJS
            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );
            
            // Show success message
            setSuccess(true);
            
            // Clear form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            // Hide success message after 5 seconds
            setTimeout(() => setSuccess(false), 5000);
            
        } catch (err) {
            setError('Failed to send message. Please try again or contact us directly at support@devmarket.com');
            console.error('EmailJS Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#fafafa', py: 8 }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 900,
                                mb: 2,
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                            }}
                        >
                            Get In Touch
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#666',
                                fontWeight: 400,
                                maxWidth: 600,
                                mx: 'auto',
                            }}
                        >
                            Have a question or want to work together? Drop us a message!
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {/* Contact Info */}
                        <Grid item xs={12} md={4}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Stack spacing={3}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            borderRadius: 3,
                                            border: '1px solid rgba(0, 0, 0, 0.08)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                boxShadow: '0 8px 24px rgba(102, 126, 234, 0.15)',
                                                transform: 'translateY(-4px)',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 2,
                                            }}
                                        >
                                            <Email sx={{ color: '#fff', fontSize: 28 }} />
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                            Email Us
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#666' }}>
                                            support@devmarket.com
                                        </Typography>
                                    </Paper>

                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            borderRadius: 3,
                                            border: '1px solid rgba(0, 0, 0, 0.08)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                boxShadow: '0 8px 24px rgba(102, 126, 234, 0.15)',
                                                transform: 'translateY(-4px)',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 2,
                                            }}
                                        >
                                            <Message sx={{ color: '#fff', fontSize: 28 }} />
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                            Response Time
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#666' }}>
                                            We typically respond within 24 hours
                                        </Typography>
                                    </Paper>

                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            borderRadius: 3,
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            color: '#fff',
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                            Need Help?
                                        </Typography>
                                        <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                                            Check out our FAQ section or browse our documentation for quick answers.
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                bgcolor: '#fff',
                                                color: '#667eea',
                                                '&:hover': {
                                                    bgcolor: 'rgba(255,255,255,0.9)',
                                                },
                                            }}
                                        >
                                            View FAQ
                                        </Button>
                                    </Paper>
                                </Stack>
                            </motion.div>
                        </Grid>

                        {/* Contact Form */}
                        <Grid item xs={12} md={8}>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: { xs: 3, md: 5 },
                                        borderRadius: 3,
                                        border: '1px solid rgba(0, 0, 0, 0.08)',
                                    }}
                                >
                                    {success && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            <Alert
                                                icon={<CheckCircle />}
                                                severity="success"
                                                sx={{ mb: 3, borderRadius: 2 }}
                                            >
                                                Message sent successfully! We'll get back to you soon.
                                            </Alert>
                                        </motion.div>
                                    )}

                                    {error && (
                                        <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                                            {error}
                                        </Alert>
                                    )}

                                    <form onSubmit={handleSubmit}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    label="Your Name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    InputProps={{
                                                        startAdornment: <Person sx={{ mr: 1, color: '#667eea' }} />,
                                                    }}
                                                    sx={{
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
                                            </Grid>

                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    type="email"
                                                    label="Your Email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    InputProps={{
                                                        startAdornment: <Email sx={{ mr: 1, color: '#667eea' }} />,
                                                    }}
                                                    sx={{
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
                                            </Grid>

                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    label="Subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    sx={{
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
                                            </Grid>

                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    multiline
                                                    rows={6}
                                                    label="Your Message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Tell us what you need..."
                                                    sx={{
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
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    size="large"
                                                    fullWidth
                                                    disabled={loading}
                                                    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                                                    sx={{
                                                        py: 1.5,
                                                        borderRadius: 2,
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
                                                        '&:disabled': {
                                                            background: '#ccc',
                                                        },
                                                        transition: 'all 0.3s ease',
                                                    }}
                                                >
                                                    {loading ? 'Sending...' : 'Send Message'}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Paper>
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Contact;

