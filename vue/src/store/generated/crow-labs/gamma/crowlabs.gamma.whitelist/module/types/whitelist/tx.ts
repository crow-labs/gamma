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

export interface MsgCreateVoter {
  creator: string;
  accAddr: string;
  status: string;
  pendingVotes: string[];
  previousVotes: string[];
  voterId: string;
}

export interface MsgCreateVoterResponse {}

export interface MsgUpdateVoter {
  creator: string;
  accAddr: string;
  status: string;
  pendingVotes: string[];
  previousVotes: string[];
  voterId: string;
}

export interface MsgUpdateVoterResponse {}

export interface MsgDeleteVoter {
  creator: string;
  accAddr: string;
}

export interface MsgDeleteVoterResponse {}

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

const baseMsgCreateVoter: object = {
  creator: "",
  accAddr: "",
  status: "",
  pendingVotes: "",
  previousVotes: "",
  voterId: "",
};

export const MsgCreateVoter = {
  encode(message: MsgCreateVoter, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.accAddr !== "") {
      writer.uint32(18).string(message.accAddr);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    for (const v of message.pendingVotes) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.previousVotes) {
      writer.uint32(42).string(v!);
    }
    if (message.voterId !== "") {
      writer.uint32(50).string(message.voterId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVoter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVoter } as MsgCreateVoter;
    message.pendingVotes = [];
    message.previousVotes = [];
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
          message.status = reader.string();
          break;
        case 4:
          message.pendingVotes.push(reader.string());
          break;
        case 5:
          message.previousVotes.push(reader.string());
          break;
        case 6:
          message.voterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVoter {
    const message = { ...baseMsgCreateVoter } as MsgCreateVoter;
    message.pendingVotes = [];
    message.previousVotes = [];
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
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.pendingVotes !== undefined && object.pendingVotes !== null) {
      for (const e of object.pendingVotes) {
        message.pendingVotes.push(String(e));
      }
    }
    if (object.previousVotes !== undefined && object.previousVotes !== null) {
      for (const e of object.previousVotes) {
        message.previousVotes.push(String(e));
      }
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    return message;
  },

  toJSON(message: MsgCreateVoter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    message.status !== undefined && (obj.status = message.status);
    if (message.pendingVotes) {
      obj.pendingVotes = message.pendingVotes.map((e) => e);
    } else {
      obj.pendingVotes = [];
    }
    if (message.previousVotes) {
      obj.previousVotes = message.previousVotes.map((e) => e);
    } else {
      obj.previousVotes = [];
    }
    message.voterId !== undefined && (obj.voterId = message.voterId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateVoter>): MsgCreateVoter {
    const message = { ...baseMsgCreateVoter } as MsgCreateVoter;
    message.pendingVotes = [];
    message.previousVotes = [];
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
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.pendingVotes !== undefined && object.pendingVotes !== null) {
      for (const e of object.pendingVotes) {
        message.pendingVotes.push(e);
      }
    }
    if (object.previousVotes !== undefined && object.previousVotes !== null) {
      for (const e of object.previousVotes) {
        message.previousVotes.push(e);
      }
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    return message;
  },
};

const baseMsgCreateVoterResponse: object = {};

export const MsgCreateVoterResponse = {
  encode(_: MsgCreateVoterResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVoterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVoterResponse } as MsgCreateVoterResponse;
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

  fromJSON(_: any): MsgCreateVoterResponse {
    const message = { ...baseMsgCreateVoterResponse } as MsgCreateVoterResponse;
    return message;
  },

  toJSON(_: MsgCreateVoterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateVoterResponse>): MsgCreateVoterResponse {
    const message = { ...baseMsgCreateVoterResponse } as MsgCreateVoterResponse;
    return message;
  },
};

const baseMsgUpdateVoter: object = {
  creator: "",
  accAddr: "",
  status: "",
  pendingVotes: "",
  previousVotes: "",
  voterId: "",
};

export const MsgUpdateVoter = {
  encode(message: MsgUpdateVoter, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.accAddr !== "") {
      writer.uint32(18).string(message.accAddr);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    for (const v of message.pendingVotes) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.previousVotes) {
      writer.uint32(42).string(v!);
    }
    if (message.voterId !== "") {
      writer.uint32(50).string(message.voterId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateVoter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateVoter } as MsgUpdateVoter;
    message.pendingVotes = [];
    message.previousVotes = [];
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
          message.status = reader.string();
          break;
        case 4:
          message.pendingVotes.push(reader.string());
          break;
        case 5:
          message.previousVotes.push(reader.string());
          break;
        case 6:
          message.voterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateVoter {
    const message = { ...baseMsgUpdateVoter } as MsgUpdateVoter;
    message.pendingVotes = [];
    message.previousVotes = [];
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
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.pendingVotes !== undefined && object.pendingVotes !== null) {
      for (const e of object.pendingVotes) {
        message.pendingVotes.push(String(e));
      }
    }
    if (object.previousVotes !== undefined && object.previousVotes !== null) {
      for (const e of object.previousVotes) {
        message.previousVotes.push(String(e));
      }
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateVoter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    message.status !== undefined && (obj.status = message.status);
    if (message.pendingVotes) {
      obj.pendingVotes = message.pendingVotes.map((e) => e);
    } else {
      obj.pendingVotes = [];
    }
    if (message.previousVotes) {
      obj.previousVotes = message.previousVotes.map((e) => e);
    } else {
      obj.previousVotes = [];
    }
    message.voterId !== undefined && (obj.voterId = message.voterId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateVoter>): MsgUpdateVoter {
    const message = { ...baseMsgUpdateVoter } as MsgUpdateVoter;
    message.pendingVotes = [];
    message.previousVotes = [];
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
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.pendingVotes !== undefined && object.pendingVotes !== null) {
      for (const e of object.pendingVotes) {
        message.pendingVotes.push(e);
      }
    }
    if (object.previousVotes !== undefined && object.previousVotes !== null) {
      for (const e of object.previousVotes) {
        message.previousVotes.push(e);
      }
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    return message;
  },
};

const baseMsgUpdateVoterResponse: object = {};

export const MsgUpdateVoterResponse = {
  encode(_: MsgUpdateVoterResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateVoterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateVoterResponse } as MsgUpdateVoterResponse;
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

  fromJSON(_: any): MsgUpdateVoterResponse {
    const message = { ...baseMsgUpdateVoterResponse } as MsgUpdateVoterResponse;
    return message;
  },

  toJSON(_: MsgUpdateVoterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateVoterResponse>): MsgUpdateVoterResponse {
    const message = { ...baseMsgUpdateVoterResponse } as MsgUpdateVoterResponse;
    return message;
  },
};

const baseMsgDeleteVoter: object = { creator: "", accAddr: "" };

export const MsgDeleteVoter = {
  encode(message: MsgDeleteVoter, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.accAddr !== "") {
      writer.uint32(18).string(message.accAddr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteVoter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteVoter } as MsgDeleteVoter;
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

  fromJSON(object: any): MsgDeleteVoter {
    const message = { ...baseMsgDeleteVoter } as MsgDeleteVoter;
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

  toJSON(message: MsgDeleteVoter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteVoter>): MsgDeleteVoter {
    const message = { ...baseMsgDeleteVoter } as MsgDeleteVoter;
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

const baseMsgDeleteVoterResponse: object = {};

export const MsgDeleteVoterResponse = {
  encode(_: MsgDeleteVoterResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteVoterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteVoterResponse } as MsgDeleteVoterResponse;
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

  fromJSON(_: any): MsgDeleteVoterResponse {
    const message = { ...baseMsgDeleteVoterResponse } as MsgDeleteVoterResponse;
    return message;
  },

  toJSON(_: MsgDeleteVoterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteVoterResponse>): MsgDeleteVoterResponse {
    const message = { ...baseMsgDeleteVoterResponse } as MsgDeleteVoterResponse;
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
  DeleteBuyers(request: MsgDeleteBuyers): Promise<MsgDeleteBuyersResponse>;
  CreateVoter(request: MsgCreateVoter): Promise<MsgCreateVoterResponse>;
  UpdateVoter(request: MsgUpdateVoter): Promise<MsgUpdateVoterResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteVoter(request: MsgDeleteVoter): Promise<MsgDeleteVoterResponse>;
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

  CreateVoter(request: MsgCreateVoter): Promise<MsgCreateVoterResponse> {
    const data = MsgCreateVoter.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Msg",
      "CreateVoter",
      data
    );
    return promise.then((data) =>
      MsgCreateVoterResponse.decode(new Reader(data))
    );
  }

  UpdateVoter(request: MsgUpdateVoter): Promise<MsgUpdateVoterResponse> {
    const data = MsgUpdateVoter.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Msg",
      "UpdateVoter",
      data
    );
    return promise.then((data) =>
      MsgUpdateVoterResponse.decode(new Reader(data))
    );
  }

  DeleteVoter(request: MsgDeleteVoter): Promise<MsgDeleteVoterResponse> {
    const data = MsgDeleteVoter.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Msg",
      "DeleteVoter",
      data
    );
    return promise.then((data) =>
      MsgDeleteVoterResponse.decode(new Reader(data))
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
