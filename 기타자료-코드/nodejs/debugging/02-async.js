// 오류 발생 코드
async function fetchData() {
    let data = await getData();  // getData 함수가 제대로 반환되지 않음
    console.log(data);
}

fetchData();

// 수정된 코드
async function fetchData() {
    try {
        let data = await getData();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
