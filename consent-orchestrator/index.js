const express = require('express');
const app = express();
const consentRoutes = require('./routes/consentRoutes');

app.use(express.json());
app.use('/api/consent', consentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Orchestrator running on port ${PORT}`));
