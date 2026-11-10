import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login-dev')
  async devLogin(@Body() body: { email: string; name: string }): Promise<any> {
    return this.authService.validateOrCreateUser({ email: body.email, name: body.name || 'Developer User' });
  }

  @Post('refresh')
  async refresh(@Body() dto: RefreshTokenDto) {
    return this.authService.refreshTokens(dto.refreshToken);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@CurrentUser() user: any): Promise<any> {
    return user;
  }
}
