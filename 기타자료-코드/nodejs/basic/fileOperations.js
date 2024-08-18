const fs = require('fs');

// 파일 쓰기
fs.writeFile('example.txt', 'This is an example text.', (err) => {
    if (err) throw err;
    console.log('File has been saved!');

    // 파일 읽기
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);
    });
});
