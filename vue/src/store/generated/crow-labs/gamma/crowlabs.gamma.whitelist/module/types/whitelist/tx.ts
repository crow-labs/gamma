/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.gamma.whitelist";

export interface MsgCreateBuyerIds {
  creator: string;
  accAddr: string;
  buyerId: string;
}

export interface MsgCreateBuyerIdsResponse {}

export interface MsgUpdateBuyerIds {
  creator: string;
  accAddr: string;
  buyerId: string;
}

export interface MsgUpdateBuyerIdsResponse {}

export interface MsgDeleteBuyerIds {
  creator: string;
  accAddr: string;
}

export interface MsgDeleteBuyerIdsResponse {}

const baseMsgCreateBuyerIds: object = { creator: "", accAddr: "", buyerId: "" };

export const MsgCreateBuyerIds = {
  encode(message: MsgCreateBuyerIds, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.accAddr !== "") {
      writer.uint32(18).string(message.accAddr);
    }
    if (message.buyerId !== "") {
      writer.uint32(26).string(message.buyerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBuyerIds {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBuyerIds } as MsgCreateBuyerIds;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.accAddr = reader.string();
          break;
        case 3:
          message.buyerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBuyerIds {
    const message = { ...baseMsgCreateBuyerIds } as MsgCreateBuyerIds;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = String(object.accAddr);
    } else {
      message.accAddr = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    return message;
  },

  toJSON(message: MsgCreateBuyerIds): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBuyerIds>): MsgCreateBuyerIds {
    const message = { ...baseMsgCreateBuyerIds } as MsgCreateBuyerIds;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = object.accAddr;
    } else {
      message.accAddr = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    return message;
  },
};

const baseMsgCreateBuyerIdsResponse: object = {};

export const MsgCreateBuyerIdsResponse = {
  encode(
    _: MsgCreateBuyerIdsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateBuyerIdsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateBuyerIdsResponse,
    } as MsgCreateBuyerIdsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateBuyerIdsResponse {
    const message = {
      ...baseMsgCreateBuyerIdsResponse,
    } as MsgCreateBuyerIdsResponse;
    return message;
  },

  toJSON(_: MsgCreateBuyerIdsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateBuyerIdsResponse>
  ): MsgCreateBuyerIdsResponse {
    const message = {
      ...baseMsgCreateBuyerIdsResponse,
    } as MsgCreateBuyerIdsResponse;
    return message;
  },
};

const baseMsgUpdateBuyerIds: object = { creator: "", accAddr: "", buyerId: "" };

export const MsgUpdateBuyerIds = {
  encode(message: MsgUpdateBuyerIds, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.accAddr !== "") {
      writer.uint32(18).string(message.accAddr);
    }
    if (message.buyerId !== "") {
      writer.uint32(26).string(message.buyerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBuyerIds {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBuyerIds } as MsgUpdateBuyerIds;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.accAddr = reader.string();
          break;
        case 3:
          message.buyerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBuyerIds {
    const message = { ...baseMsgUpdateBuyerIds } as MsgUpdateBuyerIds;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = String(object.accAddr);
    } else {
      message.accAddr = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateBuyerIds): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateBuyerIds>): MsgUpdateBuyerIds {
    const message = { ...baseMsgUpdateBuyerIds } as MsgUpdateBuyerIds;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = object.accAddr;
    } else {
      message.accAddr = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    return message;
  },
};

const baseMsgUpdateBuyerIdsResponse: object = {};

export const MsgUpdateBuyerIdsResponse = {
  encode(
    _: MsgUpdateBuyerIdsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateBuyerIdsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateBuyerIdsResponse,
    } as MsgUpdateBuyerIdsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateBuyerIdsResponse {
    const message = {
      ...baseMsgUpdateBuyerIdsResponse,
    } as MsgUpdateBuyerIdsResponse;
    return message;
  },

  toJSON(_: MsgUpdateBuyerIdsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateBuyerIdsResponse>
  ): MsgUpdateBuyerIdsResponse {
    const message = {
      ...baseMsgUpdateBuyerIdsResponse,
    } as MsgUpdateBuyerIdsResponse;
    return message;
  },
};

const baseMsgDeleteBuyerIds: object = { creator: "", accAddr: "" };

export const MsgDeleteBuyerIds = {
  encode(message: MsgDeleteBuyerIds, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.accAddr !== "") {
      writer.uint32(18).string(message.accAddr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBuyerIds {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteBuyerIds } as MsgDeleteBuyerIds;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.accAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteBuyerIds {
    const message = { ...baseMsgDeleteBuyerIds } as MsgDeleteBuyerIds;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = String(object.accAddr);
    } else {
      message.accAddr = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteBuyerIds): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteBuyerIds>): MsgDeleteBuyerIds {
    const message = { ...baseMsgDeleteBuyerIds } as MsgDeleteBuyerIds;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = object.accAddr;
    } else {
      message.accAddr = "";
    }
    return message;
  },
};

const baseMsgDeleteBuyerIdsResponse: object = {};

export const MsgDeleteBuyerIdsResponse = {
  encode(
    _: MsgDeleteBuyerIdsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteBuyerIdsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteBuyerIdsResponse,
    } as MsgDeleteBuyerIdsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteBuyerIdsResponse {
    const message = {
      ...baseMsgDeleteBuyerIdsResponse,
    } as MsgDeleteBuyerIdsResponse;
    return message;
  },

  toJSON(_: MsgDeleteBuyerIdsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteBuyerIdsResponse>
  ): MsgDeleteBuyerIdsResponse {
    const message = {
      ...baseMsgDeleteBuyerIdsResponse,
    } as MsgDeleteBuyerIdsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateBuyerIds(
    request: MsgCreateBuyerIds
  ): Promise<MsgCreateBuyerIdsResponse>;
  UpdateBuyerIds(
    request: MsgUpdateBuyerIds
  ): Promise<MsgUpdateBuyerIdsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteBuyerIds(
    request: MsgDeleteBuyerIds
  ): Promise<MsgDeleteBuyerIdsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateBuyerIds(
    request: MsgCreateBuyerIds
  ): Promise<MsgCreateBuyerIdsResponse> {
    const data = MsgCreateBuyerIds.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Msg",
      "CreateBuyerIds",
      data
    );
    return promise.then((data) =>
      MsgCreateBuyerIdsResponse.decode(new Reader(data))
    );
  }

  UpdateBuyerIds(
    request: MsgUpdateBuyerIds
  ): Promise<MsgUpdateBuyerIdsResponse> {
    const data = MsgUpdateBuyerIds.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Msg",
      "UpdateBuyerIds",
      data
    );
    return promise.then((data) =>
      MsgUpdateBuyerIdsResponse.decode(new Reader(data))
    );
  }

  DeleteBuyerIds(
    request: MsgDeleteBuyerIds
  ): Promise<MsgDeleteBuyerIdsResponse> {
    const data = MsgDeleteBuyerIds.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Msg",
      "DeleteBuyerIds",
      data
    );
    return promise.then((data) =>
      MsgDeleteBuyerIdsResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
