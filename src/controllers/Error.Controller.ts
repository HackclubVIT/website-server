import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ServerError";

export const errorController = (
    err: ApiError,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    res.status(err.statusCode || 500).json({
        message: err.message,
    });
};
