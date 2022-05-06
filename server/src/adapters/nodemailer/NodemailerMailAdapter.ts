import { MailAdapter, sendMailData } from "../MailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e1a6fcd22a7506",
        pass: "41304cb3fbf143"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ body, subject }: sendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Arthur Wiebusch <arturh07@gmail.com>",
            subject,
            html: body
        });
    }
}