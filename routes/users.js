const express = require('express')
const users = require('../users.json')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send(users)
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const user = users.find(user => user.id === id)
  user ? res.send(user) : next()
})

router.post('/', (req, res, next) => {
  const newUser = req.body
  users.push(newUser)
  res.status(201).json(newUser)
})

router.patch('/:id', (req, res, next) => {
  const { id } = req.params

  const index = users.findIndex(user => user.id === id)
  const user = users[index]
  const updatedUser = { ...user, ...req.body }
  users.splice(index, 1, updatedUser)

  user ? res.status(200).json(updatedUser) : next()
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params

  const deletedUser = users.find(user => user.id === id)
  users.filter(user => user.id !== id)

  deletedUser ? res.status(204) : next()
})

module.exports = router
