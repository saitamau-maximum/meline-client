import { env } from "@/env";
import { Message } from "./message";

export enum NotifyType {
  Message = 0,
}

interface BaseNotifyResponse {
  notify_meta: {
    type: NotifyType;
  };
}

export interface MessageNotifyResponse extends BaseNotifyResponse {
  payload: {
    channel_id: number;
    message: Message;
  };
}

export type MessageResponse = MessageNotifyResponse;

export interface INotificationRepository {
  connect: () => void;
  disconnect: () => void;
  onMessageReceived: (callback: (res: MessageResponse) => void) => void;
}

export class NotificationRepositoryImpl implements INotificationRepository {
  private connection: WebSocket | null = null;

  connect() {
    const url = `${env("SERVER_BASE_WEBSOCKET_URL")}/api/ws/notify`;
    this.connection = new WebSocket(url);
  }

  disconnect() {
    this.connection?.close();
    this.connection = null;
  }

  onMessageReceived(callback: (res: MessageResponse) => void) {
    this.connection?.addEventListener("message", (event) => {
      const res = JSON.parse(event.data);
      callback(res);
    });
  }
}
