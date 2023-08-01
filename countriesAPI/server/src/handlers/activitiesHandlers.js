const { createActivity, getAllActivities } = require("../controllers/activitiesController");


const getActivitiesHandler = async (req, res) => {

    const results =  await getAllActivities();

    res.status(200).json(results);
};

const createActivitiesHandler = async (req, res) => {
    const { id, name, difficulty, duration, season } = req.body;
    try {
        const newActivity = await createActivity(id, name, difficulty, duration, season);
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

};



module.exports = {
    getActivitiesHandler,
    createActivitiesHandler,
};