const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('DOB home page')
})

router.post('/add',(req, res) => {
    const dob = req.body.dob;
    res.send(`DOB: ${dob}`)
})
module.exports = router