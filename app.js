const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello This a Node app sample!')
})

app.get('/get-user', (req, res) => {
  res.send({
    name: "ishan",
    age: 32,
    id: 1
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})