import { Response, Request, NextFunction } from 'express';
import {
  BodyValidator,
  Controller,
  Get,
  Post,
  Use,
} from './decorators';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function logger(
  _req: Request,
  _res: Response,
  next: NextFunction
) {
  console.log('Req Was Made');
  next();
}
function logger2(
  _req: Request,
  _res: Response,
  next: NextFunction
) {
  console.log('Req Was Made 2');
  next();
}

@Controller('/auth')
class LoginController {
  @Get('/login')
  @Use(logger)
  @Use(logger2)
  getLogin(_req: Request, res: Response) {
    res.send(`
      <form method="POST">
      <div>
      <label>Email</label>
      <input name="email"/>
      </div>
      <div>
      <label>Password</label>
      <input name="password" type="password"/>
      </div>
      <button>Submit</button>
      </form>
      `);
  }

  @Post('/login')
  @BodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;

    if (
      email &&
      password &&
      email === 'hi@hi.com' &&
      password === 'mm'
    ) {
      req.session = { loggedIn: true };

      res.redirect('/');
    } else {
      res.send('Yo Wrong');
    }
  }

  @Get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = null;
    res.redirect('/');
  }
}

export default LoginController;
