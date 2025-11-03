import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Badge,
    Box,
    Menu,
    MenuItem,
    Container,
    Avatar,
    Divider,
    useTheme,
    useMediaQuery,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@mui/material';
import {
    ShoppingCart,
    Search,
    Person,
    Menu as MenuIcon,
    Home,
    Logout,
    Dashboard,
    Info,
    Code,
    Work,
    ContactMail,
} from '@mui/icons-material';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const { items } = useContext(CartContext);
    const { isAuthenticated, user, logout } = useContext(AuthContext);
    const cartCount = items.length;

    const handleUserMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleUserMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
        handleUserMenuClose();
        navigate('/login');
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Mobile drawer
    const drawer = (
        <Box sx={{ width: 280, pt: 2, bgcolor: '#ffffff' }}>
            <Box sx={{ px: 3, pb: 2 }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    DevMarket
                </Typography>
            </Box>
            <Divider />
            <List>
                {/* Navigation Links */}
                <ListItem button onClick={() => { navigate('/'); handleDrawerToggle(); }}>
                    <ListItemIcon><Home sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Home" primaryTypographyProps={{ color: '#000' }} />
                </ListItem>
                <ListItem button onClick={() => { navigate('/source-code'); handleDrawerToggle(); }}>
                    <ListItemIcon><Code sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Source Code" primaryTypographyProps={{ color: '#000' }} />
                </ListItem>
                <ListItem button onClick={() => { navigate('/portfolio'); handleDrawerToggle(); }}>
                    <ListItemIcon><Work sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Portfolio" primaryTypographyProps={{ color: '#000' }} />
                </ListItem>
                <ListItem button onClick={() => { navigate('/contact'); handleDrawerToggle(); }}>
                    <ListItemIcon><ContactMail sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Contact Us" primaryTypographyProps={{ color: '#000' }} />
                </ListItem>
                <Divider sx={{ my: 1 }} />
                
                {isAuthenticated ? (
                    <>
                        <ListItem>
                            <ListItemIcon>
                                <Avatar sx={{ 
                                    width: 32, 
                                    height: 32, 
                                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                                    fontWeight: 600,
                                }}>
                                    {user?.username?.charAt(0)?.toUpperCase() || 
                                     user?.email?.charAt(0)?.toUpperCase()}
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText 
                                primary={user?.username || user?.email?.split('@')[0]}
                                secondary={user?.email}
                                primaryTypographyProps={{ fontWeight: 600, color: '#000' }}
                                secondaryTypographyProps={{ color: '#666' }}
                            />
                        </ListItem>
                        <Divider sx={{ my: 1 }} />
                        <ListItem button onClick={() => { navigate('/cart'); handleDrawerToggle(); }}>
                            <ListItemIcon>
                                <Badge badgeContent={cartCount} color="error">
                                    <ShoppingCart sx={{ color: '#000' }} />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary="Cart" primaryTypographyProps={{ color: '#000' }} />
                        </ListItem>
                        <Divider sx={{ my: 1 }} />
                        <ListItem button onClick={() => { handleLogout(); handleDrawerToggle(); }}>
                            <ListItemIcon><Logout sx={{ color: '#000' }} /></ListItemIcon>
                            <ListItemText primary="Logout" primaryTypographyProps={{ color: '#000' }} />
                        </ListItem>
                    </>
                ) : (
                    <>
                        <ListItem button onClick={() => { navigate('/login'); handleDrawerToggle(); }}>
                            <ListItemIcon><Person sx={{ color: '#000' }} /></ListItemIcon>
                            <ListItemText primary="Login" primaryTypographyProps={{ color: '#000' }} />
                        </ListItem>
                        <ListItem button onClick={() => { navigate('/signup'); handleDrawerToggle(); }}>
                            <ListItemIcon><Dashboard sx={{ color: '#000' }} /></ListItemIcon>
                            <ListItemText primary="Sign Up" primaryTypographyProps={{ color: '#000' }} />
                </ListItem>
                    </>
                )}
        </List>
        </Box>
    );

    return (
        <>
            {/* Top accent bar */}
            <Box sx={{ 
                height: 4, 
                background: 'linear-gradient(90deg, #6366f1 0%, #ec4899 100%)',
            }} />

            <AppBar 
                position="sticky" 
                elevation={0}
                sx={{
                    bgcolor: '#fff',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                        {/* Left: Logo */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {isMobile && (
                                <IconButton
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 1, color: '#000' }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            )}
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: '1.25rem', md: '1.625rem' },
                            textDecoration: 'none',
                                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                                    letterSpacing: '-0.5px',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                    }
                                }}
                            >
                                DevMarket
                            </Typography>
                        </Box>

                        {/* Center: Navigation Links (Desktop) */}
                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Button
                                    component={Link}
                                    to="/"
                                    sx={{
                                        color: '#111827',
                                        textTransform: 'none',
                                        fontSize: '0.9375rem',
                                        fontWeight: 500,
                                        px: 2,
                                        borderRadius: 2,
                                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            bgcolor: 'rgba(99, 102, 241, 0.08)',
                                            transform: 'translateY(-1px)',
                                        },
                                    }}
                                >
                                    Home
                                </Button>
                                <Button
                                    component={Link}
                                    to="/source-code"
                                    sx={{
                                        color: '#111827',
                                        textTransform: 'none',
                                        fontSize: '0.9375rem',
                                        fontWeight: 500,
                                        px: 2,
                                        borderRadius: 2,
                                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            bgcolor: 'rgba(99, 102, 241, 0.08)',
                                            transform: 'translateY(-1px)',
                                        },
                                    }}
                                >
                                    Source Code
                                </Button>
                                <Button
                                component={Link}
                                    to="/portfolio"
                                    sx={{
                                        color: '#111827',
                                        textTransform: 'none',
                                        fontSize: '0.9375rem',
                                        fontWeight: 500,
                                        px: 2,
                                        borderRadius: 2,
                                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            bgcolor: 'rgba(99, 102, 241, 0.08)',
                                            transform: 'translateY(-1px)',
                                        },
                                    }}
                                >
                                    Portfolio
                                </Button>
                                <Button
                                    component={Link}
                                    to="/contact"
                                    sx={{
                                        color: '#111827',
                                        textTransform: 'none',
                                        fontSize: '0.9375rem',
                                        fontWeight: 500,
                                        px: 2,
                                        borderRadius: 2,
                                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            bgcolor: 'rgba(99, 102, 241, 0.08)',
                                            transform: 'translateY(-1px)',
                                        },
                                    }}
                                >
                                    Contact Us
                                </Button>
                            </Box>
                        )}

                        {/* Right: Icons */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, md: 1 } }}>
                            {/* Search Icon */}
                            <IconButton
                                sx={{
                                    color: '#111827',
                                    borderRadius: 2,
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        bgcolor: 'rgba(99, 102, 241, 0.08)',
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                <Search />
                            </IconButton>

                            {/* Cart Icon */}
                            {isAuthenticated && (
                                <IconButton
                                    component={Link}
                                    to="/cart"
                                    sx={{
                                        color: '#000',
                                        '&:hover': {
                                            bgcolor: 'rgba(102, 126, 234, 0.08)',
                                        },
                                    }}
                                >
                                    <Badge 
                                        badgeContent={cartCount} 
                                        color="error"
                                        sx={{
                                            '& .MuiBadge-badge': {
                                                bgcolor: '#6366f1',
                                                boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.3)',
                                            }
                                        }}
                                    >
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                            )}

                            {/* User Menu */}
                            {!isMobile && (
                                <>
                                    {isAuthenticated ? (
                                        <>
                                            <IconButton
                                                onClick={handleUserMenuOpen}
                                                sx={{
                                                    color: '#111827',
                                                    borderRadius: 2,
                                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(99, 102, 241, 0.08)',
                                                        transform: 'scale(1.05)',
                                                    },
                                                }}
                                            >
                                                <Avatar 
                                                    sx={{ 
                                                        width: 32, 
                                                        height: 32,
                                                        background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                                                        fontSize: '0.9rem',
                                                        fontWeight: 600,
                                                        boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.3)',
                                                    }}
                                                >
                                                    {user?.username?.charAt(0)?.toUpperCase() || 
                                                     user?.email?.charAt(0)?.toUpperCase()}
                                                </Avatar>
                                            </IconButton>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl)}
                                                onClose={handleUserMenuClose}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                                PaperProps={{
                                                    sx: {
                                                        mt: 1.5,
                                                        minWidth: 200,
                                                        borderRadius: 2,
                                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                                        border: '1px solid rgba(0, 0, 0, 0.05)',
                                                    }
                                                }}
                                            >
                                                <Box sx={{ px: 2, py: 1.5 }}>
                                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#000' }}>
                                                        {user?.username || user?.email?.split('@')[0]}
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ color: '#666' }}>
                                                        {user?.email}
                                                    </Typography>
                                                </Box>
                                                <Divider />
                                                <MenuItem onClick={() => { navigate('/'); handleUserMenuClose(); }} sx={{ color: '#000' }}>
                                                    <Home fontSize="small" sx={{ mr: 1.5, color: '#000' }} />
                                                    Home
                                                </MenuItem>
                                                <MenuItem onClick={() => { navigate('/about'); handleUserMenuClose(); }} sx={{ color: '#000' }}>
                                                    <Info fontSize="small" sx={{ mr: 1.5, color: '#000' }} />
                                                    About Us
                                                </MenuItem>
                                                <Divider />
                                                <MenuItem onClick={handleLogout} sx={{ color: '#000' }}>
                                                    <Logout fontSize="small" sx={{ mr: 1.5, color: '#000' }} />
                                                    Logout
                                                </MenuItem>
                                            </Menu>
                                        </>
                                    ) : (
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <Button
                                                component={Link}
                                                to="/login"
                                                variant="outlined"
                                                size="small"
                                                sx={{
                                                    textTransform: 'none',
                                                    borderColor: '#6366f1',
                                                    color: '#6366f1',
                                                    fontWeight: 600,
                                                    borderRadius: 2,
                                                    px: 2.5,
                                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    '&:hover': {
                                                        borderColor: '#6366f1',
                                                        bgcolor: 'rgba(99, 102, 241, 0.08)',
                                                        transform: 'translateY(-1px)',
                                                        boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.2)',
                                                    },
                                                }}
                                            >
                                                Login
                                            </Button>
                                            <Button
                                                component={Link}
                                                to="/signup"
                                                variant="contained"
                                                size="small"
                                                sx={{
                                                    textTransform: 'none',
                                                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                                                    fontWeight: 600,
                                                    borderRadius: 2,
                                                    px: 2.5,
                                                    boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.3), 0 2px 4px -1px rgba(99, 102, 241, 0.2)',
                                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    '&:hover': {
                                                        background: 'linear-gradient(135deg, #4f46e5 0%, #db2777 100%)',
                                                        boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.4), 0 4px 6px -2px rgba(99, 102, 241, 0.3)',
                                                        transform: 'translateY(-1px)',
                                                    },
                                                }}
                                            >
                                                Sign Up
                                            </Button>
                                        </Box>
                                    )}
                                </>
                            )}
                        </Box>
                </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                PaperProps={{
                    sx: {
                        bgcolor: '#ffffff',
                        color: '#000000',
                    }
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
