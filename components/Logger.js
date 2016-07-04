import winston from 'winston';

export default new winston.Logger({
  transports: [
    new winston.transports.Console({
      json: true,
      timestamp: true,
      stringify: true
    })
  ]
});
