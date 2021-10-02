const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Hello World')
})

app.get('/aboutme', (req, res) => {
    res.send('About Me')
})

app.get('/projects', (req, res) => {
    res.send('Projects Page')
})

app.get('/services', (req, res) => {
    res.send('Services Page')
})

app.get('/contactme', (req, res) => {
    res.send('Contact Me')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})