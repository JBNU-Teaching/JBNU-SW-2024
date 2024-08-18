// 오류 발생 코드
let data = [];

function addData() {
    data.push(new Array(1000000).fill('Memory Leak'));
}

setInterval(addData, 1000);

// 수정된 코드: 이벤트 리스너 제거 및 데이터 정리
let data = [];
let intervalId;

function addData() {
    if (data.length > 10) {
        data.shift();  // 오래된 데이터 제거
    }
    data.push(new Array(1000000).fill('Memory Leak'));
}

intervalId = setInterval(addData, 1000);

// 메모리 누수 방지를 위해 일정 시간 후 interval 해제
setTimeout(() => clearInterval(intervalId), 60000);  // 1분 후 해제
