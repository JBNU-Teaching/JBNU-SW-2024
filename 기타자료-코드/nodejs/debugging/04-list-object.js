// 오류 발생 코드
let numbers = [1, 2, 3];
console.log(numbers[3]);  // undefined, 인덱스 초과

let person = { name: 'Bob' };
console.log(person.age);  // undefined, 키가 존재하지 않음

// 디버깅 방법: 값이 없는 경우 기본 값을 설정
console.log(numbers[3] || 'No value');  // 출력: No value
console.log(person.age || 'Age not provided');  // 출력: Age not provided
