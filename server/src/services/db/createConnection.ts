import {createConnection, Connection} from "typeorm";

const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3000,
    username: "test",
    password: "test",
    database: "test"
});
