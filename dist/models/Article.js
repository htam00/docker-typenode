"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const ArticleSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});
const ArticleModel = mongoose.model("Article", ArticleSchema);
exports.default = ArticleModel;
//# sourceMappingURL=Article.js.map