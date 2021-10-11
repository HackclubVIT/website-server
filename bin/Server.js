"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./Config");
const App_1 = __importDefault(require("./App"));
const PORT = process.env.PORT || 9000;
App_1.default.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
process.on("unhandledRejection", (err) => {
    console.error("Promise went unhandled, shutting down...");
    console.error(err);
    process.exit(1);
});
