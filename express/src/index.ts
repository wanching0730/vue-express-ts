import express = require('express');
import * as bodyParser from 'body-parser'
import { subscriberRouter } from './routers/subscriber.router'
import cors from 'cors'

// Create a new express application instance
const app: express.Application = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/', subscriberRouter)

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});