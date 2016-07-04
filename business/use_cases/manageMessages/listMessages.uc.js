import Message from '../../entities/Message/Message.entity';

export default class ListMessagesUseCase {

  execute() {
    return (new Message()).list();
  }
}
