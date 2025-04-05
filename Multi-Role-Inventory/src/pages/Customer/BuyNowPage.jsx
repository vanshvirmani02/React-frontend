import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { Button, Typography, Container, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const BuyNowPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();

  const product = cart.find((item) => item.id === Number(id));

  if (!product) return <Typography>No product found!</Typography>;

  return (
    <Container>
      <img src={product.image} alt={product.name} width="200" />
      <Typography variant="h5">{product.name}</Typography>
      <Typography>Price: ₹{product.price}</Typography>
      <Typography>Category: {product.category}</Typography>
      <Typography>Quantity: {product.quantity}</Typography>

      <IconButton onClick={() => updateQuantity(product.id, product.quantity + 1)}>
        <AddIcon />
      </IconButton>
      <IconButton color="error" onClick={() => removeFromCart(product.id)}>
        <DeleteIcon />
      </IconButton>

      <Button variant="contained" color="primary" onClick={() => alert("Product Bought!")}>
        Pay
      </Button>
    </Container>
  );
};

export default BuyNowPage;
