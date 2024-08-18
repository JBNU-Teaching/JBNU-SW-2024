// 오류 발생 코드
function sayHello() {
    console.log(greeting);  // ReferenceError: greeting is not defined
}

sayHello();

// 수정된 코드
function sayHello() {
    const greeting = 'Hello, World!';
    console.log(greeting);  // 출력: Hello, World!
}

sayHello();
