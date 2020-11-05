import { Request, Response } from 'express';
import { Controller, Get, Use } from './decorators';
import { requireAuth } from './middlewares/requireAuth';

@Controller('')
class RootController {
  @Get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      return res.send(`<div>
      <div>Yo, Yor In</div>
      <a href="/auth/logout">LogOut</a>
      </div>`);
    }
    res.send(`<div>
    <div>Go Away</div>
    <a href="/auth/login">Login</a>
    </div>`);
  }

  @Get('/protected')
  @Use(requireAuth)
  getProtected(_req: Request, res: Response) {
    return res.send('LOL, Yo Here?');
  }
}

export default RootController;
