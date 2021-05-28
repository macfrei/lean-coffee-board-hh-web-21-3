const express = require('express')
const users = require('../users.json')
const router = express.Router()

router.get('/', (request, response, next) => {
  response.send(users)
})

router.get('/:id', (request, response, next) => {
  const { id } = request.params
  const user = users.find(user => user.id === id)
  user ? response.send(user) : next()
})

router.post('/', (request, response, next) => {
  const newUser = request.body
  users.push(newUser)
  response.status(201).json(newUser)
})

router.patch('/:id', (request, response, next) => {
  const { id } = request.params

  const index = users.findIndex(user => user.id === id)
  const user = users[index]
  const updatedUser = { ...user, ...request.body }
  users.splice(index, 1, updatedUser)

  user ? response.status(200).json(updatedUser) : next()
})

module.exports = router
