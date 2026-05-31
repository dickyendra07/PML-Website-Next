import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get('me')
  me(@Headers('authorization') authorization?: string) {
    const token = authorization?.replace('Bearer ', '').trim();

    if (!token) {
      throw new UnauthorizedException('Missing authorization token.');
    }

    return this.authService.verifyToken(token);
  }
}
