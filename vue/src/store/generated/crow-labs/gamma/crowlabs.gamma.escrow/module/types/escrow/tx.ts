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

/** Msg defines the Msg service. */
export interface Msg {
  CreateCrow(request: MsgCreateCrow): Promise<MsgCreateCrowResponse>;
  UpdateCrow(request: MsgUpdateCrow): Promise<MsgUpdateCrowResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteCrow(request: MsgDeleteCrow): Promise<MsgDeleteCrowResponse>;
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
