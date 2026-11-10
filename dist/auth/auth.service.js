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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async validateOrCreateUser(details) {
        if (!details.email.endsWith('@supercomputing.edu') && !details.email.includes('rknec.edu')) {
            throw new common_1.BadRequestException('Only institutional emails permitted.');
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
        return this.generateTokens(user.id, user.email, user.role);
    }
    async refreshTokens(refreshToken) {
        try {
            const payload = await this.jwtService.verifyAsync(refreshToken, {
                secret: process.env.JWT_REFRESH_SECRET || 'refresh',
            });
            const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
            if (!user)
                throw new common_1.BadRequestException('Invalid refresh token');
            return this.generateTokens(user.id, user.email, user.role);
        }
        catch (err) {
            throw new common_1.BadRequestException('Invalid refresh token');
        }
    }
    async generateTokens(userId, email, role) {
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthService);
