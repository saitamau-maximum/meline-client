// @generated by protoc-gen-es v2.2.3
// @generated from file base/channel_base.proto (package base, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { User } from "./user_base_pb";

/**
 * Describes the file base/channel_base.proto.
 */
export declare const file_base_channel_base: GenFile;

/**
 * @generated from message base.Channel
 */
export declare type Channel = Message<"base.Channel"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;
};

/**
 * Describes the message base.Channel.
 * Use `create(ChannelSchema)` to create a new message.
 */
export declare const ChannelSchema: GenMessage<Channel>;

/**
 * @generated from message base.ChannelDetail
 */
export declare type ChannelDetail = Message<"base.ChannelDetail"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: repeated base.User users = 3;
   */
  users: User[];

  /**
   * @generated from field: repeated base.Channel channels = 4;
   */
  channels: Channel[];
};

/**
 * Describes the message base.ChannelDetail.
 * Use `create(ChannelDetailSchema)` to create a new message.
 */
export declare const ChannelDetailSchema: GenMessage<ChannelDetail>;

