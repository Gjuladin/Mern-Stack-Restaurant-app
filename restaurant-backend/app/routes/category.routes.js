const categoryController = require("../controllers/category.controller");

module.exports = function (app) {
  // Create a new menu item
  app.post("/api/categories", categoryController.createCategory);

  // Get all menu items
  app.get("/api/categories", categoryController.getCategories);

  // Get a menu item by ID
  app.get("/api/categories/:id", categoryController.getCategoryById);

  // Update a menu item by ID
  app.put("/api/categories/:id", categoryController.updateCategoryById);

  // Delete a menu item by ID
  app.delete("/api/categories/:id", categoryController.deleteCategoryById);
};
