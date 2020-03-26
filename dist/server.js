"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
// Define PORT Access
const port = process.env.PORT || 8080;
// Running Server
app_1.default.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`SERVER:: localhost:${port}`);
});
//# sourceMappingURL=server.js.map