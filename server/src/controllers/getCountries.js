const { Op } = require("sequelize");
const { Country, Activity } = require("../db.js");



const getCountries = async (req, res) => {
  const {name} = req.query
    try {
      if (name){
        const countries = await Country.findAll({where:  { name: { [Op.iLike]: `${name}%`} }})
        res.status(200).json(countries)
      }
      else {
      const countries = await Country.findAll({
        include: Activity
      });
      res.status(200).json(countries);
     } 
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los países.' });
    }
  };

module.exports = { getCountries }