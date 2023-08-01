const { Router } = require("express");
const countriesRouter = Router();
const {
    getCountriesHandler, getCountryByIdHandler, getCountryByNameHandler
} = require("../handlers/countriesHandlers");

countriesRouter.get("/", getCountriesHandler);
countriesRouter.get("/:id", getCountryByIdHandler);
// countriesRouter.get("?name=", getCountryByNameHandler); 



module.exports = countriesRouter;