// @generated by protoc-gen-es v2.2.3
// @generated from file schema/response/channel_response.proto (package schema.response, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Channel, ChannelDetail } from "../../base/channel_base_pb";

/**
 * Describes the file schema/response/channel_response.proto.
 */
export declare const file_schema_response_channel_response: GenFile;

/**
 * @generated from message schema.response.GetAllChannelsResponse
 */
export declare type GetAllChannelsResponse = Message<"schema.response.GetAllChannelsResponse"> & {
  /**
   * @generated from field: repeated base.Channel channels = 1;
   */
  channels: Channel[];
};

/**
 * Describes the message schema.response.GetAllChannelsResponse.
 * Use `create(GetAllChannelsResponseSchema)` to create a new message.
 */
export declare const GetAllChannelsResponseSchema: GenMessage<GetAllChannelsResponse>;

/**
 * @generated from message schema.response.GetChannelByIDResponse
 */
export declare type GetChannelByIDResponse = Message<"schema.response.GetChannelByIDResponse"> & {
  /**
   * @generated from field: base.ChannelDetail channel = 1;
   */
  channel?: ChannelDetail;
};

/**
 * Describes the message schema.response.GetChannelByIDResponse.
 * Use `create(GetChannelByIDResponseSchema)` to create a new message.
 */
export declare const GetChannelByIDResponseSchema: GenMessage<GetChannelByIDResponse>;

