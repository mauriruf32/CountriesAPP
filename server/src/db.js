require("dotenv").config();
const { Sequelize } = require("sequelize");
const ActivityModel = require("./models/Activity.js");
const CountryModel  = require("./models/Country.js");
const { DATABASE_URL } = require("./config.js");

const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize(`${DATABASE_URL}`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);



// Aca vendrian las relaciones
// Product.hasMany(Reviews);
CountryModel(sequelize);
ActivityModel(sequelize);

const { Country, Activity } = sequelize.models;



Country.belongsToMany(Activity, { through: 'CountryActivity' });
Activity.belongsToMany(Country, { through: 'CountryActivity' });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};