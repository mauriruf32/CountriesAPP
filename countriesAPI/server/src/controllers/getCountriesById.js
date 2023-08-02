const { Country, Activity } = require('../db.js')
const { Op } = require('sequelize');

const URL = "http://localhost:5000/countries"


const getCountriesById = async (req, res) => {
  const { id } = req.params;
    try {
      const country = await Country.findOne({
        where: { id: id },
        include: Activity,
      });
  
      if (country) {
        res.json(country);
      } else {
        res.status(404).json({ error: 'País no enntrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el país.' });
    }
  };

  module.exports = {getCountriesById}