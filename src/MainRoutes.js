import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import { Layout } from "./components/Layout";
import UserDetails from "./components/UserDetails";
import UsersPage from "./components/UsersPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
