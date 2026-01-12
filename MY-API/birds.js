const express = require('express')
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
router.use(timeLog)
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

router.post('/add',(req, res) => {
    const name = req.body.name;
    res.send(`Welcome ${name}`)
})
module.exports = router
