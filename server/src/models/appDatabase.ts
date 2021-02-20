import { createConnection, Connection } from 'typeorm';
import { dbConfig } from './appConfig';

export default async function dbInitialize(): Promise<void> {
    await createDatabase({ databaseName: DB_NAME }, db)
        .then(() => console.log('Database has beed created'))
        .catch((e) => console.error(e.message));

    const dbClient = await createConnection({
        type: 'postgres',
        entities: [`${__dirname}/${ENTITIES_FOLDER}/**/*.ts`],
        url: DB_URL,
    });
    return dbClient.synchronize();
}