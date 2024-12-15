import {
  GetAllChannelsResponse,
  GetAllChannelsResponseSchema,
} from "@meline/schema/schema/response/channel_response_pb.js";
import { create, toJsonString } from "@bufbuild/protobuf";
import {
  CreateChannelRequest,
  CreateChannelRequestSchema,
} from "@meline/schema/schema/request/channel_request_pb.js";
import { serverFetch } from "@/utils/fetch";

export interface IChannelRepository {
  createChannel: (param: CreateChannelRequest) => Promise<void>;
  getJoinedChannels: () => Promise<GetAllChannelsResponse>;
  getJoinedChannels$$key: () => string[];
}

export class ChannelRepositoryImpl implements IChannelRepository {
  async createChannel(param: CreateChannelRequest) {
    const res = await serverFetch("/api/channel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: toJsonString(CreateChannelRequestSchema, param),
    });

    if (!res.ok) {
      throw new Error("Failed to create channel");
    }
  }

  async getJoinedChannels() {
    const res = await serverFetch("/api/channel");

    return create(GetAllChannelsResponseSchema, await res.json());
  }

  getJoinedChannels$$key() {
    return ["getJoinedChannels"];
  }
}
