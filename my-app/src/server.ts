import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import { StatusCodes } from 'http-status-codes';

const server = express()
server.use(bodyParser.json());
server.use(cookieParser());
