const { Router } = require("express");
const router = Router();

module.exports = router;

const getActivities = require("../controllers/getActivities");
const getCountries = require("../controllers/getCountries");
const postActivities = require("../controllers/postActivities");
const getCountriesByName = require("../controllers/getCountriesByName");
const getCountriesById = require("../controllers/getCountriesById");
const { Activity, Country, conn } = require("../db");


router.get("/countries/:idPais", getCountriesById);
router.get("/activities", getActivities);
router.get("/countries", getCountries);
router.get("/countries/name", getCountriesByName);
router.post("/activities", postActivities);