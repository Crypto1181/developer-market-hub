import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import ProtectedRoute from './components/ProtectedRoute';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import './App.css';

// Create a modern 2024-2025 theme with contemporary design
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6366f1', // Modern indigo
      light: '#818cf8',
      dark: '#4f46e5',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ec4899', // Modern pink
      light: '#f472b6',
      dark: '#db2777',
      contrastText: '#fff',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    info: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '2.75rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '0.9375rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0px 30px 60px rgba(0,0,0,0.12)',
    '0px 40px 80px rgba(0,0,0,0.15)',
    '0px 50px 100px rgba(0,0,0,0.18)',
    '0px 60px 120px rgba(0,0,0,0.2)',
    '0px 70px 140px rgba(0,0,0,0.22)',
    '0px 80px 160px rgba(0,0,0,0.25)',
    '0px 90px 180px rgba(0,0,0,0.27)',
    '0px 100px 200px rgba(0,0,0,0.3)',
    '0px 110px 220px rgba(0,0,0,0.32)',
    '0px 120px 240px rgba(0,0,0,0.35)',
    '0px 130px 260px rgba(0,0,0,0.37)',
    '0px 140px 280px rgba(0,0,0,0.4)',
    '0px 150px 300px rgba(0,0,0,0.42)',
    '0px 160px 320px rgba(0,0,0,0.45)',
    '0px 170px 340px rgba(0,0,0,0.47)',
    '0px 180px 360px rgba(0,0,0,0.5)',
    '0px 190px 380px rgba(0,0,0,0.52)',
    '0px 200px 400px rgba(0,0,0,0.55)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 24px',
          fontWeight: 600,
          fontSize: '0.9375rem',
          letterSpacing: '0.01em',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          textTransform: 'none',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
        },
        contained: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          '&:hover': {
            boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.3), 0 4px 6px -2px rgba(99, 102, 241, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-1px)',
            },
            '&.Mui-focused': {
              transform: 'translateY(-1px)',
              boxShadow: '0 4px 12px rgba(33, 150, 243, 0.2)',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
        elevation2: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        elevation3: {
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <div className="App">
            <CartProvider>
              <Navbar />
              <AnimatePresence mode="wait">
                <Routes>
                  {/* Public routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                
                {/* Protected routes - require authentication */}
                <Route 
                  path="/" 
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/product/:id" 
                  element={
                    <ProtectedRoute>
                      <ProductDetails />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/cart" 
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/payment/:id" 
                  element={
                    <ProtectedRoute>
                      <Payment />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Contact Page */}
                <Route path="/contact" element={<Contact />} />
                
                {/* Coming Soon Pages */}
                <Route 
                  path="/source-code" 
                  element={
                    <ComingSoon 
                      title="Source Code" 
                      subtitle="Browse and purchase premium source code projects"
                    />
                  } 
                />
                <Route 
                  path="/portfolio" 
                  element={
                    <ComingSoon 
                      title="Portfolio" 
                      subtitle="Explore our collection of amazing projects"
                    />
                  } 
                />
              </Routes>
            </AnimatePresence>
          </CartProvider>
        </div>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
