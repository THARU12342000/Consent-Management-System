const specs = require('../data/productSpecifications.json');

exports.getAllSpecifications = (req, res) => res.json(specs);

exports.getSpecificationById = (req, res) => {
  const spec = specs.find(s => s.id === req.params.id);
  if (spec) res.json(spec);
  else res.status(404).json({ message: "Specification not found" });
};

exports.createSpecification = (req, res) => {
  const newSpec = { id: String(Date.now()), ...req.body };
  specs.push(newSpec);
  res.status(201).json(newSpec);
};

exports.updateSpecification = (req, res) => {
  const idx = specs.findIndex(s => s.id === req.params.id);
  if (idx !== -1) {
    specs[idx] = { ...specs[idx], ...req.body };
    res.json(specs[idx]);
  } else {
    res.status(404).json({ message: "Specification not found" });
  }
};

exports.deleteSpecification = (req, res) => {
  const idx = specs.findIndex(s => s.id === req.params.id);
  if (idx !== -1) {
    specs.splice(idx, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Specification not found" });
  }
};
