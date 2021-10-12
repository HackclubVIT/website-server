"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const ServerError_1 = require("./utils/ServerError");
const Router_1 = __importDefault(require("./routes/Router"));
const Error_Controller_1 = require("./controllers/Error.Controller");
const path_1 = require("path");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json({ limit: "15kb" }));
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/api", Router_1.default);
app.use(express_1.default.static((0, path_1.join)(__dirname, "../public")));
app.use("*", (_req, _res, next) => {
    next(new ServerError_1.ApiError(404, "fail", "attempt to navigate to undefined route"));
});
app.use(Error_Controller_1.errorController);
exports.default = app;
