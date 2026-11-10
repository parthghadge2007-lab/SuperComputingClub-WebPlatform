import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

  async validateOrCreateUser(details: { email: string; name: string; avatarUrl?: string }) {
    if (!details.email.endsWith('@supercomputing.edu') && !details.email.includes('rknec.edu')) {
      throw new BadRequestException('Only institutional emails permitted.');
    }
    let user = await this.prisma.user.findUnique({ where: { email: details.email } });
    if (!user) {
      user = await this.prisma.user.create({
        data: {
          email: details.email,
          name: details.name,
          avatarUrl: details.avatarUrl,
          // Directly use enum string value; Prisma will map it
          role: 'STUDENT',
        },
      });
    }
    return this.generateTokens(user.id, user.email, user.role as string);
  }

  async refreshTokens(refreshToken: string) {
    try {
      const payload = await this.jwtService.verifyAsync(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET || 'refresh',
      });
      const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
      if (!user) throw new BadRequestException('Invalid refresh token');
      return this.generateTokens(user.id, user.email, user.role as string);
    } catch (err) {
      throw new BadRequestException('Invalid refresh token');
    }
  }

  private async generateTokens(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role };
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET || 'secret',
      expiresIn: '15m',
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_REFRESH_SECRET || 'refresh',
      expiresIn: '7d',
    });
    return { accessToken, refreshToken, user: { id: userId, email, role } };
  }
}
