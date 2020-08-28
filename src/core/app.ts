import express from 'express';

import routes from './routes';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.database();
  }

  private middlewares(): void {
    this.server.use(express.json());
  }
  private database(): void {}

  private routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
