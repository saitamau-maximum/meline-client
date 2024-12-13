import { DefaultRepositories } from "@/repositories";
import { IAuthRepository } from "@/repositories/auth";
import { IChannelRepository } from "@/repositories/channel";
import { IChatRepository } from "@/repositories/chat";
import { IMessageRepository } from "@/repositories/message";
import { INotificationRepository } from "@/repositories/notification";
import { createContext } from "react";

export interface RepositoryContextProps {
  channelRepository: IChannelRepository;
  chatRepository: IChatRepository;
  authRepository: IAuthRepository;
  messageRepository: IMessageRepository;
  notificationRepository: INotificationRepository;
}

export const RepositoryContext =
  createContext<RepositoryContextProps>(DefaultRepositories);
