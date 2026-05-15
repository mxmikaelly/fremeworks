import {
  BadRequestException,
  Injectable,
  Logger,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { LoginDto } from '../dto/login.dto';

import { FindUserByEmailRepository } from '../repository';

@Injectable()
export class LoginUseCase {
  constructor(
    private readonly findUserByEmailRepository: FindUserByEmailRepository,
    private readonly jwtService: JwtService,
    private readonly logger: Logger,
  ) {}

  async execute(data: LoginDto) {
    this.logger.log('logando ...');

    const user =
      await this.findUserByEmailRepository.findByEmail(data.email);

    if (!user) {
      throw new BadRequestException('invalido senha ou email');
    }

    const passwordMatch = await bcrypt.compare(
      data.password,
      user.passwordHash,
    );

    if (!passwordMatch) {
      throw new BadRequestException('invalido senha ou email');
    }

    const payload = { sub: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload);

    this.logger.log('usuario logado!');

    return {
      accessToken,
      user:{
        id:user.id,
        name:user.name,
        email:user.email,
      }
    };
  }
}