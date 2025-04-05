import React, { useState } from "react";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, MenuItem, Button } from "@mui/material";

export default function AddProducts() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    createdAt: new Date().toISOString().split("T")[0], // Auto-generates today's date
  });

  const categories = ["Electronics", "Clothing", "Home Appliances", "Books", "Beauty"]; // Example categories

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Product Added:", product);
    alert("Product Added Successfully!");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <h2>Add New Product</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="price"
                  type="number"
                  value={product.price}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="stock"
                  type="number"
                  value={product.stock}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                <TextField
                  select
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </TextField>
              </TableCell>
              <TableCell>{product.createdAt}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button sx={{ mt: 2 }} variant="contained" color="primary" onClick={handleSubmit}>
        Add Product
      </Button>
    </Container>
  );
}
