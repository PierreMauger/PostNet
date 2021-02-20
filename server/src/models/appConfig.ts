import * as env from 'env-var';

export const DB_HOST: string = env.get('DB_HOST').required().asString();
export const DB_NAME: string = env.get('DB_NAME').required().asString();
export const DB_USER: string = env.get('DB_USER').required().asString();
export const DB_PORT: number = env.get('DB_PORT').required().asIntPositive();
export const DB_URL: string = env.get('DB_URL').required().asString();
export const DB_PASS: string = env.get('DB_PASS').required().asString();
export const ENTITIES_FOLDER: string = env.get('ENTITIES_FOLDER').required().asString();

interface db {
  username: string;
  host: string;
  port: number;
  database: string;
  url: string;
  entities_folder: string;
  password: string;
}

export const dbConfig: db = {
  username: DB_USER,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  url: DB_URL,
  entities_folder: ENTITIES_FOLDER,
  password: DB_PASS,
};
