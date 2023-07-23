const { Activity } = require("../db.js");

const getActivities = async (req, res) => {
    try {
      const activities = await Activity.findAll();
      res.json(activities);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las actividades turísticas.' });
    }
  };

  module.exports = getActivities;