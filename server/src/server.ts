import 'module-alias/register';
import router from "./routes/router"
import { inject, errorHandler } from "express-custom-error"
import express from "express"
import cookieParser from "cookie-parser"
import { DB_NAME } from './models/appConfig';
import dbInitialize from './models/appDatabase';
import CreatePost from './routes/createPost'

// Patches
inject(); // Patch express in order to use async / await syntax

const PORT = 3030;

const app = express();

// Configure Express App Instance
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(cookieParser());

app.use('/insertPost', CreatePost);

// This middleware adds the json header to every response
app.use('*', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
})

// Assign Routes
app.use('/', router);

// Handle errors
app.use(errorHandler());

// Handle not valid route
app.use('*', (req, res) => {
    res
        .status(404)
        .json({ status: false, message: 'Endpoint Not Found' });
})

// Open Server on configurated Port
app.listen(PORT, async () => {
    console.info('Server listening on port', PORT)
    await dbInitialize()
        .then(() => console.log(`Database ${DB_NAME} is ready`))
        .catch((err) => {
            console.log(`Failed to load database: ${err}`)
            return process.exit(84)
        })
});
