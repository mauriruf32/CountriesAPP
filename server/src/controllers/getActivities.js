const { Activity, Country } = require("../db.js");

const getActivities = async (req, res) => {
    try {
      const activities = await Activity.findAll({
        include: Country,
      });
      res.status(200).json(activities);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las actividades turísticas.' });
    }
  };

  module.exports = {getActivities}