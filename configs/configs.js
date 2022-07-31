module.exports = {
    PORT: process.env.PORT || 5000,
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/dec-2021',

    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'ats',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'rts',

    NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL || '5321@gmail.com',
    NO_REPLY_EMAIL_PASSWORD: process.env.NO_REPLY_EMAIL_PASSWORD || 'ct',

    FRONTEND_URL: process.env.FRONTEND_URL || 'https://google.com',

    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID || 'AC6930',
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN || '55415',
    TWILIO_NUMBER: process.env.TWILIO_NUMBER || '+1845',
};