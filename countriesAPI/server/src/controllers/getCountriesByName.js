const { Country } = require("../db.js");


const getCountriesByName = async (req, res) => {
    const nameQuery = req.query.name;
    try {
      const countries = await Country.findAll({
        where: {
          Nombre: {
            [Sequelize.Op.iLike]: `%${nameQuery}%`,
          },
        },
      });
  
      if (countries.length > 0) {
        res.json(countries);
      } else {
        res.status(404).json({ error: 'No se encontraron países con ese nombre.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al buscar países por nombre.' });
    }
  };
  
  module.exports = getCountriesByName;