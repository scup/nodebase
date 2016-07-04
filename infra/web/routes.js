import messagesRoutes from './messages/messages.routes';

const modules = [messagesRoutes];

export default function (app) {
  modules.map((module) => module(app));
}
