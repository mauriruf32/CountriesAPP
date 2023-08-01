const {Country} = require("../db.js");
const axios = require ("axios");
const { Op } = require('sequelize');


const getCountryById = async (id, source) =>{
    const country = source === "API" ?
        (await axios.get(`http://localhost:5000/countries/${id}`)).data
        : await Country.findByPk(id);
    
    return country;
};

const getAllCountries = async () => {

    const databaseCountries = await Country.findAll();

    const apiCountries = (
        await axios.get(`http://localhost:5000/countries`)
    ).data;

    const results = [...databaseCountries, ...apiCountries];

    return results;
};

const searchCountryByName = async (name) => {
    const databaseCountries = await Country.findAll({where:{name: name}});

    const apiCountries = (
        await axios.get(`http://localhost:5000/countries`)
    ).data;

    const filteredApi = apiCountries.filter((country) => country.name === name);

    return [...filteredApi, ...databaseCountries];

};


module.exports = { getCountryById, getAllCountries, searchCountryByName };

// const URL = "http://localhost:5000/countries"

// const getAllCountries = async (req, res) => {
//     const { name } = req.query //se guarda en la variable {name} lo que llegue por query (si no llega nada, será 'undefined')
//     try {
//         if (name){ //se evalúa si la variable {name} tiene algo, o si es 'undefined'
//             const countries = await Country.findAll({where: { name: { [Op.iLike]: `${name}%`} }})
//             res.status(200).json(countries) // si tiene algo, entonces va a traer los países que coincidan con el query
//         }
//         else{
//             const countries = await Country.findAll()
//             res.status(200).json(countries) // si no tiene nada, entonces va a traer todos los países
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'No se pudo acceder a los países' });  
//     }
// }

