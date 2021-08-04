const express = require('express')

const restaurantRouter = require('./routes/restaurants.js')
const userprofilesRouter = require('./routes/userprofiles.js')

//const logger = require('./middleware/logger')

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Custom Middleware
//app.use(logger)


// Routers
app.use('/apis/restaurants', restaurantRouter)
app.use('/apis/userprofiles', userprofilesRouter)


app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express</h1>')
})

app.listen(3000, () => {
  console.log('Listening to port 3000')
})
