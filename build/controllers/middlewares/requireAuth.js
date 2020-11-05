"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        return next();
    }
    res.status(403).send('Not Permitted');
    // return next(new Error('FUkedUp'));
}
exports.requireAuth = requireAuth;
