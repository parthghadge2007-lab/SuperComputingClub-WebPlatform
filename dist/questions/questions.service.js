"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
let QuestionsService = class QuestionsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(authorId, dto) {
        const category = await this.prisma.category.findUnique({ where: { id: dto.categoryId } });
        if (!category)
            throw new common_1.BadRequestException('Invalid category');
        return this.prisma.question.create({
            data: {
                title: dto.title,
                description: dto.description,
                visibility: dto.visibility || client_1.QuestionVisibility.PUBLIC,
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
    async findAll(query) {
        const whereClause = { visibility: client_1.QuestionVisibility.PUBLIC };
        if (query.categorySlug && query.categorySlug !== 'all')
            whereClause.category = { slug: query.categorySlug };
        if (query.search)
            whereClause.OR = [{ title: { contains: query.search } }, { description: { contains: query.search } }];
        let orderBy = { createdAt: 'desc' };
        if (query.sort === 'trending')
            orderBy = { upvotes: { _count: 'desc' } };
        else if (query.sort === 'unanswered')
            whereClause.answers = { none: {} };
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
    async findOne(id) {
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
        if (!question)
            throw new common_1.NotFoundException('Question not found');
        return question;
    }
    async createAnswer(userId, questionId, dto) {
        const question = await this.prisma.question.findUnique({ where: { id: questionId } });
        if (!question)
            throw new common_1.NotFoundException('Question not found');
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
};
exports.QuestionsService = QuestionsService;
exports.QuestionsService = QuestionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], QuestionsService);
