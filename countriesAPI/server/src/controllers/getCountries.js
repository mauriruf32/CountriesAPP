const { Country } = require("../db.js");

const getCountries = async (req, res) => {
    try {
      const countries = await Country.findAll();
      res.json(countries);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los países.' });
    }
  };

module.exports = getCountries;