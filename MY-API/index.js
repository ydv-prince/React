const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Hello World!"))
app.post('/', (req, res) => res.send("From post"))
app.put('/', (req, res) => res.send("From put"))
app.patch('/', (req, res) => res.send("From patch"))
app.delete('/', (req, res) => res.send("From delete"))
app.head('/', (req, res) => res.send("From head"))
app.get('/url', (req, res) => res.send("Welcome to RKU"))
app.get('/student', (req, res) => res.json({
    name: "Prince",
    city: "Rajkot",
    sem: "6th",
    div: "C",
    branch: "CE"
    })
)

app.get('/myname/:fname/:lname', (req, res) => res.send(
    `Welcome\n${req.params.fname} ${req.params.lname}`
))

app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// create end point for students ?
app.get('/students', (req, res) => res.send('From Students'))

// create end point which will start with s and ends with d
app.get('/s*d', (req, res) => {
  res.send('From S * D')
})

// create end point starting and ending f&d in between 1 or more fod are allows
app.get(/^\/fo*d$/, (req, res) => {
  res.send(`From Fod`);
});