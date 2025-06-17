import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as crypto from 'crypto';

@Injectable()
export class EmailService {
  async sendEmail(email: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'feastpoint9@gmail.com',
        pass: 'xogo phvl nlzq kaez',
      },
    });

    let otp = this.generateSecureOTP();

    const info = await transporter.sendMail({
      from: 'Feast Point feastpoint9@gmail.com',
      to: email,
      subject: 'Verification code',
      text: `Your varification code is ${otp}`,
    });

    return otp;
  }

  private generateSecureOTP() {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      const array = new Uint32Array(1);
      crypto.getRandomValues(array);
      // Ensure it's 6 digits
      const otp = (array[0] % 900000) + 100000;
      return otp.toString();
    } else {
      // Fallback to Math.random
      return (Math.floor(Math.random() * 900000) + 100000).toString();
    }
  }
}
