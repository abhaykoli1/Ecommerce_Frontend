import React from "react";
import { Route, Routes } from "react-router-dom";
import { ShopLayout } from "./components/shop/layout";
import { LandingPage } from "./pages/shop/Landing";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import CheckAuth from "./components/common/check-auth";
import { ProfileDashboard } from "./components/shop/profile/profileDashboard";
import { ProfileLayout } from "./pages/shop/Profile";
import { UserProfile } from "./components/shop/profile/profile";
import Verify from "./pages/auth/verify";
import { EditProfile } from "./components/shop/profile/editProfile";
import AdminDashboard from "./pages/admin/adminDashboard";
import { AdminLayout } from "./components/admin/adminLayout";
import AdminProducts from "./pages/admin/catalog/products";
import AdminCategories from "./pages/admin/catalog/categories";
import AdminCoupon from "./pages/admin/catalog/coupon";
import NotFound from "./pages/not-found";
import UnauthPage from "./pages/unauth-page";
import useSessionTimeout from "./components/common/session";
import Customers from "./pages/admin/allUsers";
import AddProduct from "./components/admin/addProduct";

const App = () => {
  useSessionTimeout();

  return (
    <Routes>
      <Route path="/verify" element={<Verify />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/unauth-page" element={<UnauthPage />} />
      <Route
        path="/admin"
        element={
          <CheckAuth>
            <AdminLayout />
          </CheckAuth>
        }
      >
        <Route path="" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="add-Coupon" element={<AdminCoupon />} />
        <Route path="all-Users" element={<Customers />} />
        <Route path="add-products" element={<AddProduct />} />
      </Route>
      <Route
        path="/"
        element={
          <CheckAuth>
            <ShopLayout />
          </CheckAuth>
        }
      >
        <Route path="" element={<LandingPage />} />
        <Route path="/my" element={<ProfileLayout />}>
          <Route path="dashboard" element={<ProfileDashboard />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="profile-edit" element={<EditProfile />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
