import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Dummy Sales Data (Last 7 Days)
const dailySales = [
  { date: "Mar 25", sales: 50 },
  { date: "Mar 26", sales: 80 },
  { date: "Mar 27", sales: 45 },
  { date: "Mar 28", sales: 90 },
  { date: "Mar 29", sales: 60 },
  { date: "Mar 30", sales: 120 },
  { date: "Mar 31", sales: 75 },
];

// Dummy Low-Stock Items Data
const lowStockItems = [
  { id: 1, name: "Laptop", stock: 2 },
  { id: 2, name: "Mouse", stock: 5 },
  { id: 3, name: "Keyboard", stock: 3 },
];

const VendorAnalysis = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      
      {/* Daily Sales (Last 7 Days) */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Daily Sales (Last 7 Days)</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailySales}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#1976D2" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Low-Stock Items */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Low-Stock Items</Typography>
            {lowStockItems.length > 0 ? (
              lowStockItems.map((item) => (
                <Typography key={item.id}>
                  {item.name} - <strong>{item.stock} left</strong>
                </Typography>
              ))
            ) : (
              <Typography>No low-stock items 🎉</Typography>
            )}
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
};

export default VendorAnalysis;
