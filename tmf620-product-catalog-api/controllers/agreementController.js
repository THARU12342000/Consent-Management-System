const Agreement = require('../models/Agreement');

// Create a new agreement
exports.createAgreement = async (req, res) => {
  try {
    const agreement = new Agreement(req.body);
    await agreement.save();
    res.status(201).json(agreement);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all agreements
exports.getAgreements = async (req, res) => {
  try {
    const agreements = await Agreement.find();
    res.json(agreements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single agreement by ID
exports.getAgreementById = async (req, res) => {
  try {
    const agreement = await Agreement.findById(req.params.id);
    if (!agreement) return res.status(404).json({ error: 'Agreement not found' });
    res.json(agreement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an agreement by ID
exports.updateAgreement = async (req, res) => {
  try {
    const agreement = await Agreement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!agreement) return res.status(404).json({ error: 'Agreement not found' });
    res.json(agreement);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an agreement by ID
exports.deleteAgreement = async (req, res) => {
  try {
    const agreement = await Agreement.findByIdAndDelete(req.params.id);
    if (!agreement) return res.status(404).json({ error: 'Agreement not found' });
    res.json({ message: 'Agreement deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 