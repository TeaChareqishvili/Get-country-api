// /api/countries.js
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
