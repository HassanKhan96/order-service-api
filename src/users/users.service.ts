import {
  Delete,
  Get,
  Injectable,
  InternalServerErrorException,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { users, usersModel } from './schema/users.schema';
import { passwordService } from './password.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { RefreshService } from 'src/auth/refresh.service';
import { EmailService } from 'src/email/email.service';
import { verify } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(users.name) private readonly usersModel: usersModel,
    private readonly passwordService: passwordService,
    private readonly AuthService: AuthService,
    private refreshTokenService: RefreshService,
    private readonly emailService: EmailService,
  ) {}
  async create(user: { name: string; email: string; password: string }) {
    const takenEmail = await this.usersModel.findOne({ email: user.email });
    if (takenEmail) {
      return { message: 'this email is already taken' };
    }
    const { password, ...userInfo } = user;
    const newPassword = await this.passwordService.hashPassword(password);
    if (!newPassword) {
      return { message: 'password connot be hashed' };
    }

    const newUser = await new this.usersModel({
      ...userInfo,
      password: newPassword,
    }).save();

    let otp = await this.emailService.sendEmail(newUser.email);

    newUser.otp = otp;

    if (!newUser) {
      return { message: 'user can not be created' };
    }
    await newUser.save();

    return { id: newUser._id, message: 'user created' };
  }

  async login(email: string, password: string) {
    const existingUser = await this.usersModel.findOne({ email });
    if (!existingUser) {
      throw new UnauthorizedException('Wrong email or passwordW');
    }
    let verifiedPass = await this.passwordService.verify(
      password,
      existingUser.password,
    );

    if (!verifiedPass) {
      throw new UnauthorizedException('Wrong email or password');
    }

    const token = this.AuthService.generateToken({
      id: existingUser._id,
      email: existingUser.email,
    });

    const refreshToken = this.refreshTokenService.generateRefreshToken({
      id: existingUser._id,
      email: existingUser.email,
    });

    return { token, refreshToken };
  }

  async update(_id: string, user: CreateUserDto) {
    const updatedUser = await this.usersModel.findByIdAndUpdate({ _id }, user);

    if (!updatedUser) {
      return new InternalServerErrorException('cannot update the user');
    }
    if (updatedUser) {
      return { message: 'user updated' };
    }
  }

  async delete(_id: string) {
    const DeletedUser = await this.usersModel.findByIdAndDelete(_id);

    if (!DeletedUser) {
      return new InternalServerErrorException('cannot delete user');
    }

    if (DeletedUser) {
      return { message: 'user deleted' };
    }
  }

  async verify(_id: string, Otp: string) {
    const verifyUser = await this.usersModel.findOne({ _id, Otp });

    if (!verifyUser) {
      return new InternalServerErrorException('Otp cannot be verified');
    }

    return { message: 'Otp verified' };
  }
}
