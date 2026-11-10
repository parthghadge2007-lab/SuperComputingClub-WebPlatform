import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { QuestionVisibility } from '@prisma/client';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { PrismaService } from '../prisma/prisma.service';

export interface CreateQuestionDto {
  title: string;
  description: string;
  categoryId: string;
  visibility?: QuestionVisibility;
  tags?: string[];
}

@Injectable()
export class QuestionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(authorId: string, dto: CreateQuestionDto) {
    const category = await this.prisma.category.findUnique({ where: { id: dto.categoryId } });
    if (!category) throw new BadRequestException('Invalid category');
    return this.prisma.question.create({
      data: {
        title: dto.title,
        description: dto.description,
        visibility: dto.visibility || QuestionVisibility.PUBLIC,
        authorId,
        categoryId: dto.categoryId,
        tags: {
          create: (dto.tags || []).map((tagName) => ({
            tag: { connectOrCreate: { where: { name: tagName.toLowerCase() }, create: { name: tagName.toLowerCase() } } },
          })),
        },
      },
      include: {
        author: { select: { id: true, name: true, role: true, avatarUrl: true } },
        category: true,
        tags: { include: { tag: true } },
        _count: { select: { answers: true, upvotes: true } },
      },
    });
  }

  async findAll(query: { categorySlug?: string; sort?: string; search?: string; skip?: number; take?: number }) {
    const whereClause: any = { visibility: QuestionVisibility.PUBLIC };
    if (query.categorySlug && query.categorySlug !== 'all') whereClause.category = { slug: query.categorySlug };
    if (query.search) whereClause.OR = [{ title: { contains: query.search } }, { description: { contains: query.search } }];
    let orderBy: any = { createdAt: 'desc' };
    if (query.sort === 'trending') orderBy = { upvotes: { _count: 'desc' } };
    else if (query.sort === 'unanswered') whereClause.answers = { none: {} };
    const take = query.take ?? 20;
    const skip = query.skip ?? 0;
    return this.prisma.question.findMany({
      where: whereClause,
      orderBy,
      skip,
      take,
      include: {
        author: { select: { id: true, name: true, role: true, avatarUrl: true } },
        category: true,
        tags: { include: { tag: true } },
        _count: { select: { answers: true, upvotes: true } },
      },
    });
  }

  async findOne(id: string) {
    const question = await this.prisma.question.findUnique({
      where: { id },
      include: {
        author: { select: { id: true, name: true, role: true, avatarUrl: true } },
        category: true,
        tags: { include: { tag: true } },
        answers: {
          include: { author: { select: { id: true, name: true, role: true, avatarUrl: true } } },
          orderBy: { createdAt: 'asc' },
        },
        _count: { select: { upvotes: true } },
      },
    });
    if (!question) throw new NotFoundException('Question not found');
    return question;
  }

  async createAnswer(userId: string, questionId: string, dto: CreateAnswerDto) {
    const question = await this.prisma.question.findUnique({ where: { id: questionId } });
    if (!question) throw new NotFoundException('Question not found');
    const answer = await this.prisma.answer.create({
      data: {
        body: dto.body,
        authorId: userId,
        questionId,
      },
      include: { author: { select: { id: true, name: true, role: true, avatarUrl: true } } },
    });
    return answer;
  }
}
