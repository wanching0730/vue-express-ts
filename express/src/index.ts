import express = require('express');
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser'
import { subscriberRouter } from './routers/subscriber.router'
import cors from 'cors'

// Create a new express application instance
const app: express.Application = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/', subscriberRouter)

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!');
});

app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});