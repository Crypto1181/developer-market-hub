import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

// Create axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 second timeout
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Auth API - Don't use the interceptor for auth requests
export const authAPI = {
    register: async (email, password, username) => {
        try {
            const response = await axios.post(`${API_URL}/auth/local/register`, {
                username,
                email,
                password,
            });
            if (response.data.jwt) {
                localStorage.setItem('token', response.data.jwt);
                localStorage.setItem('user', JSON.stringify(response.data.user));
            }
            return response.data;
        } catch (error) {
            console.error('Registration error:', error.response?.data || error.message);
            throw error;
        }
    },

    login: async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/auth/local`, {
                identifier: email,
                password,
            });
            if (response.data.jwt) {
                localStorage.setItem('token', response.data.jwt);
                localStorage.setItem('user', JSON.stringify(response.data.user));
            }
            return response.data;
        } catch (error) {
            console.error('Login error:', error.response?.data || error.message);
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    getCurrentUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },
};

// Products API
export const productsAPI = {
    getAll: async () => {
        const response = await api.get('/products?populate=*');
        return response.data;
    },

    getById: async (id) => {
        // Try with documentId first (Strapi v5), fallback to numeric id
        // Use simple populate=* (Strapi v5 handles nested fields automatically)
        try {
            const response = await api.get(`/products/${id}?populate=*`);
            return response.data;
        } catch (error) {
            // If that fails, try getting all and filtering
            console.error(`Product ${id} not found, trying alternative method`);
            const allProducts = await api.get('/products?populate=*');
            const product = allProducts.data.data.find(p => p.documentId === id || p.id === parseInt(id));
            if (!product) {
                throw new Error('Product not found');
            }
            return { data: product };
        }
    },
};

// Payment Settings API
export const paymentSettingsAPI = {
    get: async () => {
        try {
            const response = await api.get('/payment-setting'); // Fixed: singular not plural
            return response.data;
        } catch (error) {
            console.error('Error fetching payment settings:', error);
            // Return default settings if API fails
            return {
                data: {
                    stripe_enabled: true,
                    paypal_enabled: true,
                    crypto_enabled: true,
                    paypal_email: 'payment@developermarkethub.com',
                    btc_wallet_address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
                    eth_wallet_address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
                    usdt_wallet_address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
                    support_email: 'support@developermarkethub.com',
                }
            };
        }
    },
};

// Helper to get image URL from Strapi
export const getImageUrl = (image) => {
    if (!image) return 'https://via.placeholder.com/400x300?text=No+Image';
    
    // Handle both single image and array of images
    const imageData = Array.isArray(image) ? image[0] : image;
    
    if (imageData?.url) {
        // If URL starts with '/', prepend Strapi base URL
        return imageData.url.startsWith('http') 
            ? imageData.url 
            : `http://localhost:1337${imageData.url}`;
    }
    
    return 'https://via.placeholder.com/400x300?text=No+Image';
};

// Helper to get all image URLs from Strapi (for carousel/swiper)
export const getAllImageUrls = (images) => {
    if (!images) return ['https://via.placeholder.com/400x300?text=No+Image'];
    
    // If not an array, convert to array
    const imageArray = Array.isArray(images) ? images : [images];
    
    // Map all images to URLs
    const urls = imageArray.map(img => {
        if (img?.url) {
            return img.url.startsWith('http') 
                ? img.url 
                : `http://localhost:1337${img.url}`;
        }
        return null;
    }).filter(Boolean); // Remove null values
    
    // Return URLs or placeholder if empty
    return urls.length > 0 ? urls : ['https://via.placeholder.com/400x300?text=No+Image'];
};

export default api;

