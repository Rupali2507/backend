const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Hello world')
  })
app.get('/twitter', (req, res) => {
  res.send('rupali.com')
})
app.get('/login', (req, res) => {
    res.send('login at my website')
  })
app.get('/github', (req, res) => {
    res.send('rupali2507')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})