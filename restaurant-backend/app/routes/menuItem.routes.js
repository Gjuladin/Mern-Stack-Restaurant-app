const menuItemController = require("../controllers/menuItem.controller");

module.exports = function (app) {
  // Create a new menu item
  app.post("/api/menuItems", menuItemController.createMenuItem);

  // Get all menu items
  app.get("/api/menuItems", menuItemController.getMenuItems);

  // Get a menu item by ID
  app.get("/api/menuItems/:id", menuItemController.getMenuItemById);

  // Update a menu item by ID
  app.put("/api/menuItems/:id", menuItemController.updateMenuItemById);

  // Delete a menu item by ID
  app.delete("/api/menuItems/:id", menuItemController.deleteMenuItemById);
};
