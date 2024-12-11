import { AuthRepositoryImpl } from "./auth";
import { ChannelRepositoryImpl } from "./channel";
import { ChatRepositoryImpl } from "./chat";
import { MessageRepositoryImpl } from "./message";
import { NotificationRepositoryImpl } from "./notification";

export const DefaultRepositories = {
  channelRepository: new ChannelRepositoryImpl(),
  chatRepository: new ChatRepositoryImpl(),
  authRepository: new AuthRepositoryImpl(),
  messageRepository: new MessageRepositoryImpl(),
  notificationRepository: new NotificationRepositoryImpl(),
};
