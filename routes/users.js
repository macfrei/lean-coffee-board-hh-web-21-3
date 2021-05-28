const express = require('express')
const users = require('../users.json')
const router = express.Router()

router.get('/', (request, response) => {
  response.send(users)
})

router.get('/:id', (request, response) => {
  const { id } = request.params
  const user = users.find(user => user.id === id)
  response.send(user)
})

router.post('/', (request, response) => {
  const newUser = request.body
  users.push(newUser)
  response.status(201).json(newUser)
})

module.exports = router
