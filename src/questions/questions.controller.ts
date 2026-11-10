import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { PaginationDto } from './dto/pagination.dto';
import { QuestionsService, CreateQuestionDto } from './questions.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { CreateAnswerDto } from './dto/create-answer.dto';
import type { User } from '@prisma/client';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async getAllQuestions(
    @Query('category') categorySlug?: string,
    @Query('sort') sort?: string,
    @Query('search') search?: string,
    @Query() pagination?: PaginationDto,
  ) {
    const { skip, take } = pagination || {};
    return this.questionsService.findAll({ categorySlug, sort, search, skip, take });
  }

  @Get(':id')
  async getQuestionById(@Param('id') id: string) {
    return this.questionsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createQuestion(@CurrentUser() user: User, @Body() dto: CreateQuestionDto) {
    return this.questionsService.create(user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/answers')
  async postAnswer(@CurrentUser() user: User, @Param('id') questionId: string, @Body() dto: CreateAnswerDto) {
    return this.questionsService.createAnswer(user.id, questionId, dto);
  }
}
