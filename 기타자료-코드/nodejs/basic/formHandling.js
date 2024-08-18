const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/submit-form">
            <input type="text" name="name" placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/submit-form', (req, res) => {
    res.send(`Name: ${req.body.name}`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
