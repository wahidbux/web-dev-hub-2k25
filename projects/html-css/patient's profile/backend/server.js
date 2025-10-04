const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

const doctors = JSON.parse(fs.readFileSync("./doctors.json", "utf8"));
const patients = JSON.parse(fs.readFileSync("./patients.json", "utf8"));

// Get doctors with filters
app.get("/doctors", (req, res) => {
  let filtered = [...doctors];
  const { location, specialty } = req.query;

  if (location) {
    filtered = filtered.filter(doc =>
      doc.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  if (specialty && specialty !== "All") {
    filtered = filtered.filter(doc => doc.specialty === specialty);
  }

  res.json(filtered);
});

// Get patient profile by ID
app.get("/patients/:id", (req, res) => {
  const patient = patients.find(p => p.id === Number(req.params.id));
  if (!patient) return res.status(404).json({ error: "Patient not found" });
  res.json(patient);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
