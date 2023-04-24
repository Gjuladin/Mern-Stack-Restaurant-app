const db = require("../models");
const menuItemModel = db.menuItem;
// Create a new menu item
async function createMenuItem(req, res) {
  try {
    const { name, description, price, id_category } = req.body;
    const menuItem = await menuItemModel.create({
      name,
      description,
      price,
      id_category,
    });
    res.status(201).json({ menuItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not create menu item" });
  }
}

// Get all menu items
async function getMenuItems(req, res) {
  try {
    const menuItems = await menuItemModel
      .find()
      .populate("id_category", "name");
    res.json({ menuItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not get menu items" });
  }
}

// Get a menu item by ID
async function getMenuItemById(req, res) {
  try {
    const { id } = req.params;
    const menuItem = await menuItemModel
      .findById(id)
      .populate("id_category", "name");
    if (!menuItem) {
      return res.status(404).json({ error: "Menu item not found" });
    }
    res.json({ menuItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not get menu item" });
  }
}

// Update a menu item by ID
async function updateMenuItemById(req, res) {
  try {
    const { id } = req.params;
    const { name, description, price, id_category } = req.body;
    const menuItem = await menuItemModel
      .findByIdAndUpdate(
        id,
        { name, description, price, id_category },
        { new: true }
      )
      .populate("id_category", "name");
    if (!menuItem) {
      return res.status(404).json({ error: "Menu item not found" });
    }
    res.json({ menuItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not update menu item" });
  }
}

// Delete a menu item by ID
async function deleteMenuItemById(req, res) {
  try {
    const { id } = req.params;
    const menuItem = await menuItemModel
      .findByIdAndDelete(id)
      .populate("id_category", "name");
    if (!menuItem) {
      return res.status(404).json({ error: "Menu item not found" });
    }
    res.json({ message: "Menu item deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not delete menu item" });
  }
}

module.exports = {
  createMenuItem,
  getMenuItems,
  getMenuItemById,
  updateMenuItemById,
  deleteMenuItemById,
};
