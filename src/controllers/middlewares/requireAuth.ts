import { NextFunction, Request, Response } from 'express';
export function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (req.session && req.session.loggedIn) {
    return next();
  }
  res.status(403).send('Not Permitted');
  // return next(new Error('FUkedUp'));
}
