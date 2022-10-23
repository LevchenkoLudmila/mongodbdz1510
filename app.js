// const express = require('express');
// const server = express();
const db = require('./routes/db');
const BookModel = require('./models/book');
const JanrModel = require('./models/janr');
const AutorsModel = require('./models/autors');
const { startSession } = require('./models/book');

const init = async () => {
   const doc = await BookModel.create({
      name: 'arhimed',
      year: 1981
   });
   console.log(doc);
};

init();

db.once('open', () => {
   console.log('Connected to DB');
});

// server.set('view engine','ejs');
// server.set('views','./views');

// server.use(express.static('./public'));

// server.get('/',(req, res) => {
//    res.render('index');
// });