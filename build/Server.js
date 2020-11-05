"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server(DOMAIN, PORT, middlewares) {
        var _a;
        this.DOMAIN = DOMAIN;
        this.PORT = PORT;
        this.middlewares = middlewares;
        this.app = express_1.default();
        (_a = this.app).use.apply(_a, this.middlewares);
    }
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.PORT, function () {
            console.log("Listening On http://" + _this.DOMAIN + ":" + _this.PORT);
        });
    };
    return Server;
}());
exports.Server = Server;
