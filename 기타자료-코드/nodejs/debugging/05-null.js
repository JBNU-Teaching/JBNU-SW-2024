// 오류 발생 코드
function printLength(str) {
    console.log(str.length);  // TypeError: Cannot read property 'length' of null
}

printLength(null);

// 수정된 코드
function printLength(str) {
    if (str) {
        console.log(str.length);
    } else {
        console.log('Invalid string');
    }
}

printLength(null);  // 출력: Invalid string
