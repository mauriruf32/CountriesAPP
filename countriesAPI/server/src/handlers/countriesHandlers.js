const {Country} = require("../db");
const {getCountryById, getAllCountries, searchCountryByName} = require("../controllers/countriesController");



const getCountriesHandler = async (req, res) => {
    const { name } = req.query;

    const results = name ? await searchCountryByName (name): await getAllCountries();

    res.status(200).json(results);
};

const getCountryByIdHandler = async (req, res) => {
    const { id } = req.params;
    
    const source = isNaN(id) ? "BDD" : "API";

    try {
        const country = await getCountryById(id, source);
        res.status(200).json(country);
    }  catch (error) {
        res.status(400).json({error: error.message});
    }
};

// const getCountryByNameHandler = (req, res) => {
//     res.send("Detalle del pais con nombre tanto");
// };

module.exports ={
    getCountriesHandler, 
    getCountryByIdHandler,
}