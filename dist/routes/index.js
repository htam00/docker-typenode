"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ArticlesController = require("../contollers/ArticlesController");
const AuthenticationController = require("../contollers/AuthenticationController");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.render('home');
});
router.get("/blog", ArticlesController.allArticle);
router.post("/blog", ArticlesController.addArticle);
router.get('/login', AuthenticationController.login);
router.get('/register', AuthenticationController.register);
exports.default = router;
//# sourceMappingURL=index.js.map