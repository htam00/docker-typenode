"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const app_1 = require("./app");
// Configure Envoriment
dotenv.config();
// Define PORT Access
const port = process.env.PORT || 8080;
// Running Server
app_1.default.listen(port, () => console.log(`SERVER:: localhost:${port}`));
//# sourceMappingURL=server.js.map