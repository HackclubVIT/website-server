import * as mailer from "nodemailer/lib/mailer";
export declare const sendEmail: (data: mailer.Options) => Promise<{
    from: any;
    to: any;
    accepted: any;
    rejected: any;
}>;
//# sourceMappingURL=MailSender.d.ts.map