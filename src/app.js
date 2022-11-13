const express = require('express')
const morgan = require('morgan')
const userRoute = require('./routes/Users.routes')
const path = require('path')
const { config} = require('./config')



//swagger
const swaggerUi = require("swagger-ui-express")
const swaggerJdoc = require("swagger-jsdoc")
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node Sequelize API",
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: [`${path.join(__dirname, './routes/*.js')}`]
}



//settings
const app = express()


//middelwares
app.use(express.json())
app.use(morgan('dev'))
app.use('/api-user', swaggerUi.serve, swaggerUi.setup(swaggerJdoc(swaggerSpec)))


//use Routes
app.use(userRoute)




module.exports = app