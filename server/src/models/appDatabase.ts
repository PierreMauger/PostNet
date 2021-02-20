import { createConnection, Connection } from 'typeorm';
import { dbConfig } from './appConfig';

export default async function dbInitialize() {
  const connection = await createConnection({
    type: 'postgres',
    ...dbConfig,
      entities: [`${__dirname}/entities/*.ts`],
    synchronize:true,
  });
}
