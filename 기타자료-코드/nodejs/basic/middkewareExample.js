const express = require('express');
const app = express();

// 사용자 정의 미들웨어
app.use((req, res, next) => {
    console.log('mid Time:', Date.now());
    next();
});

app.get('/', (req, res) => {
    console.log('app Time:', Date.now());
    res.send('Hello, World!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
