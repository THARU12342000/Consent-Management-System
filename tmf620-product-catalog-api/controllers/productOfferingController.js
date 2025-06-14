const offerings = require('../data/productOfferings.json');

exports.getAllOfferings = (req, res) => res.json(offerings);

exports.getOfferingById = (req, res) => {
  const offering = offerings.find(o => o.id === req.params.id);
  if (offering) res.json(offering);
  else res.status(404).json({ message: "Offering not found" });
};

exports.createOffering = (req, res) => {
  const newOffering = { id: String(Date.now()), ...req.body };
  offerings.push(newOffering);
  res.status(201).json(newOffering);
};

exports.updateOffering = (req, res) => {
  const idx = offerings.findIndex(o => o.id === req.params.id);
  if (idx !== -1) {
    offerings[idx] = { ...offerings[idx], ...req.body };
    res.json(offerings[idx]);
  } else {
    res.status(404).json({ message: "Offering not found" });
  }
};

exports.deleteOffering = (req, res) => {
  const idx = offerings.findIndex(o => o.id === req.params.id);
  if (idx !== -1) {
    offerings.splice(idx, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Offering not found" });
  }
};
