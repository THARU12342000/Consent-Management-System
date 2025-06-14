const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all origins (for dev)

app.use(express.json());

// your routes here...

app.listen(5000, () => {
  console.log('Consent Orchestrator running on port 5000');
});
