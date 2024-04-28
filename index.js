require('dotenv').config();     //файл .env

const express = require('express');
const app = express();
const wss = require('express-ws')(app); //импорт сервера и отправка в него приложения
const aWss = wss.getWss();              //объект с клиентами
const cors = require('cors');
//const router = require('./routes/index');
//const errorHandler = require('./middleware/ErrorHandlingMiddleware');
//const wss = require('ws');

const startApp = require('./startup/startApp');
const wssEvents = require("./startup/wssEvents");



app.use(cors());        //передаём в наше приложение корс
app.use(express.json());    //и json ля парсинга
wssEvents(app, aWss);
startApp(app).then(e => console.log(e));







