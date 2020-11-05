"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patch = exports.Delete = exports.Post = exports.Get = void 0;
var Metadatakeys_1 = require("./Metadatakeys");
var Methods_1 = require("./Methods");
require("reflect-metadata");
function RouteBinder(method) {
    return function (path) {
        return function (target, key, _desc) {
            Reflect.defineMetadata(Metadatakeys_1.MetadataKeys.PATH, path, target, key);
            Reflect.defineMetadata(Metadatakeys_1.MetadataKeys.METHOD, method, target, key);
        };
    };
}
exports.Get = RouteBinder(Methods_1.HTTPMethods.GET);
exports.Post = RouteBinder(Methods_1.HTTPMethods.POST);
exports.Delete = RouteBinder(Methods_1.HTTPMethods.DELETE);
exports.Patch = RouteBinder(Methods_1.HTTPMethods.PATCH);
