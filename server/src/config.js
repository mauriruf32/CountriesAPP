const DB_USER =  process.env.DB_USER || "postgres"
const DB_PASSWORD =  process.env.DB_PASSWORD || "GzJxyeLKGmZbkxkmGIfmHPPwRXcQURjo"
const DB_HOST = process.env.DB_HOST || "viaduct.proxy.rlwy.net"
const DB_PORT = process.env.DB_PORT || 29175
const DB_NAME = process.env.DB_NAME || "railway"




const DATABASE_URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

module.exports = {
    DATABASE_URL,
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_USER
}