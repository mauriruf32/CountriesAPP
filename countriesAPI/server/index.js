const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const { Country } = require('./src/db');
const URL = 'http://localhost:5000/countries';

const countriesToDB = async ()=>{
  try {
    const response = await axios.get(URL);
    const countriesData = response.data;

    if(!countriesData) throw new Error('La lista está vacía');
    let countriesArr = [];
    
    await countriesData.map(async (country)=>{
      const newCountries = {
        id: country.cioc || country.cca3,
        name: country.name.common,
        flag: country.flags.png,
        continent: country.continents[0],
        capital: country.capital || 'Not found',
        subregion: country.subregion || 'Not found',
        area: country.area,
        population: country.population
      }
      countriesArr.push(newCountries)
    })
    await Country.bulkCreate(countriesArr)
    console.log(`La Base de Datos actualizada con ${countriesData.length} países`);
  } catch (error) {
    console.log(error);
  }
}

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  countriesToDB()
})
}).catch(error => console.error(error))
