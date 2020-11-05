"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Use = void 0;
require("reflect-metadata");
var Metadatakeys_1 = require("./Metadatakeys");
function Use(middleware) {
    return function (target, key, _desc) {
        var middlewares = Reflect.getMetadata(Metadatakeys_1.MetadataKeys.MIDDLEWARE, target, key) || [];
        Reflect.defineMetadata(Metadatakeys_1.MetadataKeys.MIDDLEWARE, __spreadArrays(middlewares, [middleware]), target, key);
    };
}
exports.Use = Use;
