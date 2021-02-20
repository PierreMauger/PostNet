import { createConnection, Connection } from 'typeorm';
import { dbConfig } from './appConfig';

export default async function dbInitialize(): Promise<Connection> {
    const dbClient = await createConnection({
        type: 'postgres',
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.database,
        url: dbConfig.url,
    });
    return dbClient;
}