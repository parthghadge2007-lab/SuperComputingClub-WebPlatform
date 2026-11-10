var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
let QuestionsController = (() => {
    let _classDecorators = [Controller('questions')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getAllQuestions_decorators;
    let _getQuestionById_decorators;
    let _createQuestion_decorators;
    let _upvoteQuestion_decorators;
    var QuestionsController = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _getAllQuestions_decorators = [Get()];
            _getQuestionById_decorators = [Get(':id')];
            _createQuestion_decorators = [UseGuards(JwtAuthGuard), Post()];
            _upvoteQuestion_decorators = [UseGuards(JwtAuthGuard), Post(':id/upvote')];
            __esDecorate(this, null, _getAllQuestions_decorators, { kind: "method", name: "getAllQuestions", static: false, private: false, access: { has: obj => "getAllQuestions" in obj, get: obj => obj.getAllQuestions }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _getQuestionById_decorators, { kind: "method", name: "getQuestionById", static: false, private: false, access: { has: obj => "getQuestionById" in obj, get: obj => obj.getQuestionById }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _createQuestion_decorators, { kind: "method", name: "createQuestion", static: false, private: false, access: { has: obj => "createQuestion" in obj, get: obj => obj.createQuestion }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _upvoteQuestion_decorators, { kind: "method", name: "upvoteQuestion", static: false, private: false, access: { has: obj => "upvoteQuestion" in obj, get: obj => obj.upvoteQuestion }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            QuestionsController = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        questionsService = __runInitializers(this, _instanceExtraInitializers);
        constructor(questionsService) {
            this.questionsService = questionsService;
        }
        async getAllQuestions(categorySlug, sort, search) {
            return this.questionsService.findAll({ categorySlug, sort, search });
        }
        async getQuestionById(id) { return this.questionsService.findOne(id); }
        async createQuestion(user, dto) {
            return this.questionsService.create(user.id, dto);
        }
        async upvoteQuestion(user, questionId) {
            return this.questionsService.toggleUpvote(user.id, questionId);
        }
    };
    return QuestionsController = _classThis;
})();
export { QuestionsController };
