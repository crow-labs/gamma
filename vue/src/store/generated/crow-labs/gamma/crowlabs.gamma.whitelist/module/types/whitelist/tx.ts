/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Buyer } from "../whitelist/buyer";

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

export interface MsgCreateBuyers {
  creator: string;
  buyerId: string;
  buyer: Buyer | undefined;
}

export interface MsgCreateBuyersResponse {}

export interface MsgUpdateBuyers {
  creator: string;
  buyerId: string;
  buyer: Buyer | undefined;
}

export interface MsgUpdateBuyersResponse {}

export interface MsgDeleteBuyers {
  creator: string;
  buyerId: string;
}

export interface MsgDeleteBuyersResponse {}

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

const baseMsgCreateBuyers: object = { creator: "", buyerId: "" };

export const MsgCreateBuyers = {
  encode(message: MsgCreateBuyers, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.buyerId !== "") {
      writer.uint32(18).string(message.buyerId);
    }
    if (message.buyer !== undefined) {
      Buyer.encode(message.buyer, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBuyers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBuyers } as MsgCreateBuyers;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.buyerId = reader.string();
          break;
        case 3:
          message.buyer = Buyer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBuyers {
    const message = { ...baseMsgCreateBuyers } as MsgCreateBuyers;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = Buyer.fromJSON(object.buyer);
    } else {
      message.buyer = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateBuyers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.buyer !== undefined &&
      (obj.buyer = message.buyer ? Buyer.toJSON(message.buyer) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBuyers>): MsgCreateBuyers {
    const message = { ...baseMsgCreateBuyers } as MsgCreateBuyers;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = Buyer.fromPartial(object.buyer);
    } else {
      message.buyer = undefined;
    }
    return message;
  },
};

const baseMsgCreateBuyersResponse: object = {};

export const MsgCreateBuyersResponse = {
  encode(_: MsgCreateBuyersResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBuyersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateBuyersResponse,
    } as MsgCreateBuyersResponse;
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

  fromJSON(_: any): MsgCreateBuyersResponse {
    const message = {
      ...baseMsgCreateBuyersResponse,
    } as MsgCreateBuyersResponse;
    return message;
  },

  toJSON(_: MsgCreateBuyersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateBuyersResponse>
  ): MsgCreateBuyersResponse {
    const message = {
      ...baseMsgCreateBuyersResponse,
    } as MsgCreateBuyersResponse;
    return message;
  },
};

const baseMsgUpdateBuyers: object = { creator: "", buyerId: "" };

export const MsgUpdateBuyers = {
  encode(message: MsgUpdateBuyers, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.buyerId !== "") {
      writer.uint32(18).string(message.buyerId);
    }
    if (message.buyer !== undefined) {
      Buyer.encode(message.buyer, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBuyers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBuyers } as MsgUpdateBuyers;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.buyerId = reader.string();
          break;
        case 3:
          message.buyer = Buyer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBuyers {
    const message = { ...baseMsgUpdateBuyers } as MsgUpdateBuyers;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = Buyer.fromJSON(object.buyer);
    } else {
      message.buyer = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateBuyers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.buyer !== undefined &&
      (obj.buyer = message.buyer ? Buyer.toJSON(message.buyer) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateBuyers>): MsgUpdateBuyers {
    const message = { ...baseMsgUpdateBuyers } as MsgUpdateBuyers;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = Buyer.fromPartial(object.buyer);
    } else {
      message.buyer = undefined;
    }
    return message;
  },
};

const baseMsgUpdateBuyersResponse: object = {};

export const MsgUpdateBuyersResponse = {
  encode(_: MsgUpdateBuyersResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBuyersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateBuyersResponse,
    } as MsgUpdateBuyersResponse;
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

  fromJSON(_: any): MsgUpdateBuyersResponse {
    const message = {
      ...baseMsgUpdateBuyersResponse,
    } as MsgUpdateBuyersResponse;
    return message;
  },

  toJSON(_: MsgUpdateBuyersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateBuyersResponse>
  ): MsgUpdateBuyersResponse {
    const message = {
      ...baseMsgUpdateBuyersResponse,
    } as MsgUpdateBuyersResponse;
    return message;
  },
};

const baseMsgDeleteBuyers: object = { creator: "", buyerId: "" };

export const MsgDeleteBuyers = {
  encode(message: MsgDeleteBuyers, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.buyerId !== "") {
      writer.uint32(18).string(message.buyerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBuyers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteBuyers } as MsgDeleteBuyers;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.buyerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteBuyers {
    const message = { ...baseMsgDeleteBuyers } as MsgDeleteBuyers;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteBuyers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteBuyers>): MsgDeleteBuyers {
    const message = { ...baseMsgDeleteBuyers } as MsgDeleteBuyers;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    return message;
  },
};

const baseMsgDeleteBuyersResponse: object = {};

export const MsgDeleteBuyersResponse = {
  encode(_: MsgDeleteBuyersResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBuyersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteBuyersResponse,
    } as MsgDeleteBuyersResponse;
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

  fromJSON(_: any): MsgDeleteBuyersResponse {
    const message = {
      ...baseMsgDeleteBuyersResponse,
    } as MsgDeleteBuyersResponse;
    return message;
  },

  toJSON(_: MsgDeleteBuyersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteBuyersResponse>
  ): MsgDeleteBuyersResponse {
    const message = {
      ...baseMsgDeleteBuyersResponse,
    } as MsgDeleteBuyersResponse;
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
  DeleteBuyerIds(
    request: MsgDeleteBuyerIds
  ): Promise<MsgDeleteBuyerIdsResponse>;
  CreateBuyers(request: MsgCreateBuyers): Promise<MsgCreateBuyersResponse>;
  UpdateBuyers(request: MsgUpdateBuyers): Promise<MsgUpdateBuyersResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteBuyers(request: MsgDeleteBuyers): Promise<MsgDeleteBuyersResponse>;
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

  CreateBuyers(request: MsgCreateBuyers): Promise<MsgCreateBuyersResponse> {
    const data = MsgCreateBuyers.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Msg",
      "CreateBuyers",
      data
    );
    return promise.then((data) =>
      MsgCreateBuyersResponse.decode(new Reader(data))
    );
  }

  UpdateBuyers(request: MsgUpdateBuyers): Promise<MsgUpdateBuyersResponse> {
    const data = MsgUpdateBuyers.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Msg",
      "UpdateBuyers",
      data
    );
    return promise.then((data) =>
      MsgUpdateBuyersResponse.decode(new Reader(data))
    );
  }

  DeleteBuyers(request: MsgDeleteBuyers): Promise<MsgDeleteBuyersResponse> {
    const data = MsgDeleteBuyers.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Msg",
      "DeleteBuyers",
      data
    );
    return promise.then((data) =>
      MsgDeleteBuyersResponse.decode(new Reader(data))
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
