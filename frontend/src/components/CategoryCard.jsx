import React, { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-white rounded-md shadow hover:shadow-lg transition-shadow cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Category image */}
      <img
        src={category.imageUrl || "https://via.placeholder.com/300x200"}
        alt={category.name}
        className="w-full h-48 object-cover rounded-t-md"
      />

      {/* Edit overlay on hover */}
      {hovered && (
        <div
          className="absolute top-4 right-4 bg-white px-2 py-1 rounded shadow flex items-center space-x-1"
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click if needed
            navigate(`/edit-category/${category._id}`);
          }}
        >
          <PencilIcon className="h-4 w-4 text-gray-600" />
          <span className="text-sm text-gray-600">Edit</span>
        </div>
      )}

      {/* Category details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
        <p className="text-gray-500">{category.itemCount} items</p>
      </div>
    </div>
  );
};

export default CategoryCard;
