const Privacy = require('../models/Privacy');

exports.setPreferences = async (req, res) => {
  try {
    const { customerId, preferences } = req.body;
    let privacy = await Privacy.findOneAndUpdate(
      { customerId },
      { preferences },
      { new: true, upsert: true }
    );
    res.status(200).json(privacy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPreferences = async (req, res) => {
  try {
    const privacy = await Privacy.findOne({ customerId: req.params.customerId });
    if (!privacy) return res.status(404).json({ error: 'Not found' });
    res.json(privacy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 