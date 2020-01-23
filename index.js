/*
const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(morgan('tiny'));
server.use(cors());
*/
const server = require('./server.js');

const port =  process.env.PORT || 9000;

server.get('/', (req, res) => res.send(`API up and running on port ${port}`))

server.listen(port, console.log(`Server up and running on port ${port}`));