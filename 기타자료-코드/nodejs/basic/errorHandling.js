const express = require('express');
const app = express();

// 기본 라우트
app.get('/', (req, res) => {
    throw new Error('Test Error');
    res.send('Hello, World!');
});

// 404 에러 처리 미들웨어
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

// 일반 에러 처리 미들웨어
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


