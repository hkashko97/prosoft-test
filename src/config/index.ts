import { config } from 'dotenv';


config();

const ENV = {
    APP_PORT: process.env.APP_PORT,
    Auth: {
        PASSWORD_SALT_ROUNDS: process.env.PASSWORD_SALT_ROUNDS,
        JWT_SECRET: process.env.JWT_SECRET
    },
    DATABASE: {
        DIALECT: process.env.DATABASE_DIALECT,
        HOST: process.env.DATABASE_HOST,
        PORT:process.env.DATABASE_PORT,
        USERNAME:process.env.DATABASE_USERNAME,
        PASSWORD:process.env.DATABASE_PASSWORD,
        NAME:process.env.DATABASE_NAME
    }
};

export { ENV }