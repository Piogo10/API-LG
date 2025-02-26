const express = require('express');
const dotenv = require('dotenv');

const questionsRouter = require('./api/routes/questionsRoute');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });

app.use('/api/questions', questionsRouter);

app.listen(PORT, () => {
    console.log(`\nAPI [CONNECTED] [PORT: ${PORT}]`);
  });