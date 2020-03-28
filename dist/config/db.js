"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMongoConfig = (mongoose) => {
    const uri = process.env.MONGO_URI;
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};
//# sourceMappingURL=db.js.map