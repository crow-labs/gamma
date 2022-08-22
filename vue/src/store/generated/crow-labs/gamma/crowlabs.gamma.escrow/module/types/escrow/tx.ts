/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "crowlabs.gamma.escrow";

export interface MsgCreateCrow {
  creator: string;
  listingId: string;
  orderId: string;
  buyerId: string;
  sellerId: string;
  buyerCollateral: Coin[];
  sellerCollateral: Coin[];
  buyerFunds: Coin[];
  status: string;
  timeout: string[];
  disputeId: string;
}

export interface MsgCreateCrowResponse {}

export interface MsgUpdateCrow {
  creator: string;
  listingId: string;
  orderId: string;
  buyerId: string;
  sellerId: string;
  buyerCollateral: Coin[];
  sellerCollateral: Coin[];
  buyerFunds: Coin[];
  status: string;
  timeout: string[];
  disputeId: string;
}

export interface MsgUpdateCrowResponse {}

export interface MsgDeleteCrow {
  creator: string;
  listingId: string;
  orderId: string;
}

export interface MsgDeleteCrowResponse {}

export interface MsgCreateVote {
  creator: string;
  voterId: string;
  disputeId: string;
  voteId: string;
  buyerGuilty: boolean;
  sellerGuilty: boolean;
  refundToBuyer: Coin[];
  sendToSeller: Coin[];
  buyerPunishment: string;
  sellerPunishment: string;
}

export interface MsgCreateVoteResponse {}

export interface MsgUpdateVote {
  creator: string;
  voterId: string;
  disputeId: string;
  voteId: string;
  buyerGuilty: boolean;
  sellerGuilty: boolean;
  refundToBuyer: Coin[];
  sendToSeller: Coin[];
  buyerPunishment: string;
  sellerPunishment: string;
}

export interface MsgUpdateVoteResponse {}

export interface MsgDeleteVote {
  creator: string;
  voterId: string;
  disputeId: string;
}

export interface MsgDeleteVoteResponse {}

const baseMsgCreateCrow: object = {
  creator: "",
  listingId: "",
  orderId: "",
  buyerId: "",
  sellerId: "",
  status: "",
  timeout: "",
  disputeId: "",
};

