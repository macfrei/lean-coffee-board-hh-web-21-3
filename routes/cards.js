const express = require('express')
const cards = require('../cards.json')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send(cards)
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const card = cards.find(card => card.id === id)
  card ? res.send(card) : next()
})

router.post('/', (req, res, next) => {
  const newCard = req.body
  cards.push(newCard)
  res.status(201).json(newCard)
})

router.patch('/:id', (req, res, next) => {
  const { id } = req.params

  const index = cards.findIndex(card => card.id === id)
  const card = cards[index]
  const updatedCard = { ...card, ...req.body }
  cards.splice(index, 1, updatedCard)

  card ? res.status(200).json(updatedCard) : next()
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  cards.filter(card => card.id !== id)
  res.sendStatus(204)
})

module.exports = router
