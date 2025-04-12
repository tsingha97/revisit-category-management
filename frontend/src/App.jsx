import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddCategory from "./pages/AddCategory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditCategory from "./pages/EditCategory";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-category"
          element={
            <ProtectedRoute>
              <AddCategory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-category/:id"
          element={
            <ProtectedRoute>
              <EditCategory />
            </ProtectedRoute>
          }
        />

        {/* Default redirect */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
