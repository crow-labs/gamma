/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.gamma.escrow";

export interface Crow {
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
  creator: string;
}

const baseCrow: object = {
  listingId: "",
  orderId: "",
  buyerId: "",
  sellerId: "",
  status: "",
  timeout: "",
  disputeId: "",
  creator: "",
};

export const Crow = {
  encode(message: Crow, writer: Writer = Writer.create()): Writer {
    if (message.listingId !== "") {
      writer.uint32(10).string(message.listingId);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    if (message.buyerId !== "") {
      writer.uint32(26).string(message.buyerId);
    }
    if (message.sellerId !== "") {
      writer.uint32(34).string(message.sellerId);
    }
    for (const v of message.buyerCollateral) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.sellerCollateral) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.buyerFunds) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(66).string(message.status);
    }
    for (const v of message.timeout) {
      writer.uint32(74).string(v!);
    }
    if (message.disputeId !== "") {
      writer.uint32(82).string(message.disputeId);
    }
    if (message.creator !== "") {
      writer.uint32(90).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Crow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCrow } as Crow;
    message.buyerCollateral = [];
    message.sellerCollateral = [];
    message.buyerFunds = [];
    message.timeout = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listingId = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        case 3:
          message.buyerId = reader.string();
          break;
        case 4:
          message.sellerId = reader.string();
          break;
        case 5:
          message.buyerCollateral.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.sellerCollateral.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.buyerFunds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.status = reader.string();
          break;
        case 9:
          message.timeout.push(reader.string());
          break;
        case 10:
          message.disputeId = reader.string();
          break;
        case 11:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Crow {
    const message = { ...baseCrow } as Crow;
    message.buyerCollateral = [];
    message.sellerCollateral = [];
    message.buyerFunds = [];
    message.timeout = [];
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Crow): unknown {
    const obj: any = {};
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
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Crow>): Crow {
    const message = { ...baseCrow } as Crow;
    message.buyerCollateral = [];
    message.sellerCollateral = [];
    message.buyerFunds = [];
    message.timeout = [];
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

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
