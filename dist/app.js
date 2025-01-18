"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const app = (0, express_1.default)();
// Middleware
app.set("view engine", "ejs");
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(studentRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map