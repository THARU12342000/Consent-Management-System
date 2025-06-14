const categories = require('../data/categories.json');

exports.getAllCategories = (req, res) => res.json(categories);

exports.getCategoryById = (req, res) => {
  const category = categories.find(cat => cat.id === req.params.id);
  if (category) res.json(category);
  else res.status(404).json({ message: "Category not found" });
};

exports.createCategory = (req, res) => {
  const newCategory = { id: String(Date.now()), ...req.body };
  categories.push(newCategory);
  res.status(201).json(newCategory);
};

exports.updateCategory = (req, res) => {
  const idx = categories.findIndex(cat => cat.id === req.params.id);
  if (idx !== -1) {
    categories[idx] = { ...categories[idx], ...req.body };
    res.json(categories[idx]);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};

exports.deleteCategory = (req, res) => {
  const idx = categories.findIndex(cat => cat.id === req.params.id);
  if (idx !== -1) {
    categories.splice(idx, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};
