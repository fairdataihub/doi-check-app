"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var probot_1 = require("probot");
var app_1 = __importDefault(require("./app"));
var probot = (0, probot_1.createProbot)();
exports.default = (0, probot_1.createNodeMiddleware)(app_1.default, {
    probot: probot,
    webhooksPath: "/api/github/webhooks",
});
