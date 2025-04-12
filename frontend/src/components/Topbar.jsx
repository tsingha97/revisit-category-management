import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Topbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  // Logout handler clears token and navigates to login page
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-full h-16 bg-white flex items-center justify-between px-6 shadow">
      {/* Left: Search Bar */}
      <div className="relative w-1/3 max-w-sm">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </span>
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchChange}
          className="w-full pl-8 pr-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Right: User info & Add Category */}
      <div className="flex items-center space-x-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          onClick={() => navigate("/add-category")}
        >
          + Add Category
        </button>

        {/* Display user info / avatar */}
        <div className="flex items-center space-x-2">
          <img
            src="https://i.pravatar.cc/36?img=3"
            alt="User Avatar"
            className="h-9 w-9 rounded-full"
          />
          <span className="font-medium text-gray-700">User</span>
          <button
            onClick={logoutHandler}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
