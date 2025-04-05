import React from "react";
import { useCart } from "./CartContext";
import { Button, Typography, Container, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) return <Typography>Your cart is empty!</Typography>;

  return (
    <Container>
      {cart.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} width="100" />
          <Typography>{product.name}</Typography>
          <Typography>Price: ₹{product.price}</Typography>
          <Typography>Quantity: {product.quantity}</Typography>

          <IconButton onClick={() => updateQuantity(product.id, product.quantity + 1)}>
            <AddIcon />
          </IconButton>
          <IconButton color="error" onClick={() => removeFromCart(product.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      ))}

      <Button variant="contained" color="primary" onClick={() => alert("Product Bought!")}>
        Pay
      </Button>
    </Container>
  );
};

export default CartPage;
