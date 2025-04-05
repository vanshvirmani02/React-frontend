import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import EditProductQuantity from "./EditProductQuantity"; // Import the new component

const ProductDetails = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "Laptop", price: "₹50,000", vendorId: "V123", stock: 20, category: "Electronics", createdAt: new Date().toLocaleDateString() },
    { id: 2, name: "Smartphone", price: "₹25,000", vendorId: "V456", stock: 35, category: "Mobiles", createdAt: new Date().toLocaleDateString() },
    { id: 3, name: "Headphones", price: "₹5,000", vendorId: "V789", stock: 50, category: "Accessories", createdAt: new Date().toLocaleDateString() },
  ];

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setEditOpen(true);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: 900, margin: "auto", mt: 5 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1976d2" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Price</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Vendor ID</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Stock</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Category</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Created At</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.vendorId}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.createdAt}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEditClick(product)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => alert(`Delete ${product.name}`)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Dialog Component */}
      {selectedProduct && (
        <EditProductQuantity
          open={editOpen}
          onClose={() => setEditOpen(false)}
          productData={selectedProduct}
        />
      )}
    </>
  );
};

export default ProductDetails;
