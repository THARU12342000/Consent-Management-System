const express = require('express');
const router = express.Router();
const productOfferingPriceController = require('../controllers/productOfferingPriceController');

console.log(productOfferingPriceController); // Add this for debugging

router.get('/', productOfferingPriceController.getAllPrices);
router.get('/:id', productOfferingPriceController.getPriceById);
router.post('/', productOfferingPriceController.createPrice);
router.patch('/:id', productOfferingPriceController.updatePrice);
router.delete('/:id', productOfferingPriceController.deletePrice);

module.exports = router;
