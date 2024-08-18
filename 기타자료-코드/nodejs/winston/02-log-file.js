const winston = require('winston');
require('winston-daily-rotate-file');

const transport = new winston.transports.DailyRotateFile({
    filename: 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        transport,
        new winston.transports.Console()
    ]
});

logger.info('This log will be rotated daily and archived.');
