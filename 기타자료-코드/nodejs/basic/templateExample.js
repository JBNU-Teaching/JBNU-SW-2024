const express = require('express');
const app = express();

app.set('views engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { title: 'Express', message: 'Hello there!' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
