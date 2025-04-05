import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext"; 

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 300, margin: 2 }}>
      <CardMedia
        component="img"
        height="150"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="textSecondary">Price: ₹{product.price}</Typography>
        <Typography color="textSecondary">Category: {product.category}</Typography>

        {/* Buy Now Button */}
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 1 }}
          onClick={() => navigate(`/buy-now?${product.id}`)}
        >
          Buy Now
        </Button>

        {/* Add to Cart Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 1, ml: 1 }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
