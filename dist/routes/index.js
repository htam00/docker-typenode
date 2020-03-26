"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Article_1 = require("../models/Article");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.render('home');
});
router.get('/blog', (req, res) => {
    Article_1.Article.find({}, (err, articles) => {
        if (err)
            // tslint:disable-next-line:no-console
            console.log(err);
        // tslint:disable-next-line:no-console
        console.log(articles);
    });
    res.render('blog');
});
router.post('/blog', (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const article = new Article_1.Article({
        title,
        description
    });
    // tslint:disable-next-line:no-shadowed-variable
    article.save((err, article) => {
        // tslint:disable-next-line:no-console
        !err ? console.log(article) : console.log(err);
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map