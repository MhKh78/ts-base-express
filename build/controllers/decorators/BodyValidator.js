"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyValidator = void 0;
var Metadatakeys_1 = require("./Metadatakeys");
require("reflect-metadata");
function BodyValidator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, _desc) {
        Reflect.defineMetadata(Metadatakeys_1.MetadataKeys.VALIDATOR, keys, target, key);
    };
}
exports.BodyValidator = BodyValidator;
