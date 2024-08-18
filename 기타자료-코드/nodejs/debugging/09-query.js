// 오류 발생 코드
const { Client } = require('pg');
const client = new Client();

client.connect()
    .then(() => console.log('Connected to database'))
    .catch(err => console.error('Connection error', err.stack));

// 수정된 코드: 연결 정보 추가 및 오류 처리 강화
const { Client } = require('pg');
const client = new Client({
    user: 'user',
    host: 'localhost',
    database: 'mydb',
    password: 'password',
    port: 5432,
});

client.connect()
    .then(() => console.log('Connected to database'))
    .catch(err => console.error('Connection error', err.stack));
