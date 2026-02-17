const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors())

const PORT = 3001

// GET all users
app.get('/v1/users', (req, res) => {
    res.json({ message: "Get all users" });
});

// app.get("/", (req, res) => {
//     res.json({message: "Hello"})
// })

// GET single user
app.get('/v1/users/:id', (req, res) => {
    res.json({ message: `Get user with ID ${req.params.id}` });
});

// POST create user
app.post('/v1/users', (req, res) => {
    res.status(201).json({ message: "User created", data: req.body });
});

// PUT update user
app.put('/v1/users/:id', (req, res) => {
    res.json({ message: `User ${req.params.id} updated`, data: req.body });
});

// DELETE user
app.delete('/v1/users/:id', (req, res) => {
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
