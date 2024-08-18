const express = require('express');
const app = express();

// 일반적인 라우트 핸들러
app.get('/', (req, res) => {
    throw new Error('Something went wrong');
});

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
