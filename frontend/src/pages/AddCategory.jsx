import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import axiosInstance from "../api/axiosInstance";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [itemCount, setItemCount] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const { data } = await axiosInstance.post("/categories", {
        name,
        itemCount: parseInt(itemCount, 10) || 0,
        imageUrl,
      });
      setMessage(data.message);
      setName("");
      setItemCount("");
      setImageUrl("");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error adding category.");
    }
  };

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Category</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-lg"
      >
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-1">
            Category Name
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-1">
            Item Count
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={itemCount}
            onChange={(e) => setItemCount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-1">
            Image URL
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          Save
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center font-medium text-gray-700">{message}</p>
      )}
    </DashboardLayout>
  );
};

export default AddCategory;
