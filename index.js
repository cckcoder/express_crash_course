const express = require('express')

const app = express()

app.get('/apis/restaurants', (req, res) => {
  res.send('GET API')
})

app.get('/apis/restaurants/:id', (req, res) => {
  res.send('GET ONE API')
})

app.post('/apis/restaurants', (req, res) => {
  res.send('POST API')
})

app.put('/apis/restaurants/:id', (req, res) => {
  res.send('PUT API')
})

app.delete('/apis/restaurants/:id', (req, res) => {
  res.send('DELETE API')
})

app.listen(3000, () => {
  console.log('Listening to port 3000')
})
