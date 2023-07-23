const { Country } = require("../db.js");


const getCountriesById = async (req, res) => {
    const idPais = req.params.idPais;
    try {
      const country = await Country.findOne({
        where: { ID: idPais },
        include: Activity,
      });
  
      if (country) {
        res.json(country);
      } else {
        res.status(404).json({ error: 'País no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el país.' });
    }
  };

  module.exports = getCountriesById;