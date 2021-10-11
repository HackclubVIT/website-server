"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUsController = void 0;
const MailSender_1 = require("../services/MailSender");
const EmailValidator_1 = require("../utils/EmailValidator");
const ServerError_1 = require("../utils/ServerError");
const contactUsController = async (req, res, next) => {
    const { name, email } = req.body;
    if ((0, EmailValidator_1.validateEmail)(email))
        try {
            const info = await (0, MailSender_1.sendEmail)({
                to: email,
                text: `Hi ${name}`,
            });
            res.status(200).json(info);
        }
        catch (error) {
            next(error);
        }
    else {
        next(new ServerError_1.ApiError(400, "Bad request", "Invalid email address"));
    }
};
exports.contactUsController = contactUsController;
