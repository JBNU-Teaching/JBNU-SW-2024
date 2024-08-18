const express = require('express');
const winston = require('winston');
const morgan = require('morgan');
const path = require('path');

// winston 로거 설정
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.File({ filename: 'error.log', level: 'error' })
    ]
});

// Express 애플리케이션 생성
const app = express();

// morgan 미들웨어를 사용해 HTTP 요청 로그 기록 (winston과 연동)
app.use(morgan('combined', {
    stream: {
        write: (message) => logger.info(message.trim())
    }
}));

// 기본 라우트
app.get('/', (req, res) => {
    res.send('Hello, World!');
    logger.info('Responded to GET /');
});

// 오류 처리 미들웨어
app.use((err, req, res, next) => {
    logger.error(`Error occurred: ${err.message}`);
    res.status(500).send('Something went wrong!');
});

// 서버 실행
const PORT = 3000;
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
