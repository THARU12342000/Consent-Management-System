const catalogs = require('../data/productCatalogs.json');

exports.getAllCatalogs = (req, res) => res.json(catalogs);

exports.getCatalogById = (req, res) => {
  const catalog = catalogs.find(c => c.id === req.params.id);
  if (catalog) res.json(catalog);
  else res.status(404).json({ message: "Catalog not found" });
};

exports.createCatalog = (req, res) => {
  const newCatalog = { id: String(Date.now()), ...req.body };
  catalogs.push(newCatalog);
  res.status(201).json(newCatalog);
};

exports.updateCatalog = (req, res) => {
  const idx = catalogs.findIndex(c => c.id === req.params.id);
  if (idx !== -1) {
    catalogs[idx] = { ...catalogs[idx], ...req.body };
    res.json(catalogs[idx]);
  } else {
    res.status(404).json({ message: "Catalog not found" });
  }
};

exports.deleteCatalog = (req, res) => {
  const idx = catalogs.findIndex(c => c.id === req.params.id);
  if (idx !== -1) {
    catalogs.splice(idx, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Catalog not found" });
  }
};
