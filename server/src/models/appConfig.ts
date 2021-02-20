import * as env from 'env-var';

export const DB_HOST: string = env.get('DB_HOST').required().asString();
export const DB_NAME: string = env.get('DB_NAME').required().asString();
export const DB_USER: string = env.get('DB_USER').required().asString();
export const DB_PORT: number = env.get('DB_PORT').required().asIntPositive();

interface db {
    username: string;
    host: string;
    port: number;
    database: string;
}

export const dbConfig: db = {
  username: DB_USER,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
};
