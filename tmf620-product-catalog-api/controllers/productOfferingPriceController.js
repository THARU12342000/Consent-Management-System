// controllers/productOfferingPriceController.js

const prices = require('../data/productOfferingPrices.json');

const productOfferingPriceController = {
  getAllPrices: (req, res) => {
    res.json(prices);
  },

  getPriceById: (req, res) => {
    const price = prices.find(p => p.id === req.params.id);
    if (price) res.json(price);
    else res.status(404).json({ message: "Price not found" });
  },

  createPrice: (req, res) => {
    const newPrice = { id: String(Date.now()), ...req.body };
    prices.push(newPrice);
    res.status(201).json(newPrice);
  },

  updatePrice: (req, res) => {
    const idx = prices.findIndex(p => p.id === req.params.id);
    if (idx !== -1) {
      prices[idx] = { ...prices[idx], ...req.body };
      res.json(prices[idx]);
    } else {
      res.status(404).json({ message: "Price not found" });
    }
  },

  deletePrice: (req, res) => {
    const idx = prices.findIndex(p => p.id === req.params.id);
    if (idx !== -1) {
      prices.splice(idx, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Price not found" });
    }
  }
};

module.exports = productOfferingPriceController;
