const express = require('express')

const restaurantRouter = require('./routes/restaurants.js')
const logger = require('./middleware/logger')

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Custom Middleware
app.use(logger)


// Routers
app.use('/apis/restaurants', restaurantRouter)

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express</h1>')
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening to port 3000')
})
