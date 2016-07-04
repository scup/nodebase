import Entity from 'speck-entity';
import React from 'react';
import MessageRepository from '../../repositories/Message.repository';
import MessageCollection from './MessageCollection.entity';

const messageRepository = new MessageRepository();

export default class Message extends Entity {

  static SCHEMA = {
    text: React.PropTypes.string,
    cleaned: React.PropTypes.bool
  }

  save() {
    return messageRepository.create(this);
  }

  clean() {
    return messageRepository.cleanMessage(this);
  }

  list() {
    return messageRepository.list()
    .then(rawMessages => new MessageCollection(rawMessages));
  }

}
