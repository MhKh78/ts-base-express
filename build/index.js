"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = require("./Server");
var AppRouter_1 = require("./AppRouter");
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./controllers/LoginController");
require("./controllers/RootController");
new Server_1.Server('localhost', 3000, [
    helmet_1.default(),
    express_1.default.json(),
    express_1.default.urlencoded({ extended: true }),
    cookie_session_1.default({ keys: ['laskdjf'] }),
    AppRouter_1.AppRouter.getInstance(),
]).start();
