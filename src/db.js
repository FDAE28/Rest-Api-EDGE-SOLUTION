const Sequelize = require('sequelize')
const Usuario = require('./models/Users')
const { DB_PASS, DB_USER, DB_DATABASE, DB_HOST, DB_DIALECT } = require('./config')



const dataBase = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: false
})

Usuario(dataBase)

module.exports = {dataBase, ...dataBase.models};
