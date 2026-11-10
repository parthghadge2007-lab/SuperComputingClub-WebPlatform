import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('health/db')
  async checkDbHealth(): Promise<{ status: string; database: string; institutions: number; timestamp: string }> {
    // @ts-ignore // PrismaClient provides model methods
    const userCount = await this.prisma.user.count();
    return {
      status: 'ok',
      database: 'connected',
      institutions: userCount,
      timestamp: new Date().toISOString(),
    };
  }
}