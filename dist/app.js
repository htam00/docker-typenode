"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// Configure
const db_1 = require("./config/db");
// Routes
const index_1 = require("./routes/index");
const api_1 = require("./routes/api");
const app = express();
dotenv.config();
db_1.setMongoConfig(mongoose);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', index_1.default);
app.use('/api', api_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map