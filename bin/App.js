"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const ServerError_1 = require("./utils/ServerError");
const Router_1 = __importDefault(require("./routes/Router"));
const Error_Controller_1 = require("./controllers/Error.Controller");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "15kb" }));
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/api", Router_1.default);
app.get("/test", (req, res) => {
    const query = req.query.query;
    res.status(200).send(`query was received to be ${query}`);
});
app.use("*", (_req, _res, next) => {
    next(new ServerError_1.ApiError(404, "fail", "attempt to navigate to undefined route"));
});
app.use(Error_Controller_1.errorController);
exports.default = app;
