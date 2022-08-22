/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "crowlabs.gamma.market";

export interface Listing {
  prodId: string;
  listingId: string;
  title: string;
  desc: string;
  price: Coin | undefined;
  status: string;
  quantity: number;
  pendingOrders: string[];
  completedOrders: string[];
  creator: string;
}

const baseListing: object = {
  prodId: "",
  listingId: "",
  title: "",
  desc: "",
  status: "",
  quantity: 0,
  pendingOrders: "",
  completedOrders: "",
  creator: "",
};

export const Listing = {
  encode(message: Listing, writer: Writer = Writer.create()): Writer {
    if (message.prodId !== "") {
      writer.uint32(10).string(message.prodId);
    }
    if (message.listingId !== "") {
      writer.uint32(18).string(message.listingId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.desc !== "") {
      writer.uint32(34).string(message.desc);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(42).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    if (message.quantity !== 0) {
      writer.uint32(56).uint64(message.quantity);
    }
    for (const v of message.pendingOrders) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.completedOrders) {
      writer.uint32(74).string(v!);
    }
    if (message.creator !== "") {
      writer.uint32(82).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Listing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListing } as Listing;
    message.pendingOrders = [];
    message.completedOrders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prodId = reader.string();
          break;
        case 2:
          message.listingId = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.desc = reader.string();
          break;
        case 5:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.status = reader.string();
          break;
        case 7:
          message.quantity = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.pendingOrders.push(reader.string());
          break;
        case 9:
          message.completedOrders.push(reader.string());
          break;
        case 10:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Listing {
    const message = { ...baseListing } as Listing;
    message.pendingOrders = [];
    message.completedOrders = [];
    if (object.prodId !== undefined && object.prodId !== null) {
      message.prodId = String(object.prodId);
    } else {
      message.prodId = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = String(object.desc);
    } else {
      message.desc = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromJSON(object.price);
    } else {
      message.price = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity);
    } else {
      message.quantity = 0;
    }
    if (object.pendingOrders !== undefined && object.pendingOrders !== null) {
      for (const e of object.pendingOrders) {
        message.pendingOrders.push(String(e));
      }
    }
    if (
      object.completedOrders !== undefined &&
      object.completedOrders !== null
    ) {
      for (const e of object.completedOrders) {
        message.completedOrders.push(String(e));
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Listing): unknown {
    const obj: any = {};
    message.prodId !== undefined && (obj.prodId = message.prodId);
    message.listingId !== undefined && (obj.listingId = message.listingId);
    message.title !== undefined && (obj.title = message.title);
    message.desc !== undefined && (obj.desc = message.desc);
    message.price !== undefined &&
      (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    if (message.pendingOrders) {
      obj.pendingOrders = message.pendingOrders.map((e) => e);
    } else {
      obj.pendingOrders = [];
    }
    if (message.completedOrders) {
      obj.completedOrders = message.completedOrders.map((e) => e);
    } else {
      obj.completedOrders = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Listing>): Listing {
    const message = { ...baseListing } as Listing;
    message.pendingOrders = [];
    message.completedOrders = [];
    if (object.prodId !== undefined && object.prodId !== null) {
      message.prodId = object.prodId;
    } else {
      message.prodId = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    } else {
      message.desc = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    } else {
      message.price = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    } else {
      message.quantity = 0;
    }
    if (object.pendingOrders !== undefined && object.pendingOrders !== null) {
      for (const e of object.pendingOrders) {
        message.pendingOrders.push(e);
      }
    }
    if (
      object.completedOrders !== undefined &&
      object.completedOrders !== null
    ) {
      for (const e of object.completedOrders) {
        message.completedOrders.push(e);
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
