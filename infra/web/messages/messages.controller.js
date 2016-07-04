import ListMessagesUseCase from '../../../business/use_cases/manageMessages/listMessages.uc';
import CreateMessageUseCase from '../../../business/use_cases/manageMessages/createMessage.uc';


export default class MessagesController {
  list() {
    return new ListMessagesUseCase().execute();
  }

  insert(req) {
    return new CreateMessageUseCase().execute(req.body.message);
  }
}
