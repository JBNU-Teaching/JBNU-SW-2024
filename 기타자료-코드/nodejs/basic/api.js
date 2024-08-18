const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let items = [];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = req.body.item;
    console.log('Adding new item:', newItem);
    items.push(newItem);
    res.status(201).json({ message: 'Item added successfully', item: newItem });
});

const port = 3000;
app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}/`);
});
