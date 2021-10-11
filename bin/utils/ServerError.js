"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    statusCode;
    status;
    message;
    constructor(statusCode, status, message) {
        super();
        this.statusCode = statusCode;
        this.status = status;
        this.message = message;
    }
}
exports.ApiError = ApiError;
