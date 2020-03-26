"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const body_parser_1 = require("body-parser");
const index_1 = require("./routes/index");
const api_1 = require("./routes/api");
dotenv.config();
class App {
    constructor() {
        this.express = express();
        this.uri = process.env.MONGO_URI;
        this.mountRouter();
        this._setConfigMiddleware();
        this._setMongoConfig();
    }
    _setMongoConfig() {
        mongoose.connect(this.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    _setConfigMiddleware() {
        this.express.set("views", path.join(__dirname, "views"));
        this.express.set("view engine", "ejs");
        this.express.use(body_parser_1.urlencoded({ extended: true }));
        this.express.use(body_parser_1.json());
    }
    mountRouter() {
        this.express.use('/', index_1.default);
        this.express.use('/api', api_1.default);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map