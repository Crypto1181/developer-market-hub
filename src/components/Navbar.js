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
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    DevMarket
                </Typography>
            </Box>
            <Divider />
            <List>
                {isAuthenticated ? (
                    <>
                        <ListItem>
                            <ListItemIcon>
                                <Avatar sx={{ width: 32, height: 32, bgcolor: '#667eea' }}>
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
                        <ListItem button onClick={() => { navigate('/'); handleDrawerToggle(); }}>
                            <ListItemIcon><Home sx={{ color: '#000' }} /></ListItemIcon>
                            <ListItemText primary="Home" primaryTypographyProps={{ color: '#000' }} />
                        </ListItem>
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
                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
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
                                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                            textDecoration: 'none',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                                    letterSpacing: '-0.5px',
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
                                        color: '#000',
                                        textTransform: 'none',
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        px: 2,
                                        '&:hover': {
                                            bgcolor: 'rgba(102, 126, 234, 0.08)',
                                        },
                                    }}
                                >
                                    Home
                                </Button>
                                <Button
                                    component={Link}
                                    to="/source-code"
                                    sx={{
                                        color: '#000',
                                        textTransform: 'none',
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        px: 2,
                                        '&:hover': {
                                            bgcolor: 'rgba(102, 126, 234, 0.08)',
                                        },
                                    }}
                                >
                                    Source Code
                                </Button>
                                <Button
                                component={Link}
                                    to="/portfolio"
                                    sx={{
                                        color: '#000',
                                        textTransform: 'none',
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        px: 2,
                                        '&:hover': {
                                            bgcolor: 'rgba(102, 126, 234, 0.08)',
                                        },
                                    }}
                                >
                                    Portfolio
                                </Button>
                                <Button
                                    component={Link}
                                    to="/contact"
                                    sx={{
                                        color: '#000',
                                        textTransform: 'none',
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        px: 2,
                                        '&:hover': {
                                            bgcolor: 'rgba(102, 126, 234, 0.08)',
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
                                    color: '#000',
                                    '&:hover': {
                                        bgcolor: 'rgba(102, 126, 234, 0.08)',
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
                                                bgcolor: '#667eea',
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
                                                    color: '#000',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(102, 126, 234, 0.08)',
                                                    },
                                                }}
                                            >
                                                <Avatar 
                                                    sx={{ 
                                                        width: 32, 
                                                        height: 32,
                                                        bgcolor: '#667eea',
                                                        fontSize: '0.9rem',
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
                                                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
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
                                                    borderColor: '#667eea',
                                                    color: '#667eea',
                                                    fontWeight: 600,
                                                    borderRadius: 2,
                                                    '&:hover': {
                                                        borderColor: '#667eea',
                                                        bgcolor: 'rgba(102, 126, 234, 0.08)',
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
                                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                    fontWeight: 600,
                                                    borderRadius: 2,
                                                    boxShadow: 'none',
                                                    '&:hover': {
                                                        background: 'linear-gradient(135deg, #5568d3 0%, #6a3f8e 100%)',
                                                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
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
