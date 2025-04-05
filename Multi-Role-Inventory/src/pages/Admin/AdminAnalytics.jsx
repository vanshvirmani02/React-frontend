import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Dummy data for Revenue per Vendor
const revenueData = [
  { vendor: "Vendor A", revenue: 50000 },
  { vendor: "Vendor B", revenue: 70000 },
  { vendor: "Vendor C", revenue: 45000 },
  { vendor: "Vendor D", revenue: 80000 },
];

// Dummy data for Top 5 Products by Sales
const topProducts = [
  { id: 1, name: "Laptop", sales: 120, revenue: 600000 },
  { id: 2, name: "Smartphone", sales: 90, revenue: 225000 },
  { id: 3, name: "Headphones", sales: 75, revenue: 375000 },
  { id: 4, name: "Tablet", sales: 60, revenue: 180000 },
  { id: 5, name: "Keyboard", sales: 50, revenue: 50000 },
];

// Dummy Average Order Value
const avgOrderValue = 3500; // Assume calculation from backend

const AdminAnalytics = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      
      {/* Revenue per Vendor */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Revenue per Vendor (Past 30 Days)</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <XAxis dataKey="vendor" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#1976D2" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Top 5 Products by Sales */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Top 5 Products by Sales</Typography>
            {topProducts.map((product) => (
              <Typography key={product.id}>
                {product.name} - {product.sales} sales, ₹{product.revenue}
              </Typography>
            ))}
          </CardContent>
        </Card>
      </Grid>

      {/* Average Order Value */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Average Order Value</Typography>
            <Typography variant="h4" color="primary">
              ₹{avgOrderValue}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
};

export default AdminAnalytics;
