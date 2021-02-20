import { createConnection } from "typeorm";
import { DB_PORT } from '../../models/appConfig'

const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: DB_PORT,
    username: "test",
    password: "test",
    database: "test"
});