export const MsgCreateCrow = {
  encode(message: MsgCreateCrow, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.listingId !== "") {
      writer.uint32(18).string(message.listingId);
    }
    if (message.orderId !== "") {
      writer.uint32(26).string(message.orderId);
    }
    if (message.buyerId !== "") {
      writer.uint32(34).string(message.buyerId);
    }
    if (message.sellerId !== "") {
      writer.uint32(42).string(message.sellerId);
    }
    for (const v of message.buyerCollateral) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.sellerCollateral) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.buyerFunds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(74).string(message.status);
    }
    for (const v of message.timeout) {
      writer.uint32(82).string(v!);
    }
    if (message.disputeId !== "") {
      writer.uint32(90).string(message.disputeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCrow } as MsgCreateCrow;
    message.buyerCollateral = [];
    message.sellerCollateral = [];
    message.buyerFunds = [];
    message.timeout = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.listingId = reader.string();
          break;
        case 3:
          message.orderId = reader.string();
          break;
        case 4:
          message.buyerId = reader.string();
          break;
        case 5:
          message.sellerId = reader.string();
          break;
        case 6:
          message.buyerCollateral.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.sellerCollateral.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.buyerFunds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.status = reader.string();
          break;
        case 10:
          message.timeout.push(reader.string());
          break;
        case 11:
          message.disputeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCrow {
    const message = { ...baseMsgCreateCrow } as MsgCreateCrow;
    message.buyerCollateral = [];
    message.sellerCollateral = [];
    message.buyerFunds = [];
    message.timeout = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
    }
    if (
      object.buyerCollateral !== undefined &&
      object.buyerCollateral !== null
    ) {
      for (const e of object.buyerCollateral) {
        message.buyerCollateral.push(Coin.fromJSON(e));
      }
    }
    if (
      object.sellerCollateral !== undefined &&
      object.sellerCollateral !== null
    ) {
      for (const e of object.sellerCollateral) {
        message.sellerCollateral.push(Coin.fromJSON(e));
      }
    }
    if (object.buyerFunds !== undefined && object.buyerFunds !== null) {
      for (const e of object.buyerFunds) {
        message.buyerFunds.push(Coin.fromJSON(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      for (const e of object.timeout) {
        message.timeout.push(String(e));
      }
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCrow): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.listingId !== undefined && (obj.listingId = message.listingId);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    if (message.buyerCollateral) {
      obj.buyerCollateral = message.buyerCollateral.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.buyerCollateral = [];
    }
    if (message.sellerCollateral) {
      obj.sellerCollateral = message.sellerCollateral.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.sellerCollateral = [];
    }
    if (message.buyerFunds) {
      obj.buyerFunds = message.buyerFunds.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.buyerFunds = [];
    }
    message.status !== undefined && (obj.status = message.status);
    if (message.timeout) {
      obj.timeout = message.timeout.map((e) => e);
    } else {
      obj.timeout = [];
    }
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCrow>): MsgCreateCrow {
    const message = { ...baseMsgCreateCrow } as MsgCreateCrow;
    message.buyerCollateral = [];
    message.sellerCollateral = [];
    message.buyerFunds = [];
    message.timeout = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
    }
    if (
      object.buyerCollateral !== undefined &&
      object.buyerCollateral !== null
    ) {
      for (const e of object.buyerCollateral) {
        message.buyerCollateral.push(Coin.fromPartial(e));
      }
    }
    if (
      object.sellerCollateral !== undefined &&
      object.sellerCollateral !== null
    ) {
      for (const e of object.sellerCollateral) {
        message.sellerCollateral.push(Coin.fromPartial(e));
      }
    }
    if (object.buyerFunds !== undefined && object.buyerFunds !== null) {
      for (const e of object.buyerFunds) {
        message.buyerFunds.push(Coin.fromPartial(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      for (const e of object.timeout) {
        message.timeout.push(e);
      }
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    return message;
  },
};

const baseMsgCreateCrowResponse: object = {};

export const MsgCreateCrowResponse = {
  encode(_: MsgCreateCrowResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCrowResponse } as MsgCreateCrowResponse;
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

  fromJSON(_: any): MsgCreateCrowResponse {
    const message = { ...baseMsgCreateCrowResponse } as MsgCreateCrowResponse;
    return message;
  },

  toJSON(_: MsgCreateCrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateCrowResponse>): MsgCreateCrowResponse {
    const message = { ...baseMsgCreateCrowResponse } as MsgCreateCrowResponse;
    return message;
  },
};

const baseMsgUpdateCrow: object = {
  creator: "",
  listingId: "",
  orderId: "",
  buyerId: "",
  sellerId: "",
  status: "",
  timeout: "",
  disputeId: "",
};

export const MsgUpdateCrow = {
  encode(message: MsgUpdateCrow, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.listingId !== "") {
      writer.uint32(18).string(message.listingId);
    }
    if (message.orderId !== "") {
      writer.uint32(26).string(message.orderId);
    }
    if (message.buyerId !== "") {
      writer.uint32(34).string(message.buyerId);
    }
    if (message.sellerId !== "") {
      writer.uint32(42).string(message.sellerId);
    }
    for (const v of message.buyerCollateral) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.sellerCollateral) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.buyerFunds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(74).string(message.status);
    }
    for (const v of message.timeout) {
      writer.uint32(82).string(v!);
    }
    if (message.disputeId !== "") {
      writer.uint32(90).string(message.disputeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCrow } as MsgUpdateCrow;
    message.buyerCollateral = [];
    message.sellerCollateral = [];
    message.buyerFunds = [];
    message.timeout = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.listingId = reader.string();
          break;
        case 3:
          message.orderId = reader.string();
          break;
        case 4:
          message.buyerId = reader.string();
          break;
        case 5:
          message.sellerId = reader.string();
          break;
        case 6:
          message.buyerCollateral.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.sellerCollateral.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.buyerFunds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.status = reader.string();
          break;
        case 10:
          message.timeout.push(reader.string());
          break;
        case 11:
          message.disputeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCrow {
    const message = { ...baseMsgUpdateCrow } as MsgUpdateCrow;
    message.buyerCollateral = [];
    message.sellerCollateral = [];
    message.buyerFunds = [];
    message.timeout = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
    }
    if (
      object.buyerCollateral !== undefined &&
      object.buyerCollateral !== null
    ) {
      for (const e of object.buyerCollateral) {
        message.buyerCollateral.push(Coin.fromJSON(e));
      }
    }
    if (
      object.sellerCollateral !== undefined &&
      object.sellerCollateral !== null
    ) {
      for (const e of object.sellerCollateral) {
        message.sellerCollateral.push(Coin.fromJSON(e));
      }
    }
    if (object.buyerFunds !== undefined && object.buyerFunds !== null) {
      for (const e of object.buyerFunds) {
        message.buyerFunds.push(Coin.fromJSON(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      for (const e of object.timeout) {
        message.timeout.push(String(e));
      }
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateCrow): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.listingId !== undefined && (obj.listingId = message.listingId);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    if (message.buyerCollateral) {
      obj.buyerCollateral = message.buyerCollateral.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.buyerCollateral = [];
    }
    if (message.sellerCollateral) {
      obj.sellerCollateral = message.sellerCollateral.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.sellerCollateral = [];
    }
    if (message.buyerFunds) {
      obj.buyerFunds = message.buyerFunds.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.buyerFunds = [];
    }
    message.status !== undefined && (obj.status = message.status);
    if (message.timeout) {
      obj.timeout = message.timeout.map((e) => e);
    } else {
      obj.timeout = [];
    }
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateCrow>): MsgUpdateCrow {
    const message = { ...baseMsgUpdateCrow } as MsgUpdateCrow;
    message.buyerCollateral = [];
    message.sellerCollateral = [];
    message.buyerFunds = [];
    message.timeout = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
    }
    if (
      object.buyerCollateral !== undefined &&
      object.buyerCollateral !== null
    ) {
      for (const e of object.buyerCollateral) {
        message.buyerCollateral.push(Coin.fromPartial(e));
      }
    }
    if (
      object.sellerCollateral !== undefined &&
      object.sellerCollateral !== null
    ) {
      for (const e of object.sellerCollateral) {
        message.sellerCollateral.push(Coin.fromPartial(e));
      }
    }
    if (object.buyerFunds !== undefined && object.buyerFunds !== null) {
      for (const e of object.buyerFunds) {
        message.buyerFunds.push(Coin.fromPartial(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      for (const e of object.timeout) {
        message.timeout.push(e);
      }
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    return message;
  },
};

const baseMsgUpdateCrowResponse: object = {};

export const MsgUpdateCrowResponse = {
  encode(_: MsgUpdateCrowResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCrowResponse } as MsgUpdateCrowResponse;
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

  fromJSON(_: any): MsgUpdateCrowResponse {
    const message = { ...baseMsgUpdateCrowResponse } as MsgUpdateCrowResponse;
    return message;
  },

  toJSON(_: MsgUpdateCrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateCrowResponse>): MsgUpdateCrowResponse {
    const message = { ...baseMsgUpdateCrowResponse } as MsgUpdateCrowResponse;
    return message;
  },
};

const baseMsgDeleteCrow: object = { creator: "", listingId: "", orderId: "" };

export const MsgDeleteCrow = {
  encode(message: MsgDeleteCrow, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.listingId !== "") {
      writer.uint32(18).string(message.listingId);
    }
    if (message.orderId !== "") {
      writer.uint32(26).string(message.orderId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteCrow } as MsgDeleteCrow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.listingId = reader.string();
          break;
        case 3:
          message.orderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCrow {
    const message = { ...baseMsgDeleteCrow } as MsgDeleteCrow;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteCrow): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.listingId !== undefined && (obj.listingId = message.listingId);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteCrow>): MsgDeleteCrow {
    const message = { ...baseMsgDeleteCrow } as MsgDeleteCrow;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    return message;
  },
};

const baseMsgDeleteCrowResponse: object = {};

export const MsgDeleteCrowResponse = {
  encode(_: MsgDeleteCrowResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteCrowResponse } as MsgDeleteCrowResponse;
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

  fromJSON(_: any): MsgDeleteCrowResponse {
    const message = { ...baseMsgDeleteCrowResponse } as MsgDeleteCrowResponse;
    return message;
  },

  toJSON(_: MsgDeleteCrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteCrowResponse>): MsgDeleteCrowResponse {
    const message = { ...baseMsgDeleteCrowResponse } as MsgDeleteCrowResponse;
    return message;
  },
};

const baseMsgCreateVote: object = {
  creator: "",
  voterId: "",
  disputeId: "",
  voteId: "",
  buyerGuilty: false,
  sellerGuilty: false,
  buyerPunishment: "",
  sellerPunishment: "",
};

export const MsgCreateVote = {
  encode(message: MsgCreateVote, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.voterId !== "") {
      writer.uint32(18).string(message.voterId);
    }
    if (message.disputeId !== "") {
      writer.uint32(26).string(message.disputeId);
    }
    if (message.voteId !== "") {
      writer.uint32(34).string(message.voteId);
    }
    if (message.buyerGuilty === true) {
      writer.uint32(40).bool(message.buyerGuilty);
    }
    if (message.sellerGuilty === true) {
      writer.uint32(48).bool(message.sellerGuilty);
    }
    for (const v of message.refundToBuyer) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.sendToSeller) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.buyerPunishment !== "") {
      writer.uint32(74).string(message.buyerPunishment);
    }
    if (message.sellerPunishment !== "") {
      writer.uint32(82).string(message.sellerPunishment);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.voterId = reader.string();
          break;
        case 3:
          message.disputeId = reader.string();
          break;
        case 4:
          message.voteId = reader.string();
          break;
        case 5:
          message.buyerGuilty = reader.bool();
          break;
        case 6:
          message.sellerGuilty = reader.bool();
          break;
        case 7:
          message.refundToBuyer.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.sendToSeller.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.buyerPunishment = reader.string();
          break;
        case 10:
          message.sellerPunishment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVote {
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = String(object.voteId);
    } else {
      message.voteId = "";
    }
    if (object.buyerGuilty !== undefined && object.buyerGuilty !== null) {
      message.buyerGuilty = Boolean(object.buyerGuilty);
    } else {
      message.buyerGuilty = false;
    }
    if (object.sellerGuilty !== undefined && object.sellerGuilty !== null) {
      message.sellerGuilty = Boolean(object.sellerGuilty);
    } else {
      message.sellerGuilty = false;
    }
    if (object.refundToBuyer !== undefined && object.refundToBuyer !== null) {
      for (const e of object.refundToBuyer) {
        message.refundToBuyer.push(Coin.fromJSON(e));
      }
    }
    if (object.sendToSeller !== undefined && object.sendToSeller !== null) {
      for (const e of object.sendToSeller) {
        message.sendToSeller.push(Coin.fromJSON(e));
      }
    }
    if (
      object.buyerPunishment !== undefined &&
      object.buyerPunishment !== null
    ) {
      message.buyerPunishment = String(object.buyerPunishment);
    } else {
      message.buyerPunishment = "";
    }
    if (
      object.sellerPunishment !== undefined &&
      object.sellerPunishment !== null
    ) {
      message.sellerPunishment = String(object.sellerPunishment);
    } else {
      message.sellerPunishment = "";
    }
    return message;
  },

  toJSON(message: MsgCreateVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.voteId !== undefined && (obj.voteId = message.voteId);
    message.buyerGuilty !== undefined &&
      (obj.buyerGuilty = message.buyerGuilty);
    message.sellerGuilty !== undefined &&
      (obj.sellerGuilty = message.sellerGuilty);
    if (message.refundToBuyer) {
      obj.refundToBuyer = message.refundToBuyer.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.refundToBuyer = [];
    }
    if (message.sendToSeller) {
      obj.sendToSeller = message.sendToSeller.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.sendToSeller = [];
    }
    message.buyerPunishment !== undefined &&
      (obj.buyerPunishment = message.buyerPunishment);
    message.sellerPunishment !== undefined &&
      (obj.sellerPunishment = message.sellerPunishment);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateVote>): MsgCreateVote {
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = object.voteId;
    } else {
      message.voteId = "";
    }
    if (object.buyerGuilty !== undefined && object.buyerGuilty !== null) {
      message.buyerGuilty = object.buyerGuilty;
    } else {
      message.buyerGuilty = false;
    }
    if (object.sellerGuilty !== undefined && object.sellerGuilty !== null) {
      message.sellerGuilty = object.sellerGuilty;
    } else {
      message.sellerGuilty = false;
    }
    if (object.refundToBuyer !== undefined && object.refundToBuyer !== null) {
      for (const e of object.refundToBuyer) {
        message.refundToBuyer.push(Coin.fromPartial(e));
      }
    }
    if (object.sendToSeller !== undefined && object.sendToSeller !== null) {
      for (const e of object.sendToSeller) {
        message.sendToSeller.push(Coin.fromPartial(e));
      }
    }
    if (
      object.buyerPunishment !== undefined &&
      object.buyerPunishment !== null
    ) {
      message.buyerPunishment = object.buyerPunishment;
    } else {
      message.buyerPunishment = "";
    }
    if (
      object.sellerPunishment !== undefined &&
      object.sellerPunishment !== null
    ) {
      message.sellerPunishment = object.sellerPunishment;
    } else {
      message.sellerPunishment = "";
    }
    return message;
  },
};

const baseMsgCreateVoteResponse: object = {};

export const MsgCreateVoteResponse = {
  encode(_: MsgCreateVoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
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

  fromJSON(_: any): MsgCreateVoteResponse {
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
    return message;
  },

  toJSON(_: MsgCreateVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateVoteResponse>): MsgCreateVoteResponse {
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
    return message;
  },
};

const baseMsgUpdateVote: object = {
  creator: "",
  voterId: "",
  disputeId: "",
  voteId: "",
  buyerGuilty: false,
  sellerGuilty: false,
  buyerPunishment: "",
  sellerPunishment: "",
};

export const MsgUpdateVote = {
  encode(message: MsgUpdateVote, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.voterId !== "") {
      writer.uint32(18).string(message.voterId);
    }
    if (message.disputeId !== "") {
      writer.uint32(26).string(message.disputeId);
    }
    if (message.voteId !== "") {
      writer.uint32(34).string(message.voteId);
    }
    if (message.buyerGuilty === true) {
      writer.uint32(40).bool(message.buyerGuilty);
    }
    if (message.sellerGuilty === true) {
      writer.uint32(48).bool(message.sellerGuilty);
    }
    for (const v of message.refundToBuyer) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.sendToSeller) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.buyerPunishment !== "") {
      writer.uint32(74).string(message.buyerPunishment);
    }
    if (message.sellerPunishment !== "") {
      writer.uint32(82).string(message.sellerPunishment);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateVote } as MsgUpdateVote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.voterId = reader.string();
          break;
        case 3:
          message.disputeId = reader.string();
          break;
        case 4:
          message.voteId = reader.string();
          break;
        case 5:
          message.buyerGuilty = reader.bool();
          break;
        case 6:
          message.sellerGuilty = reader.bool();
          break;
        case 7:
          message.refundToBuyer.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.sendToSeller.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.buyerPunishment = reader.string();
          break;
        case 10:
          message.sellerPunishment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateVote {
    const message = { ...baseMsgUpdateVote } as MsgUpdateVote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = String(object.voteId);
    } else {
      message.voteId = "";
    }
    if (object.buyerGuilty !== undefined && object.buyerGuilty !== null) {
      message.buyerGuilty = Boolean(object.buyerGuilty);
    } else {
      message.buyerGuilty = false;
    }
    if (object.sellerGuilty !== undefined && object.sellerGuilty !== null) {
      message.sellerGuilty = Boolean(object.sellerGuilty);
    } else {
      message.sellerGuilty = false;
    }
    if (object.refundToBuyer !== undefined && object.refundToBuyer !== null) {
      for (const e of object.refundToBuyer) {
        message.refundToBuyer.push(Coin.fromJSON(e));
      }
    }
    if (object.sendToSeller !== undefined && object.sendToSeller !== null) {
      for (const e of object.sendToSeller) {
        message.sendToSeller.push(Coin.fromJSON(e));
      }
    }
    if (
      object.buyerPunishment !== undefined &&
      object.buyerPunishment !== null
    ) {
      message.buyerPunishment = String(object.buyerPunishment);
    } else {
      message.buyerPunishment = "";
    }
    if (
      object.sellerPunishment !== undefined &&
      object.sellerPunishment !== null
    ) {
      message.sellerPunishment = String(object.sellerPunishment);
    } else {
      message.sellerPunishment = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.voteId !== undefined && (obj.voteId = message.voteId);
    message.buyerGuilty !== undefined &&
      (obj.buyerGuilty = message.buyerGuilty);
    message.sellerGuilty !== undefined &&
      (obj.sellerGuilty = message.sellerGuilty);
    if (message.refundToBuyer) {
      obj.refundToBuyer = message.refundToBuyer.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.refundToBuyer = [];
    }
    if (message.sendToSeller) {
      obj.sendToSeller = message.sendToSeller.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.sendToSeller = [];
    }
    message.buyerPunishment !== undefined &&
      (obj.buyerPunishment = message.buyerPunishment);
    message.sellerPunishment !== undefined &&
      (obj.sellerPunishment = message.sellerPunishment);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateVote>): MsgUpdateVote {
    const message = { ...baseMsgUpdateVote } as MsgUpdateVote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = object.voteId;
    } else {
      message.voteId = "";
    }
    if (object.buyerGuilty !== undefined && object.buyerGuilty !== null) {
      message.buyerGuilty = object.buyerGuilty;
    } else {
      message.buyerGuilty = false;
    }
    if (object.sellerGuilty !== undefined && object.sellerGuilty !== null) {
      message.sellerGuilty = object.sellerGuilty;
    } else {
      message.sellerGuilty = false;
    }
    if (object.refundToBuyer !== undefined && object.refundToBuyer !== null) {
      for (const e of object.refundToBuyer) {
        message.refundToBuyer.push(Coin.fromPartial(e));
      }
    }
    if (object.sendToSeller !== undefined && object.sendToSeller !== null) {
      for (const e of object.sendToSeller) {
        message.sendToSeller.push(Coin.fromPartial(e));
      }
    }
    if (
      object.buyerPunishment !== undefined &&
      object.buyerPunishment !== null
    ) {
      message.buyerPunishment = object.buyerPunishment;
    } else {
      message.buyerPunishment = "";
    }
    if (
      object.sellerPunishment !== undefined &&
      object.sellerPunishment !== null
    ) {
      message.sellerPunishment = object.sellerPunishment;
    } else {
      message.sellerPunishment = "";
    }
    return message;
  },
};

const baseMsgUpdateVoteResponse: object = {};

export const MsgUpdateVoteResponse = {
  encode(_: MsgUpdateVoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateVoteResponse } as MsgUpdateVoteResponse;
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

  fromJSON(_: any): MsgUpdateVoteResponse {
    const message = { ...baseMsgUpdateVoteResponse } as MsgUpdateVoteResponse;
    return message;
  },

  toJSON(_: MsgUpdateVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateVoteResponse>): MsgUpdateVoteResponse {
    const message = { ...baseMsgUpdateVoteResponse } as MsgUpdateVoteResponse;
    return message;
  },
};

const baseMsgDeleteVote: object = { creator: "", voterId: "", disputeId: "" };

export const MsgDeleteVote = {
  encode(message: MsgDeleteVote, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.voterId !== "") {
      writer.uint32(18).string(message.voterId);
    }
    if (message.disputeId !== "") {
      writer.uint32(26).string(message.disputeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteVote } as MsgDeleteVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.voterId = reader.string();
          break;
        case 3:
          message.disputeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteVote {
    const message = { ...baseMsgDeleteVote } as MsgDeleteVote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteVote>): MsgDeleteVote {
    const message = { ...baseMsgDeleteVote } as MsgDeleteVote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    return message;
  },
};

const baseMsgDeleteVoteResponse: object = {};

export const MsgDeleteVoteResponse = {
  encode(_: MsgDeleteVoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteVoteResponse } as MsgDeleteVoteResponse;
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

  fromJSON(_: any): MsgDeleteVoteResponse {
    const message = { ...baseMsgDeleteVoteResponse } as MsgDeleteVoteResponse;
    return message;
  },

  toJSON(_: MsgDeleteVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteVoteResponse>): MsgDeleteVoteResponse {
    const message = { ...baseMsgDeleteVoteResponse } as MsgDeleteVoteResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateCrow(request: MsgCreateCrow): Promise<MsgCreateCrowResponse>;
  UpdateCrow(request: MsgUpdateCrow): Promise<MsgUpdateCrowResponse>;
  DeleteCrow(request: MsgDeleteCrow): Promise<MsgDeleteCrowResponse>;
  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse>;
  UpdateVote(request: MsgUpdateVote): Promise<MsgUpdateVoteResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteVote(request: MsgDeleteVote): Promise<MsgDeleteVoteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateCrow(request: MsgCreateCrow): Promise<MsgCreateCrowResponse> {
    const data = MsgCreateCrow.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Msg",
      "CreateCrow",
      data
    );
    return promise.then((data) =>
      MsgCreateCrowResponse.decode(new Reader(data))
    );
  }

  UpdateCrow(request: MsgUpdateCrow): Promise<MsgUpdateCrowResponse> {
    const data = MsgUpdateCrow.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Msg",
      "UpdateCrow",
      data
    );
    return promise.then((data) =>
      MsgUpdateCrowResponse.decode(new Reader(data))
    );
  }

  DeleteCrow(request: MsgDeleteCrow): Promise<MsgDeleteCrowResponse> {
    const data = MsgDeleteCrow.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Msg",
      "DeleteCrow",
      data
    );
    return promise.then((data) =>
      MsgDeleteCrowResponse.decode(new Reader(data))
    );
  }

  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse> {
    const data = MsgCreateVote.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Msg",
      "CreateVote",
      data
    );
    return promise.then((data) =>
      MsgCreateVoteResponse.decode(new Reader(data))
    );
  }

  UpdateVote(request: MsgUpdateVote): Promise<MsgUpdateVoteResponse> {
    const data = MsgUpdateVote.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Msg",
      "UpdateVote",
      data
    );
    return promise.then((data) =>
      MsgUpdateVoteResponse.decode(new Reader(data))
    );
  }

  DeleteVote(request: MsgDeleteVote): Promise<MsgDeleteVoteResponse> {
    const data = MsgDeleteVote.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Msg",
      "DeleteVote",
      data
    );
    return promise.then((data) =>
      MsgDeleteVoteResponse.decode(new Reader(data))
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
