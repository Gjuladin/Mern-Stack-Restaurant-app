const db = require("../models");
const categoryModel = db.category;

exports.createCategory = async (req, res) => {
  try {
    const category = new categoryModel(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a category by ID
exports.updateCategoryById = async (req, res) => {
  try {
    const category = await categoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a category by ID
exports.deleteCategoryById = async (req, res) => {
  try {
    const category = await categoryModel.findByIdAndRemove(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
