const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  getCategories,
  createCategory,
  updateCategory,
  getCategoryById,
} = require("../controllers/categoryController");

// Get all categories
router.get("/", authMiddleware, getCategories);

// Get a single category by ID
router.get("/:id", authMiddleware, getCategoryById);

// Create new category
router.post("/", authMiddleware, createCategory);

// Update existing category
router.put("/:id", authMiddleware, updateCategory);

module.exports = router;
