"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middlewares = void 0;
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
class Middlewares {
    static addMiddlewares(app) {
        app.use((0, morgan_1.default)('dev'));
        app.use((0, helmet_1.default)());
        app.use(express_1.default.json());
        app.use((0, compression_1.default)());
        app.use((0, cors_1.default)());
    }
}
exports.Middlewares = Middlewares;
