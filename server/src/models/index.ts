import dbInitialize from './appDatabase';
import { DB_NAME } from './appConfig';

dbInitialize()
    .then(() => console.log(`Database ${DB_NAME} is ready`))
    .catch((err) => console.log(`Failed to load database: ${err}`));
