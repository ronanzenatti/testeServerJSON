var express = require('express');
var jsonServer = require('json-server');

var server = express();

server.use('/', jsonServer.defaults(), jsonServer.router('db.json'));

server.listen(80);