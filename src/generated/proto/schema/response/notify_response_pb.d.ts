// @generated by protoc-gen-es v2.2.3
// @generated from file schema/response/notify_response.proto (package schema.response, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { NotifyMeta, Payload } from "../../base/notify_base_pb";

/**
 * Describes the file schema/response/notify_response.proto.
 */
export declare const file_schema_response_notify_response: GenFile;

/**
 * @generated from message schema.response.NotifyResponse
 */
export declare type NotifyResponse = Message<"schema.response.NotifyResponse"> & {
  /**
   * @generated from field: base.NotifyMeta notify_meta = 1;
   */
  notifyMeta?: NotifyMeta;

  /**
   * @generated from field: base.Payload payload = 2;
   */
  payload?: Payload;
};

/**
 * Describes the message schema.response.NotifyResponse.
 * Use `create(NotifyResponseSchema)` to create a new message.
 */
export declare const NotifyResponseSchema: GenMessage<NotifyResponse>;

