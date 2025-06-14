const express = require('express');
const router = express.Router();
const productOfferingController = require('../controllers/productOfferingController');

router.get('/', productOfferingController.getAllOfferings);
router.get('/:id', productOfferingController.getOfferingById);
router.post('/', productOfferingController.createOffering);
router.patch('/:id', productOfferingController.updateOffering);
router.delete('/:id', productOfferingController.deleteOffering);

module.exports = router;
