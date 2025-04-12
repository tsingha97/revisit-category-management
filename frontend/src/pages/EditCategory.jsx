import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import axiosInstance from "../api/axiosInstance";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Define state to store category data
  const [name, setName] = useState("");
  const [itemCount, setItemCount] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  // useEffect to fetch category details by ID on component mount
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        // Assume your backend returns a JSON object with the category details
        const { data } = await axiosInstance.get(`/categories/${id}`);
        // Pre-fill form state with fetched data
        setName(data.name);
        setItemCount(data.itemCount);
        setImageUrl(data.imageUrl);
      } catch (error) {
        console.error("Error fetching category details:", error);
      }
    };

    fetchCategory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const { data } = await axiosInstance.put(`/categories/${id}`, {
        name,
        itemCount: parseInt(itemCount, 10),
        imageUrl,
      });
      setMessage(data.message);
      // Optionally, navigate back to the dashboard after success
      // navigate("/dashboard");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error updating category.");
    }
  };

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Category</h2>
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
          Update Category
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center font-medium text-gray-700">{message}</p>
      )}
    </DashboardLayout>
  );
};

export default EditCategory;
