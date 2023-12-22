const { Country } = require("../db.js");
const { Op } = require('sequelize');


const getCountriesByName = async (req, res) => {
    const {name} = req.query;
    try {
      if (name){
      const countries = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` },
        }})
        res.status(200).json(countries);
      } 
      else {
        const countries = await Country.findAll()
        res.status(200).json(countries);
      }
    } catch (error) {
      res.status(500).json({ error: 'No se encontraron paises con ese nombre.' });
    }
  };
  
  module.exports = {getCountriesByName}