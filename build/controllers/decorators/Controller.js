"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("./../../AppRouter");
var Metadatakeys_1 = require("./Metadatakeys");
function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body) {
            return res.status(422).send('You Invalid ');
        }
        var result = keys.every(function (e) { return req.body[e]; });
        if (!result) {
            return res.status(422).send('You Invalid ');
        }
        next();
    };
}
function Controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        Object.keys(target.prototype).forEach(function (key) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(Metadatakeys_1.MetadataKeys.PATH, target.prototype, key);
            var method = Reflect.getMetadata(Metadatakeys_1.MetadataKeys.METHOD, target.prototype, key);
            var middlewares = Reflect.getMetadata(Metadatakeys_1.MetadataKeys.MIDDLEWARE, target.prototype, key) || [];
            var requiredBodyProps = Reflect.getMetadata(Metadatakeys_1.MetadataKeys.VALIDATOR, target.prototype, key) || [];
            var validator = bodyValidators(requiredBodyProps);
            if (path) {
                router[method].apply(router, __spreadArrays(["" + routePrefix + path], middlewares.reverse(), [validator,
                    routeHandler]));
            }
        });
    };
}
exports.Controller = Controller;
