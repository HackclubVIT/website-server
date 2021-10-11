"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorController = void 0;
const errorController = (err, _req, res, _next) => {
    res.status(err.statusCode || 500).json({
        message: err.message,
    });
};
exports.errorController = errorController;
