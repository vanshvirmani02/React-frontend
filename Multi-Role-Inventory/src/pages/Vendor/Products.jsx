import React from 'react'
import AddProducts from './AddProducts'
import ProductDetails from './ProductDetails'
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";

export default function Products() {
    const navigate = useNavigate();
  return (
    <div>
        <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/vendor/analysis")}
        >
          Get Analysis
        </Button>
      </Box>
        <AddProducts></AddProducts>
        <ProductDetails></ProductDetails>
    </div>
  )
}
