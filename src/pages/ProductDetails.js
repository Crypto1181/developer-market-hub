import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Container,
    Paper,
    Typography,
    Rating,
    Box,
    Divider,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Button,
    Chip,
    Stack,
    CircularProgress,
    Alert,
} from '@mui/material';
import {
    ShoppingCart,
    Share,
    Security,
    ArrowBack,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { productsAPI, getAllImageUrls } from '../services/api';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Fetch product from Strapi
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await productsAPI.getById(id);
                setProduct(response.data);
            } catch (err) {
                setError('Failed to load product details');
                console.error('Error fetching product:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleBuyNow = () => {
        navigate(`/payment/${id}`);
    };

    // Helper function to parse rich text from Strapi
    const parseRichText = (richTextArray) => {
        if (!richTextArray || !Array.isArray(richTextArray)) return '';
        return richTextArray
            .map(block => {
                if (block.children) {
                    return block.children.map(child => child.text || '').join('');
                }
                return '';
            })
            .join('\n');
    };

    if (loading) {
        return (
            <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#fafafa' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error || !product) {
        return (
            <Box sx={{ minHeight: '100vh', pt: 4, pb: 8, bgcolor: '#fafafa' }}>
                <Container maxWidth="lg">
                    <Alert severity="error">{error || 'Product not found'}</Alert>
                </Container>
            </Box>
        );
    }

    // Transform Strapi field names to match our component
    const productData = {
        title: product.Ttile || product.Title || product.title || 'Untitled Product',
        subtitle: product.Subtitle || product.subtitle || 'No subtitle',
        price: product.Price || product.price || 0,
        rating: product.Rating || product.rating || 4.5,
        description: product.Description || product.description || 'No description available',
        image: product.Product_image || product.image,
        comments: product.Product_comment || [],
        includedItems: product.IncluedItem || product.IncludedItem || [],
    };
    
    // Get all product images
    const productImages = getAllImageUrls(productData.image);

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#fafafa', py: 4 }}>
            <Container maxWidth="xl">
                {/* Back Button */}
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() => navigate(-1)}
                    sx={{ 
                        mb: 3,
                        color: '#000',
                        '&:hover': {
                            bgcolor: 'rgba(0,0,0,0.05)',
                        }
                    }}
                >
                    Back to Products
                </Button>

                {/* Main Product Section */}
            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
                        gap: 4,
                        mb: 4,
                    }}>
                        {/* Left Column - Images */}
                        <Box>
                        <Paper
                                elevation={0}
                            sx={{
                                p: 2,
                                borderRadius: 3,
                                    bgcolor: '#fff',
                                    border: '1px solid rgba(0,0,0,0.08)',
                            }}
                        >
                                {/* Main Image */}
                            <Box
                                component="img"
                                    src={productImages[selectedImageIndex]}
                                    alt={productData.title}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                        maxHeight: '600px',
                                        objectFit: 'contain',
                                    borderRadius: 2,
                                    mb: 2,
                                }}
                                />

                                {/* Thumbnail Images */}
                                {productImages.length > 1 && (
                                    <Box sx={{ 
                                        display: 'grid', 
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                                        gap: 1,
                                    }}>
                                        {productImages.map((imageUrl, index) => (
                                            <Box
                                                key={index}
                                                component="img"
                                                src={imageUrl}
                                                alt={`Thumbnail ${index + 1}`}
                                                onClick={() => setSelectedImageIndex(index)}
                                                sx={{
                                                    width: '100%',
                                                    height: '80px',
                                                    objectFit: 'cover',
                                                    borderRadius: 1.5,
                                                    cursor: 'pointer',
                                                    border: selectedImageIndex === index 
                                                        ? '3px solid #2196f3' 
                                                        : '2px solid transparent',
                                                    opacity: selectedImageIndex === index ? 1 : 0.6,
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        opacity: 1,
                                                        transform: 'scale(1.05)',
                                                    }
                                                }}
                                            />
                                        ))}
                            </Box>
                                )}
                        </Paper>
                    </Box>

                        {/* Right Column - Product Info */}
                        <Box>
                        <Paper
                                elevation={0}
                            sx={{
                                    p: 4,
                                borderRadius: 3,
                                    bgcolor: '#fff',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    position: 'sticky',
                                    top: 20,
                                }}
                            >
                                {/* Badges */}
                                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                                    <Chip 
                                        icon={<Security />} 
                                        label="Verified" 
                                        size="small"
                                        sx={{
                                            bgcolor: '#e8f5e9',
                                            color: '#2e7d32',
                                            fontWeight: 600,
                                        }}
                                    />
                                    <Chip 
                                        label="24/7 Support" 
                                        size="small"
                                        sx={{
                                            bgcolor: '#e3f2fd',
                                            color: '#1976d2',
                                            fontWeight: 600,
                                        }}
                                    />
                                </Stack>

                                {/* Title */}
                                <Typography 
                                    variant="h4" 
                                    sx={{ 
                                        fontWeight: 700,
                                        mb: 1,
                                        color: '#1a1a1a',
                                    }}
                                >
                                    {productData.title}
                            </Typography>

                                {/* Subtitle */}
                            <Typography
                                    variant="body1" 
                                    sx={{ 
                                        color: '#666',
                                        mb: 2,
                                    }}
                                >
                                    {productData.subtitle}
                            </Typography>

                                {/* Rating */}
                                {productData.rating && productData.rating > 0 && (
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <Rating
                                            value={productData.rating} 
                                            precision={0.5} 
                                            readOnly
                                            sx={{ mr: 1 }}
                                        />
                                        <Typography variant="body2" sx={{ color: '#666' }}>
                                            ({productData.rating})
                                        </Typography>
                                        {productData.comments?.length > 0 && (
                                            <Typography variant="body2" sx={{ color: '#666', ml: 1 }}>
                                                • {productData.comments.length} reviews
                                            </Typography>
                                        )}
                                    </Box>
                                )}

                                <Divider sx={{ my: 3 }} />

                                {/* Price */}
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="caption" sx={{ color: '#666', display: 'block', mb: 0.5 }}>
                                        Price
                                    </Typography>
                                    <Typography 
                                        variant="h3" 
                                        sx={{ 
                                            fontWeight: 900,
                                            color: '#2196f3',
                                        }}
                                    >
                                        ${productData.price.toFixed(2)}
                                    </Typography>
                                </Box>

                                {/* Action Buttons */}
                                <Stack spacing={2} sx={{ mb: 3 }}>
                                <Button
                                    variant="contained"
                                        fullWidth
                                    size="large"
                                        onClick={handleBuyNow}
                                    startIcon={<ShoppingCart />}
                                    sx={{
                                            py: 1.5,
                                            bgcolor: '#2196f3',
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        fontSize: '1.1rem',
                                            fontWeight: 600,
                                        '&:hover': {
                                                bgcolor: '#1976d2',
                                            }
                                    }}
                                >
                                    Buy Now
                                </Button>
                                    <Stack direction="row" spacing={2}>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            size="large"
                                            startIcon={<ShoppingCart />}
                                            sx={{
                                                py: 1.5,
                                                borderRadius: 2,
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                color: '#2196f3',
                                                borderColor: '#2196f3',
                                                '&:hover': {
                                                    bgcolor: 'rgba(33, 150, 243, 0.08)',
                                                    borderColor: '#1976d2',
                                                }
                                            }}
                                        >
                                            Add to Cart
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            size="large"
                                            startIcon={<Share />}
                                            sx={{
                                                py: 1.5,
                                                borderRadius: 2,
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                color: '#666',
                                                borderColor: 'rgba(0,0,0,0.23)',
                                                '&:hover': {
                                                    bgcolor: '#f5f5f5',
                                                    borderColor: '#000',
                                                }
                                            }}
                                        >
                                            Share
                                        </Button>
                                    </Stack>
                                </Stack>

                            <Divider sx={{ my: 3 }} />

                                {/* What's Included */}
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#1a1a1a' }}>
                                    What's Included
                                </Typography>
                                    <Stack spacing={1.5}>
                                        {productData.includedItems?.length > 0 ? (
                                            productData.includedItems.map((item, index) => (
                                                <Box 
                                                    key={index}
                                                    sx={{ 
                                                        display: 'flex', 
                                                        alignItems: 'center',
                                                        gap: 1.5,
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: 6,
                                                            height: 6,
                                                            borderRadius: '50%',
                                                            bgcolor: '#2196f3',
                                                            flexShrink: 0,
                                                        }}
                                                    />
                                                    <Typography variant="body2" sx={{ color: '#444' }}>
                                                        {item.Title || item.title}
                                                    </Typography>
                                                </Box>
                                            ))
                                        ) : (
                                            <>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#2196f3' }} />
                                                    <Typography variant="body2">Complete Source Code</Typography>
                                    </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#2196f3' }} />
                                                    <Typography variant="body2">Lifetime Updates</Typography>
                                    </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#2196f3' }} />
                                                    <Typography variant="body2">6 Months Support</Typography>
                                    </Box>
                                            </>
                                        )}
                                </Stack>
                            </Box>
                        </Paper>
                    </Box>
                </Box>

                    {/* Description Section */}
                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,
                            borderRadius: 3,
                            bgcolor: '#fff',
                            border: '1px solid rgba(0,0,0,0.08)',
                            mb: 4,
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1a1a1a' }}>
                            Description
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                color: '#444',
                                lineHeight: 1.8,
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            {productData.description}
                        </Typography>
                    </Paper>

                    {/* Reviews Section */}
                    {productData.comments?.length > 0 && (
                <Paper
                            elevation={0}
                    sx={{
                                p: 4,
                        borderRadius: 3,
                                bgcolor: '#fff',
                                border: '1px solid rgba(0,0,0,0.08)',
                    }}
                >
                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1a1a1a' }}>
                                Customer Reviews ({productData.comments.length})
                    </Typography>
                            <List sx={{ p: 0 }}>
                                {productData.comments.map((comment, index) => (
                            <ListItem
                                        key={index}
                                alignItems="flex-start"
                                sx={{
                                    px: 0,
                                            py: 3,
                                            borderBottom: index < productData.comments.length - 1 
                                                ? '1px solid rgba(0,0,0,0.06)' 
                                                : 'none',
                                }}
                            >
                                <ListItemAvatar>
                                            <Avatar
                                                src={comment.profile_image ? `http://localhost:1337${comment.profile_image.url}` : undefined}
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    bgcolor: '#2196f3',
                                                }}
                                            >
                                                {comment.commenter_name?.charAt(0)?.toUpperCase()}
                                            </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                                <Box sx={{ mb: 1 }}>
                                                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5, color: '#000' }}>
                                                        {comment.commenter_name}
                                            </Typography>
                                            <Rating
                                                        value={parseFloat(comment.Rating || comment.rating || 0)} 
                                                size="small"
                                                readOnly
                                            />
                                        </Box>
                                    }
                                            secondary={
                                                <Typography variant="body2" sx={{ color: '#222', mt: 1, lineHeight: 1.6 }}>
                                                    {parseRichText(comment.comment_text)}
                                                </Typography>
                                            }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
                    )}
            </motion.div>
        </Container>
        </Box>
    );
};

export default ProductDetails;
