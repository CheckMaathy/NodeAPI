import { getCustomRepository } from "typeorm";


class MessagesService {
  async create() {
    const messagesRepository = getCustomRepository()
  }
}

export { MessagesService }