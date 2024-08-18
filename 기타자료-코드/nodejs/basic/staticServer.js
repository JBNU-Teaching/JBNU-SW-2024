const express = require('express');
const app = express();

// 정적 파일 제공
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome to the Static Server!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
