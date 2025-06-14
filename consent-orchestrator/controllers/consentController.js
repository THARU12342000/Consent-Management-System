const apiClients = require('../services/apiClients');

// Example: handle full flow when placing an order and capturing consent
exports.handleConsentFlow = async (req, res) => {
  try {
    const { customer, productId } = req.body;

    // 1. Create or find customer
    const customerRes = await apiClients.createOrGetCustomer(customer);

    // 2. Get product details
    const productRes = await apiClients.getProductById(productId);
    const product = productRes.data;

    // 3. Check if consent is required
    let agreement = null;
    if (product.requiresConsent) {
      agreement = await apiClients.createAgreement({
        agreementType: product.requiredAgreementType,
        description: `Consent for ${product.name}`,
      });
    }

    // 4. Place order with or without consent
    const order = await apiClients.createOrder({
      customerId: customerRes.data.id,
      productId: product.id,
      consentCaptured: !!agreement,
      agreementId: agreement ? agreement.data.id : null,
    });

    res.status(200).json({ message: 'Consent flow completed', order: order.data });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Consent flow failed' });
  }
};
