import request from 'request';

export default class CensorService {
  constructor() {
    this.host = 'http://www.purgomalum.com/service/json?text=';
  }

  cleanInsults(message) {
    return new Promise((resolve, reject) =>
      request(this.host + message.text, (err, res, body) => {
        if (err) {
          return reject(err);
        }
        const result = JSON.parse(body).result;
        message.text = result;
        message.cleaned = true;
        return resolve(message);
      })
    );
  }
}
