"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.send("Welcome Api do Docker-node");
});
router.get('/force', (req, res) => {
    res.send('');
});
router.get('/message', (req, res) => {
    res.json({ message: 'Hello World' });
});
exports.default = router;
//# sourceMappingURL=api.js.map