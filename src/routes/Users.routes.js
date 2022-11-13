const express = require('express')
const {User} = require('../db')

const router = express.Router()




//Create user POST
/**
 *  @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the user name
 *        last_name:
 *          type: string
 *          description: the user last_name
 *        age:
 *          type: integer
 *          description: the user age
 *        email:
 *          type: string
 *          description: the user email
 *      required:
 *          - name
 *          - last_name
 *          - age
 *          - email
 *      example:
 *          name: Daniel
 *          last_name: Lopez
 *          age : 30
 *          email: danielLopez@gamil.com
 */

/**
 * @swagger
 * /usersCreate:
 *  post:
 *   sumary: create a new user
 *   tags: [User]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *        schema:
 *          type: object
 *          $ref: '#/components/schemas/User'
 *   responses:
 *    200:
 *      description: new user created!
 * 
 * 
 */
router.post('/usersCreate', async (req, res) =>{
  try {
    const { name, last_name, age, email } = req.body;
    const userCreate = await User.create({ name, last_name, age, email })
    res.status(201).json(userCreate)
  } catch (error) {
    return res.status(500).send('Ocurrio un error')
  }
})



//findAll user GET
/**
 * @swagger
 * /users:
 *  get:
 *    sumary: return all users
 *    tags: [User]
 *    responses:
 *      200:
 *        description: all users
 *        contents:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'  
 */
router.get('/users', async (req, res) =>{
  try {
    const users = await User.findAll()
    res.status(200).send(users)
  } catch (error) {
    return res.status(500).send('Ocurrio un error')
  }
})



// Delete user DELETE

/**
 * @swagger
 * /user/{id}:
 *  delete:
 *    sumary: delete a user
 *    tags: [User]
 *    parameters:
 *      - in : path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *          description: the user id
 *    responses:
 *      200:
 *        description: user deleted
 *      404:
 *        description: user not found
 */
  router.delete('/user/:id', async (req, res) => {
      try {
        const { id } = req.params
        const user = await User.findByPk(id)
        await user.destroy()
        res.status(200).send(user)
      } catch (error) {
        return res.status(500).send('Ocurrio un error')
      }
  })




  //Update user PUT

  /**
 * @swagger
 * /userUpdate/{id}:
 *  put:
 *    sumary: update a user
 *    tags: [User]
 *    parameters:
 *      - in : path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *          description: the user id
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *        schema:
 *          type: object
 *          $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: user update
 *      404:
 *        description: user not found
 */
  router.put('/userUpdate/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name, last_name, age, email } = req.body
      const userUpdate = await User.findByPk(id)
      userUpdate.name = name
      userUpdate.last_name = last_name
      userUpdate.age = age
      userUpdate.email = email
      userUpdate.save()
      res.status(200).send(userUpdate)
    } catch (error) {
      return res.status(500).send('Ocurrio un error')
    }
  })



module.exports = router