const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const path = "todos.json"
function readData() {
    const data = fs.readFileSync(path)
    if (data) {
        return JSON.parse(data)
    }
    return []
}
function saveData(data) {
    fs.writeFileSync(path, JSON.stringify(data));
}
// let todos = []
app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/todo', (req, res) => {
    let todos = readData()
    res.json(todos)
})
app.get('/todo/:id', (req, res) => {
    let todos = readData()
    let ind = todos.findIndex((todo) => todo.id == req.params.id)
    if (ind == -1) {
        return res.status(401).json({
            messgae: "Data not found with id :" + req.params.id
        })
    }
    res.json(todos[ind])
})
app.post('/todo', (req, res) => {
    let todos = readData()
    const title = req.body.title;
    const newTodo = {
        id: Date.now(),
        title: title,
        isCompleted: false
    }
    todos.push(newTodo)
    saveData(todos)
    res.json(newTodo)
})
app.put('/todo/:id', (req, res) => {
    let todos = readData()
    let ind = todos.findIndex((todo) => todo.id == req.params.id)
    if (ind == -1) {
        return res.status(401).json({
            messgae: "Data not found with id :" + req.params.id
        })
    }
    todos[ind].title = req.body.title
    res.status(201).json({
        messgae: "Data updated with id :" + req.params.id
    })
    saveData(todos)
    res.json(newTodo)
})
app.delete('/todo/:id', (req, res) => {
    let todos = readData()
    let ind = todos.findIndex((todo) => todo.id == req.params.id)
    if (ind == -1) {
        return res.status(401).json({
            messgae: "Data not found with id :" + req.params.id
        })
    }
    todos = todos.filter((todo) => todo.id != req.params.id)
    res.json({
        message: "Data deleted"
    })
    saveData(todos)
    res.json(newTodo)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
