import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Vendor/Products";
import Orders from "./pages/Customer/Orders";
import AdminAnalytics from "./pages/Admin/AdminAnalytics";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import CartPage from "./pages/Customer/CartPage";
import { CartProvider } from "./pages/Customer/CartContext";
import BuyNowPage from "./pages/Customer/BuyNowPage";
import VendorAnalysis from "./pages/Vendor/VendorAnalysis";



function App() {
  return (
    <Provider store={store}>
      <CartProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/cart" element={<CartPage />} /> */}
          <Route path="/vendor/analysis" element={<VendorAnalysis />} />
          

          {/* Customer Routes */}
          <Route
            path="/orders"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route path="/buy-now" element={
           <ProtectedRoute allowedRoles={["customer"]}><BuyNowPage /></ProtectedRoute>} />
          <Route path="/cart" element={
           <ProtectedRoute allowedRoles={["customer"]}><CartPage /></ProtectedRoute>} />

          {/* Vendor Routes */}
          <Route
            path="/vendor/products"
            element={
              <ProtectedRoute allowedRoles={["vendor"]}>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vendor/analysis"
            element={
              <ProtectedRoute allowedRoles={["vendor"]}>
                <VendorAnalysis />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/analytics"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminAnalytics />
              </ProtectedRoute>
            }
          />

          
        </Routes>
      </Router>

      </CartProvider>
    </Provider>
  );
}

export default App;
