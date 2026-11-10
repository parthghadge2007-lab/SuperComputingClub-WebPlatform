var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { QuestionVisibility } from '@prisma/client';
let QuestionsService = (() => {
    let _classDecorators = [Injectable()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var QuestionsService = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            QuestionsService = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        prisma;
        constructor(prisma) {
            this.prisma = prisma;
        }
        async create(authorId, dto) {
            const category = await this.prisma.category.findUnique({ where: { id: dto.categoryId } });
            if (!category)
                throw new BadRequestException('Invalid category');
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
                include: { author: { select: { id: true, name: true, role: true, avatarUrl: true } }, category: true, tags: { include: { tag: true } }, _count: { select: { answers: true, upvotes: true } } },
            });
        }
        async findAll(query) {
            const whereClause = { visibility: QuestionVisibility.PUBLIC };
            if (query.categorySlug && query.categorySlug !== 'all')
                whereClause.category = { slug: query.categorySlug };
            if (query.search)
                whereClause.OR = [{ title: { contains: query.search } }, { description: { contains: query.search } }];
            let orderBy = { createdAt: 'desc' };
            if (query.sort === 'trending')
                orderBy = { upvotes: { _count: 'desc' } };
            else if (query.sort === 'unanswered')
                whereClause.answers = { none: {} };
            return this.prisma.question.findMany({
                where: whereClause,
                orderBy,
                include: { author: { select: { id: true, name: true, role: true, avatarUrl: true } }, category: true, tags: { include: { tag: true } }, _count: { select: { answers: true, upvotes: true } } },
            });
        }
        async findOne(id) {
            const question = await this.prisma.question.findUnique({
                where: { id },
                include: { author: { select: { id: true, name: true, role: true, avatarUrl: true } }, category: true, tags: { include: { tag: true } }, answers: { include: { author: { select: { id: true, name: true, role: true, avatarUrl: true } } }, orderBy: { createdAt: 'asc' } }, _count: { select: { upvotes: true } } },
            });
            if (!question)
                throw new NotFoundException('Question not found');
            return question;
        }
        async toggleUpvote(userId, questionId) {
            const existing = await this.prisma.upvote.findUnique({ where: { userId_questionId: { userId, questionId } } });
            if (existing) {
                await this.prisma.upvote.delete({ where: { id: existing.id } });
                return { upvoted: false };
            }
            else {
                await this.prisma.upvote.create({ data: { userId, questionId } });
                return { upvoted: true };
            }
        }
    };
    return QuestionsService = _classThis;
})();
export { QuestionsService };
