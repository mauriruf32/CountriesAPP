const { Activity } = require("../db.js");

const postActivities =  async (req, res) => {
    const { nombre, dificultad, duracionEnHoras, temporada, countries } = req.body;
    try {
      const activity = await Activity.create({
        nombre,
        dificultad,
        duracionEnHoras,
        temporada,
      });
  
      if (countries && countries.length > 0) {
        await activity.setCountries(countries);
      }
  
      res.status(201).json(activity);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la actividad turística.' });
    }
  };

  module.exports = postActivities;