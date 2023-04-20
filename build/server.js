"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const routes_1 = require("./shared/routes");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
app_1.app.use(routes_1.routes);
const PORT = 4000;
app_1.app.listen(process.env.PORT || PORT, () => console.log(`Server is running on port ${PORT}`));
