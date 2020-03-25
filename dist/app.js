"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const index_1 = require("./routes/index");
const api_1 = require("./routes/api");
class App {
    constructor() {
        this.express = express();
        this.mountMiddleware();
        this.mountRouter();
    }
    mountMiddleware() {
        this.express.set('views', path.join(__dirname, 'views'));
        this.express.set('view engine', 'ejs');
    }
    mountRouter() {
        this.express.use('/', index_1.default);
        this.express.use('/api', api_1.default);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map