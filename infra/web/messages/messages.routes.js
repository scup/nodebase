import r from 'ressendr';

import Speck from 'speck-entity';

r.addCustomHandler(
  v => v instanceof Speck || v instanceof Speck.SpeckCollection,
  (v, res) => {
    res.setHeader('content-type', 'text/javascript');
    return v.fetch();
  });

import MessagesController from './messages.controller';
const controller = new MessagesController();

export default function (app) {
  app.get('/messages', r.handle(controller.list));
  app.post('/messages', r.handle(controller.insert));
  app.get('/hello', r.handle(controller.hello));
  return app;
}
