const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Set base path for the API
const BASE_URL = "/tmf-api/agreementManagement/v4";

// ✅ GET all agreements
app.get(`${BASE_URL}/agreement`, (req, res) => {
  res.json([
    {
      id: "40",
      name: "Moon",
      status: "Pending",
      agreementType: "commercial",
      agreementSpecification: {
        id: "1140",
        name: "Moon Agreement Template",
        href: `http://localhost:3002${BASE_URL}/agreementSpecification/1140`,
      },
      engagedParty: [
        {
          id: "500",
          name: "Happy Travellers",
          href: "https://localhost:3002/tmf-api/partyManagement/v4/organization/500",
          "@type": "Organization",
        },
      ],
    },
  ]);
});

// ✅ POST new agreement
app.post(`${BASE_URL}/agreement`, (req, res) => {
  const agreement = req.body;
  console.log("🔧 Agreement received:", agreement);

  agreement.id = "1000";
  agreement.href = `http://localhost:3002${BASE_URL}/agreement/${agreement.id}`;

  res.status(201).json(agreement);
});

// ✅ Run on a new port
const PORT = 3002;
app.listen(PORT, () => {
  console.log(
    `🚀 Agreement API running at http://localhost:${PORT}${BASE_URL}`
  );
});
