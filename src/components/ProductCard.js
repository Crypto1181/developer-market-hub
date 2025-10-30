import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    Typography,
    Rating,
    Box,
    Button,
    Chip,
    IconButton,
    Tooltip,
    Snackbar,
    Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import { ShoppingCart, Favorite, Share, NavigateBefore, NavigateNext } from '@mui/icons-material';
import { getAllImageUrls } from '../services/api';
import { CartContext } from '../context/CartContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { addItem } = useContext(CartContext);
    const [isHovered, setIsHovered] = React.useState(false);
    const [showSuccess, setShowSuccess] = React.useState(false);
    
    // Safety check
    if (!product) {
        return null;
    }
    
    // Get all product images for the carousel
    const productImages = getAllImageUrls(product.image);

    const handleBuy = (e) => {
        e.stopPropagation();
        navigate(`/payment/${product.id}`);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addItem(product);
        setShowSuccess(true);
    };

    const handleCardClick = () => {
        navigate(`/product/${product.id}`);
    };

    const cardVariants = {
        initial: { 
            opacity: 0, 
            y: 20,
            scale: 0.95,
        },
        animate: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
            }
        },
        hover: {
            y: -12,
            scale: 1.03,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
            }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{ height: '100%', width: '100%', display: 'flex' }}
        >
            <Card
                onClick={handleCardClick}
                sx={{
                    height: 420,
                    minHeight: 420,
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 280,
                    width: '100%',
                    borderRadius: 1,
                    background: '#fff',
                    boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.12)' : '0 1px 3px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        transform: 'translateY(-2px)',
                    }
                }}
            >
                <Box sx={{ position: 'relative', overflow: 'hidden', height: 280, bgcolor: '#f5f5f5' }}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination={{ 
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        loop={false}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        style={{ height: '100%', width: '100%' }}
                    >
                        {productImages.map((imageUrl, index) => (
                            <SwiperSlide key={index}>
                                <Box
                                    component="img"
                                    src={imageUrl}
                                    alt={`${product.title} - Image ${index + 1}`}
                                    sx={{
                                        width: '100%',
                                        height: 280,
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease',
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    {/* Category Badge */}
                    <Chip
                        label={product.category || 'General'}
                        size="small"
                        sx={{
                            position: 'absolute',
                            top: 8,
                            left: 8,
                            bgcolor: 'rgba(255, 255, 255, 0.95)',
                            color: '#666',
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            height: 20,
                            zIndex: 2,
                        }}
                    />
                    
                    {/* Custom Navigation Buttons */}
                    {productImages.length > 1 && (
                        <>
                            <IconButton
                                className="swiper-button-prev-custom"
                                onClick={(e) => e.stopPropagation()}
                                sx={{
                                    position: 'absolute',
                                    left: 8,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10,
                                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                                    width: 32,
                                    height: 32,
                                    opacity: isHovered ? 1 : 0,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 1)',
                                        transform: 'translateY(-50%) scale(1.1)',
                                    }
                                }}
                            >
                                <NavigateBefore sx={{ color: '#000' }} />
                            </IconButton>
                            <IconButton
                                className="swiper-button-next-custom"
                                onClick={(e) => e.stopPropagation()}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10,
                                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                                    width: 32,
                                    height: 32,
                                    opacity: isHovered ? 1 : 0,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 1)',
                                        transform: 'translateY(-50%) scale(1.1)',
                                    }
                                }}
                            >
                                <NavigateNext sx={{ color: '#000' }} />
                            </IconButton>
                        </>
                    )}
                    {/* Gradient overlay */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)',
                            opacity: isHovered ? 1 : 0,
                            transition: 'opacity 0.4s ease',
                            pointerEvents: 'none',
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 12,
                                right: 12,
                                display: 'flex',
                                gap: 1,
                                flexDirection: 'column',
                            }}
                        >
                            <Tooltip title="Add to Favorites" placement="left">
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <IconButton
                                        size="small"
                                        sx={{
                                            bgcolor: 'rgba(255, 255, 255, 0.95)',
                                            backdropFilter: 'blur(10px)',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                            '&:hover': { 
                                                bgcolor: '#ff4081',
                                                color: 'white',
                                                transform: 'scale(1.1)',
                                            },
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <Favorite fontSize="small" />
                                    </IconButton>
                                </motion.div>
                            </Tooltip>
                            <Tooltip title="Share" placement="left">
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <IconButton
                                        size="small"
                                        sx={{
                                            bgcolor: 'rgba(255, 255, 255, 0.95)',
                                            backdropFilter: 'blur(10px)',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                            '&:hover': { 
                                                bgcolor: '#2196f3',
                                                color: 'white',
                                                transform: 'scale(1.1)',
                                            },
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <Share fontSize="small" />
                                    </IconButton>
                                </motion.div>
                        </Tooltip>
                    </Box>
                    </motion.div>
                    {product.tag && (
                        <Chip
                            label={product.tag}
                            size="small"
                            color="secondary"
                            sx={{
                                position: 'absolute',
                                top: 12,
                                left: 12,
                                borderRadius: '12px',
                                px: 1.5,
                                fontWeight: 700,
                                fontSize: '0.75rem',
                                backdropFilter: 'blur(10px)',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                border: 'none',
                                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
                            }}
                        />
                    )}
                </Box>
                <CardContent sx={{ p: 1.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Title */}
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#333',
                            fontSize: '0.875rem',
                            fontWeight: 400,
                            mb: 0.5,
                            height: 40,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: 1.4,
                        }}
                    >
                        {product.title || 'Untitled Product'}
                    </Typography>

                    {/* Free Shipping Badge */}
                    <Typography
                        variant="caption"
                        sx={{
                            color: '#666',
                            fontSize: '0.7rem',
                            mb: 0.5,
                        }}
                    >
                        Free shipping
                    </Typography>

                    {/* Rating */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        {product.rating && product.rating > 0 && (
                            <>
                                <Rating 
                                    value={product.rating} 
                                    precision={0.1} 
                                    size="small" 
                                    readOnly 
                                    sx={{ 
                                        fontSize: '0.9rem',
                                        '& .MuiRating-icon': {
                                            fontSize: '0.9rem',
                                        }
                                    }}
                                />
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: '#666',
                                        fontSize: '0.7rem',
                                    }}
                                >
                                    {product.rating}
                                </Typography>
                            </>
                        )}
                    </Box>

                    {/* Price and Cart Button */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#ff5722',
                                fontSize: '1.1rem',
                                fontWeight: 700,
                            }}
                        >
                            ${product.price?.toFixed(2) || '0.00'}
                        </Typography>
                        <IconButton
                            onClick={handleAddToCart}
                            size="small"
                            sx={{
                                bgcolor: '#2196f3',
                                color: '#fff',
                                width: 32,
                                height: 32,
                                '&:hover': {
                                    bgcolor: '#1976d2',
                                }
                            }}
                        >
                            <ShoppingCart sx={{ fontSize: '1.1rem' }} />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
            
            {/* Success Snackbar */}
            <Snackbar
                open={showSuccess}
                autoHideDuration={2000}
                onClose={() => setShowSuccess(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert onClose={() => setShowSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Added to cart!
                </Alert>
            </Snackbar>
        </motion.div>
    );
};

export default ProductCard;