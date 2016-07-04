import Speck from 'speck-entity';
import Message from '../Message/Message.entity';


export default class MessageCollection extends Speck.SpeckCollection {
  static entity = Message;

  fetch() {
    return this.items.map(item => item.fetch());
  }
}
