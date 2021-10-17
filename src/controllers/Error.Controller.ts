import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ServerError";

export const errorController = (
    err: ApiError,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        message:
            statusCode >= 500
                ? "An internal server error has occured. Please try later"
                : err.message,
    });
};
