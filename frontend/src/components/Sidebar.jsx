import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeIcon,
  ShoppingBagIcon,
  UsersIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline"; // Just examples from Heroicons

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-[#090e28] text-white flex flex-col">
      {/* Brand / Logo */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-xl font-bold">fastcart</h1>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center w-full text-left px-3 py-2 rounded hover:bg-[#1f234b] transition-colors"
        >
          <HomeIcon className="h-5 w-5 mr-2" />
          <span>Dashboard</span>
        </button>
        <button className="flex items-center w-full text-left px-3 py-2 rounded hover:bg-[#1f234b] transition-colors">
          <ShoppingBagIcon className="h-5 w-5 mr-2" />
          <span>Orders</span>
        </button>
        <button className="flex items-center w-full text-left px-3 py-2 rounded hover:bg-[#1f234b] transition-colors">
          <UsersIcon className="h-5 w-5 mr-2" />
          <span>Customers</span>
        </button>
        {/* Add more as needed */}
      </nav>

      {/* Settings / Footer Section */}
      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center w-full text-left px-3 py-2 rounded hover:bg-[#1f234b] transition-colors">
          <Cog6ToothIcon className="h-5 w-5 mr-2" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
