import React, { useContext } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, IconButton, Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { items, removeFromCart, clearCart } = useContext(CartContext);

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Your Cart
            </Typography>

            {items.length === 0 ? (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="body1">Your cart is empty. Browse the marketplace to add items.</Typography>
                </Box>
            ) : (
                <>
                    <List>
                        {items.map((it) => (
                            <ListItem key={it.cartId} secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(it.cartId)}>
                                    <Delete />
                                </IconButton>
                            }>
                                <ListItemText primary={it.title} secondary={`$${it.price}`} />
                            </ListItem>
                        ))}
                    </List>
                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                        <Button variant="contained" color="primary">Checkout</Button>
                        <Button variant="outlined" color="inherit" onClick={clearCart}>Clear Cart</Button>
                    </Box>
                </>
            )}
        </Container>
    );
};

export default Cart;
