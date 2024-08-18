// 오류 발생 코드
let user = {
    name: 'Alice',
    age: 25
};

user.getName();  // TypeError: user.getName is not a function

// 수정된 코드
let user = {
    name: 'Alice',
    age: 25,
    getName: function() {
        return this.name;
    }
};

console.log(user.getName());  // 출력: Alice
