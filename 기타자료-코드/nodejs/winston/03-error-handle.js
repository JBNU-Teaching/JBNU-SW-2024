const fs = require('fs');


// 동기 코드
try {
    const data = fs.readFileSync('tmp.txt');
} catch (err) {
    console.error('Error reading file:', err);
}

// 비동기 코드 (Promise)
fs.promises.readFile('tmp.txt')
    .then(data => console.log(data))
    .catch(err => console.error('Error reading file:', err));

// 비동기 코드 (async/await)
async function readFile() {
    try {
        const data = await fs.promises.readFile('tmp.txt');
    } catch (err) {
        console.error('Error reading file:', err);
    }
}
