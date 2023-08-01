const { Router } = require("express");

const activitiesRouter = Router();

const {
    getActivitiesHandler, createActivitiesHandler,
} = require("../handlers/activitiesHandlers");

activitiesRouter.post("/", createActivitiesHandler);
activitiesRouter.get("/", getActivitiesHandler);



module.exports = activitiesRouter;