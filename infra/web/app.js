import Settings from '../settings';
import Logger from '../../components/Logger';
import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

class WebApp {
  constructor(app) {
    this.app = app;
    this.useCors();
    this.parseBody();
    this.morgan();
    this.fetchRoutes();
    this.init();
  }

  parseBody() {
    this.app.use(bodyParser.json());
  }

  morgan() {
    this.app.use(morgan('tiny', { stream: { write: Logger.info } }));
  }

  useCors() {
    this.app.use(cors());
  }

  fetchRoutes() {
    return routes(this.app);
  }

  init() {
    return this.app.listen(Settings.web.httpPort, this.banner);
  }

  banner() {
    console.log(`Server UP and Running in port: ${Settings.web.httpPort}`);
  }
}

export const app = new WebApp(express());
