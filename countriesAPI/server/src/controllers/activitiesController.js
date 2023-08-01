const { Activity } = require("../db");

const createActivity = async (id, name, difficulty, duration, season) => {
    return await Activity.create({ id, name, difficulty, duration, season })
}

const getAllActivities = async () => {

    const databaseActivities = await Activity.findAll();

    const results = [...databaseActivities];

    return results;
};

module.exports = { createActivity, getAllActivities };