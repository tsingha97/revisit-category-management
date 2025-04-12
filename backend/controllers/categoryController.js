const Category = require("../models/Category");

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    return res.json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error." });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { name, itemCount } = req.body;
    const imageUrl = req.body.imageUrl || "";

    // Basic validations
    if (!name) {
      return res.status(400).json({ message: "Category name is required." });
    }

    const newCategory = await Category.create({
      name,
      itemCount: itemCount || 0,
      imageUrl,
    });

    return res
      .status(201)
      .json({ message: "Category created.", category: newCategory });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error." });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, itemCount, imageUrl } = req.body;

    // Find the category by ID and update it with the new data
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name, itemCount, imageUrl },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      message: "Category updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ message: "Server error updating category" });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ message: "Server error fetching category" });
  }
};
