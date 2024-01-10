import { google } from 'googleapis';
import { type NextRequest, NextResponse } from 'next/server';
import { createTransport, Transporter, TransportOptions } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import 'supports-color';

const OAuth2 = google.auth.OAuth2;
const createTransporter = async (): Promise<Transporter | null> => {
  try {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject();
        }
        resolve(token);
      });
    });

    const transporter: Transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: process.env.USER_EMAIL,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    } as TransportOptions);
    return transporter;
  } catch (err) {
    return null;
  }
};

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: 'majstorovic.todor@gmail.com',
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  try {
    const emailTransporter: Transporter | null = await createTransporter();
    if (!emailTransporter)
      return NextResponse.json({ error: 'err' }, { status: 500 });
    await emailTransporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
