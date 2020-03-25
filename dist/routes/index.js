"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.render('home');
});
router.get('/blog', (req, res) => {
    res.render('blog');
});
exports.default = router;
//# sourceMappingURL=index.js.map