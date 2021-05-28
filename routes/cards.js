const express = require('express')
const cards = require('../cards.json')
const router = express.Router()

router.get('/', (request, response, next) => {
  response.send(cards)
})

router.get('/:id', (request, response, next) => {
  const { id } = request.params
  const card = cards.find(card => card.id === id)
  card ? response.send(card) : next()
})

router.post('/', (request, response, next) => {
  const newCard = request.body
  cards.push(newCard)
  response.status(201).json(newCard)
})

router.patch('/:id', (request, response, next) => {
  const { id } = request.params

  const index = cards.findIndex(card => card.id === id)
  const card = cards[index]
  const updatedCard = { ...card, ...request.body }
  cards.splice(index, 1, updatedCard)

  card ? response.status(200).json(updatedCard) : next()
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  cards.filter(card => card.id !== id)
  res.sendStatus(204)
})

module.exports = router
