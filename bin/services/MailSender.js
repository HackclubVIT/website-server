"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
let transporter;
(async () => {
    transporter = nodemailer_1.default.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASS,
        },
    });
})();
const sendEmail = async (data) => {
    const info = await transporter.sendMail({
        from: `Hackclub VITC <${process.env.EMAIL_ADDRESS}>`,
        ...data,
    });
    const { accepted, rejected, envelope: { from, to }, } = info;
    return { from, to, accepted, rejected };
};
exports.sendEmail = sendEmail;
