const { Activity, Country } = require("../db.js");

const postActivities =  async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    try {
      const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
        countries
      });
  
      if (countries && countries.length > 0) {
        const associatedCountries = await Country.findAll({
          where: { id: countries},
        });
        await newActivity.setCountries(associatedCountries);
      }
  
      res.status(201).json(newActivity);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la actividad turística.' });
    }
  };

  module.exports = {postActivities}