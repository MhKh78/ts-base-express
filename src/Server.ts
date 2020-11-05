import express, { Express, RequestHandler } from 'express';

export class Server {
  app: Express = express();

  constructor(
    private DOMAIN: string,
    private PORT: number,
    private middlewares: RequestHandler[]
  ) {
    this.app.use(...this.middlewares);
  }

  start(): void {
    this.app.listen(this.PORT, () => {
      console.log(
        `Listening On http://${this.DOMAIN}:${this.PORT}`
      );
    });
  }
}
