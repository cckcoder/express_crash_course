const express = require('express')
const router = express.Router()

const restaurants = require('../data')
let currentRestaurant = 5

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
  currentRestaurant += 1
  const newRestaurant = {
    id: currentRestaurant,
    ...req.body
  }
  restaurants.push(newRestaurant)
  res.json(restaurants)
})

router.put('/:id', (req, res) => {
  const restaurantId = Number.parseInt(req.params.id, 10)
  const restaurantIndex = restaurants.findIndex(
    (restaurant) => restaurant.id === restaurantId
  )
  const updateRestaurant = {
    id: restaurantId,
    ...req.body
  }
  restaurants[restaurantIndex] = updateRestaurant

  res.json(updateRestaurant)
})

router.delete('/:id', (req, res) => {
  const restaurantId = Number.parseInt(req.params.id, 10)
  const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === restaurantId)
  restaurants.splice(restaurantIndex, 1)
  res.sendStatus(204) // Successfull but not return enything.
})

module.exports = router
