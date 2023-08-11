const { Router } = require("express");
const router = Router();

module.exports = router;

const {getActivities} = require("../controllers/getActivities");
const {getCountries} = require("../controllers/getCountries");
const {postActivities} = require("../controllers/postActivities");
const {getCountriesByName} = require("../controllers/getCountriesByName");
const {getCountriesById} = require("../controllers/getCountriesById");


router.get("/countries/name", getCountriesByName);
router.get("/countries/:id", getCountriesById);
router.get("/activities", getActivities);
router.get("/countries", getCountries);

router.post("/create", postActivities);