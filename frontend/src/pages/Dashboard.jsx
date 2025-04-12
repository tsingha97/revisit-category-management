import React, { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import axiosInstance from "../api/axiosInstance";
import CategoryCard from "../components/CategoryCard";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosInstance.get("/categories");
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Filter the categories based on the search term
  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout onSearch={setSearchTerm}>
      {/* Page Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>

      {/* Grid of category cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <CategoryCard key={cat._id} category={cat} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No categories found.
          </p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
