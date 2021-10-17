import nodemailer, { Transporter } from "nodemailer";
import * as mailer from "nodemailer/lib/mailer";
let transporter: Transporter;

/*
Replace this with AWS SES' https://aws.amazon.com/ses/
transport details once hosted on AWS, and encapsulate the current
details in an `if (process.env.NODE_ENV === "development")`
*/

(async () => {
    transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASS,
        },
    });
})();

export const sendEmail = async (data: mailer.Options) => {
    const info = await transporter.sendMail({
        from: `Hackclub VITC <${process.env.EMAIL_ADDRESS}>`,
        ...data,
    });

    const {
        accepted,
        rejected,
        envelope: { from, to },
    } = info;

    return { from, to, accepted, rejected };
};
