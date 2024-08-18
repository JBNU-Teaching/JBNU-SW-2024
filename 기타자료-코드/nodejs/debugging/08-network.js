// 오류 발생 코드
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// 수정된 코드: 오류 처리 및 상태 코드 확인 추가
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error.message));
