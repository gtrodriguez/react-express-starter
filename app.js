const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);
const mongoDB = require('mongodb');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const mongoClient = mongoDB.MongoClient;
const ObjectID = mongoDB.ObjectID;

function startServer() {
  app.use('/public', express.static(path.join(__dirname, 'public')));
  app.set('view engine', 'ejs');
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/example.html'));
  });

  console.log(process.env.MONGODB_CONNECTION_STR);
  mongoose.connect(process.env.MONGODB_CONNECTION_STR, { useMongoClient: true });

  const db = mongoose.connection,
  dbCollection = db.collections,
  taskSchema = mongoose.Schema({
    id: Number,
    listId: Number,
    title: String,
    description: String,
    isCompleted: Boolean,
    lastUpdated: Date
  }, { runSettersOnQuery: true }),
  listSchema = mongoose.Schema({
    id: Number,
    title: String,
    lastUpdated: Date,
  }, { runSettersOnQuery: true }),

  Task = mongoose.model('Task', taskSchema),

  return new Promise(resolve => {
      const server = http.listen(process.env.PORT || 3000, () => {
        resolve(server);
      })
  });
}

module.exports = startServer