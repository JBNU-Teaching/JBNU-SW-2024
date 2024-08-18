// 오류 발생 코드
function slowFunction() {
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
        total += i;
    }
    return total;
}

console.time('slowFunction');
slowFunction();
console.timeEnd('slowFunction');

// 수정된 코드: 최적화된 코드로 대체
function optimizedFunction() {
    return (1000000000 * (1000000000 - 1)) / 2;  // 가우스 공식 사용
}

console.time('optimizedFunction');
optimizedFunction();
console.timeEnd('optimizedFunction');
