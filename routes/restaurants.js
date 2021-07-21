const express = require('express')
const router = express.Router()

const restaurants = require('../data')

router.get('/', (req, res) => {
  res.json(restaurants)
})

router.get('/:id', (req, res) => {
  // req.params => it be type string.
  const restaurantId = Number.parseInt(req.params.id, 10)
  const restaurant = restaurants.find((restaurant) => restaurant.id == restaurantId)
  res.json(restaurant)
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST API')
})

router.put('/:id', (req, res) => {
  res.send('PUT API')
})

router.delete('/:id', (req, res) => {
  const restaurantId = Number.parseInt(req.params.id, 10)
  const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === restaurantId)
  restaurants.splice(restaurantIndex, 1)
  res.sendStatus(204) // Successfull but not return enything.
})

module.exports = router
