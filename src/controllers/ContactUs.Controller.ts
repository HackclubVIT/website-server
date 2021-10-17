import { NextFunction, Request, Response } from "express";
import { sendEmail } from "../services/MailSender";
import { validateEmail } from "../utils/EmailValidator";
import { ApiError } from "../utils/ServerError";

export const contactUsController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, email }: { name: string; email: string } = req.body;

    if (validateEmail(email))
        try {
            const info = await sendEmail({
                to: email,
                text: `Hi ${name || "hacker"}`, //for testing
                // can fill this with html: our_html_template
            });
            res.status(200).json(info);
        } catch (error) {
            next(error);
        }
    else {
        next(new ApiError(400, "Bad request", "Invalid email address"));
    }
};
