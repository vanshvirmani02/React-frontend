import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";

const EditProductQuantity = ({ open, onClose, productData }) => {
  const [quantity, setQuantity] = useState(productData?.stock || "");

  const handleSave = () => {
    alert("Data Saved");
    onClose(); // Close modal
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Product Quantity</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Product Name"
          variant="outlined"
          margin="normal"
          value={productData?.name || ""}
          disabled // Keep product name read-only
        />
        <TextField
          fullWidth
          label="Quantity"
          variant="outlined"
          margin="normal"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSave} color="primary" variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProductQuantity;
