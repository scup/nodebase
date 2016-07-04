import Message from '../../../business/entities/Message/Message.entity';

export default class CreateMessageUseCase {
  execute(message) {
    const newMessage = new Message({
      text: message
    });

    return newMessage.clean()
    .then(cleanedMessage => {
      return cleanedMessage.save()
    });
  }
}
