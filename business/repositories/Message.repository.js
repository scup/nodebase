import CensorService from '../../infra/services/censor.service';

const censorService = new CensorService();

export default class MessageRepository {

  constructor(args) {
    this.storage = [];
    this.censorService = args && args.censorService || censorService;
  }

  create(message) {
    this.storage.push(message);
    return Promise.resolve(message);
  }

  list() {
    return Promise.resolve(this.storage);
  }

  cleanMessage(message) {
    return this.censorService.cleanInsults(message);
  }
}
