"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Article_1 = require("../models/Article");
exports.allArticle = (req, res) => {
    const articles = Article_1.default.find({}, (err, articles) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(articles);
        }
    });
};
exports.addArticle = (req, res, next) => {
    const setTitleBody = req.body.title;
    const setDescriptionBody = req.body.description;
    const article = new Article_1.default({
        title: setTitleBody,
        description: setDescriptionBody
    });
    article.save((err, article) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(article);
        }
    });
    res.end();
};
exports.updateArticle = (req, res) => {
};
//# sourceMappingURL=ArticlesController.js.map