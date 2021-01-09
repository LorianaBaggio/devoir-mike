import express from "express";

const app = express();
const path = require('path');

app.use('/static', express.static('static/index.html' + '/public'));
