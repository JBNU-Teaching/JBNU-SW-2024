const express = require('express');
const app = express();

// 기본 GET 요청 라우트
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

// GET 요청 라우트
app.get('/users', (req, res) => {
    res.send('GET request to the users page');
});

// POST 요청 라우트
app.post('/users', (req, res) => {
    res.send('POST request to the users page');
});

// 동적 라우팅
app.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
