import React, { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    Typography,
    Box,
    TextField,
    InputAdornment,
    Chip,
    CircularProgress,
    Alert,
    Paper,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, TrendingUp } from '@mui/icons-material';
import ProductCard from '../components/ProductCard';
import { productsAPI } from '../services/api';

const categories = ['All', 'APIs', 'Templates', 'Tools', 'Plugins', 'Scripts'];

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch products from Strapi
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await productsAPI.getAll();
                // Transform Strapi data
                const transformedProducts = response.data.map(item => ({
                    id: item.documentId || item.id,
                    numericId: item.id,
                    documentId: item.documentId,
                    title: item.Ttile || item.Title || item.title || 'Untitled Product',
                    subtitle: item.Subtitle || item.subtitle || 'No description',
                    price: item.Price || item.price || 0,
                    rating: item.Rating || item.rating || null,
                    category: item.Category || item.category || 'General',
                    image: item.Product_image || item.image,
                    description: item.Description || item.description || 'No description available',
                }));
                setProducts(transformedProducts);
            } catch (err) {
                setError('Failed to load products. Please make sure Strapi is running.');
                console.error('Error fetching products:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) => {
        const matchesSearch = 
            (product.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
            (product.subtitle?.toLowerCase() || '').includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' ||
            (product.category?.toLowerCase() || '') === selectedCategory.toLowerCase();
        return matchesSearch && matchesCategory;
    });

    return (
        <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh', pt: 4, pb: 8 }}>
            <Container maxWidth="xl">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography
                        variant="h3"
                        sx={{
                                fontWeight: 800,
                                mb: 2,
                                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                            WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                letterSpacing: '-0.03em',
                                lineHeight: 1.1,
                        }}
                    >
                            Discover Premium Digital Products
                    </Typography>
                        <Typography
                            variant="h6"
                sx={{
                                color: '#666',
                                fontWeight: 400,
                    mb: 4,
                                fontSize: { xs: '1rem', md: '1.25rem' },
                            }}
                        >
                            APIs, Templates, and Tools to Power Your Projects
                        </Typography>

                        {/* Search Bar */}
                        <Box sx={{ maxWidth: 700, mx: 'auto' }}>
                        <TextField
                            fullWidth
                                placeholder="Search for products, APIs, templates..."
                            value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                            <Search sx={{ color: '#6366f1' }} />
                                    </InputAdornment>
                                ),
                            }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: '#fff',
                                        borderRadius: 3,
                                        fontSize: '1rem',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        transition: 'all 0.3s ease',
                                        '& input': {
                                            color: '#111827',
                                            fontWeight: 500,
                                        },
                                        '& fieldset': {
                                            borderColor: 'rgba(0, 0, 0, 0.08)',
                                            borderWidth: 1.5,
                                        },
                                        '&:hover': {
                                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                            transform: 'translateY(-1px)',
                                            '& fieldset': {
                                                borderColor: '#6366f1',
                                            },
                                        },
                                        '&.Mui-focused': {
                                            boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.2), 0 4px 6px -2px rgba(99, 102, 241, 0.1)',
                                            transform: 'translateY(-1px)',
                                            '& fieldset': {
                                                borderColor: '#6366f1',
                                                borderWidth: 2,
                                            },
                                        },
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2, overflowX: 'auto', pb: 2 }}>
                        <TrendingUp sx={{ color: '#6366f1', flexShrink: 0, fontSize: '1.5rem' }} />
                        {categories.map((category) => (
                    <Chip
                                key={category}
                                label={category}
                                onClick={() => setSelectedCategory(category)}
                                sx={{
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    px: 2,
                                    py: 0.5,
                                    height: 36,
                                    bgcolor: selectedCategory === category 
                                        ? 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)' 
                                        : '#fff',
                                    color: selectedCategory === category 
                                        ? '#fff' 
                                        : '#111827',
                                    border: selectedCategory === category 
                                        ? 'none' 
                                        : '1.5px solid rgba(0, 0, 0, 0.1)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: selectedCategory === category 
                                        ? '0 4px 6px -1px rgba(99, 102, 241, 0.3), 0 2px 4px -1px rgba(99, 102, 241, 0.2)' 
                                        : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: selectedCategory === category 
                                            ? '0 10px 15px -3px rgba(99, 102, 241, 0.4), 0 4px 6px -2px rgba(99, 102, 241, 0.3)' 
                                            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                    },
                                }}
                            />
                        ))}
                    </Box>
                </motion.div>

                {/* Results Count */}
                {!loading && !error && (
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="body1" sx={{ color: '#666', fontWeight: 500 }}>
                            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                        </Typography>
                    </Box>
                )}

                {/* Loading State */}
                {loading && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
                        <CircularProgress size={50} sx={{ color: '#667eea' }} />
            </Box>
                )}

                {/* Error State */}
                {error && !loading && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Alert 
                            severity="error" 
                            sx={{ 
                                borderRadius: 3,
                                fontSize: '1rem',
                            }}
                        >
                            {error}
                        </Alert>
                    </motion.div>
                )}

                {/* Product Grid */}
                {!loading && !error && filteredProducts.length > 0 && (
            <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
            >
                <Grid container spacing={3}>
                            <AnimatePresence>
                                {filteredProducts.map((product, index) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} sx={{ display: 'flex' }}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            style={{ width: '100%', display: 'flex' }}
                                        >
                            <ProductCard product={product} />
                                        </motion.div>
                                    </Grid>
                                ))}
                            </AnimatePresence>
                        </Grid>
                    </motion.div>
                )}

                {/* No Results */}
                {!loading && !error && filteredProducts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 8,
                                textAlign: 'center',
                                borderRadius: 4,
                                border: '2px dashed rgba(0, 0, 0, 0.1)',
                                bgcolor: '#fff',
                            }}
                        >
                            <Search sx={{ fontSize: 60, color: '#ccc', mb: 2 }} />
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#666' }}>
                                No Products Found
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#999' }}>
                                Try adjusting your search or filter to find what you're looking for.
                            </Typography>
                        </Paper>
            </motion.div>
                )}
        </Container>
        </Box>
    );
};

export default Home;

