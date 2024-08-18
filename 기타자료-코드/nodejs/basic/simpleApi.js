const express = require('express');
const app = express();

app.use(express.json());

let items = [];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.status(201).json({ message: 'Item added successfully', item: newItem });
});

app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    items[id] = req.body.item;
    res.json({ message: 'Item updated successfully', item: items[id] });
});

app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const deletedItem = items.splice(id, 1);
    res.json({ message: 'Item deleted successfully', item: deletedItem });
});

const port = 3000;
app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}/`);
});
