const express = require('express')

const restaurantRouter = require('./routes/restaurants.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routers
app.use('/apis/restaurants', restaurantRouter)

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express</h1>')
})

app.listen(3000, () => {
  console.log('Listening to port 3000')
})
