import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';

@Injectable()
export class passwordService {
  async hashPassword(password: string) {
    const hashPassword = await hash(password, 10);
    if (!hashPassword) {
      return { message: 'password cannot be hashed' };
    }
    return hashPassword;
  }

  async verify(password: string, hashPassword: string) {
    const comparePass = compare(password, hashPassword);
    if (!comparePass) {
      return false;
    }
    return true;
  }
}
