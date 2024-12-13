import { env } from "@/env";
import { Message } from "./message";

export interface MessageResponse {
  message: Message;
}

export interface IChatRepository {
  connect: (channelId: number) => void;
  disconnect: () => void;
  onMessageReceived: (callback: (res: MessageResponse) => void) => void;
}

export class ChatRepositoryImpl implements IChatRepository {
  private connection: WebSocket | null = null;

  connect(channelId: number) {
    const url = `${env("SERVER_BASE_WEBSOCKET_URL")}/api/ws/${channelId}`;
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
