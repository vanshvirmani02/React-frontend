import React from "react";
import { Grid, Container, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext"; // Global cart context
import ProductCard from "./ProductCard"; 

const Orders = () => {
  const navigate = useNavigate();
  const { cart } = useCart(); // Get cart items

  return (
    <Container sx={{ mt: 4, position: "relative" }}>
      {/* Cart Icon at Top Right */}
      <IconButton
        sx={{ position: "absolute", top: 10, right: 20 }}
        color="primary"
        onClick={() => navigate("/cart")}
      >
        <Badge badgeContent={cart.length} color="error">
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </IconButton>

      {/* Product Cards */}
      <Grid container spacing={2} justifyContent="center">
        {[
          { id: 1, name: "Laptop", price: "50000", category: "Electronics", image: "https://via.placeholder.com/150" },
          { id: 2, name: "Smartphone", price: "25000", category: "Mobiles", image: "https://via.placeholder.com/150" },
          { id: 3, name: "Headphones", price: "5000", category: "Accessories", image: "https://via.placeholder.com/150" },
        ].map((product) => (
          <Grid item key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Orders;
