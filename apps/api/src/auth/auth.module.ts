import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import type { SignOptions } from 'jsonwebtoken';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

const jwtExpiresIn = (process.env.JWT_EXPIRES_IN ||
  '7d') as SignOptions['expiresIn'];

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'local-pml-cms-secret-change-later',
      signOptions: {
        expiresIn: jwtExpiresIn,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
