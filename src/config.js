const { config } = require('dotenv')

config()

const PORT = process.env.PORT || 3001
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_DATABASE = process.env.DB_DATABASE
const DB_DIALECT = process.env.DB_DIALECT

module.exports = {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_DATABASE,
  DB_DIALECT
}