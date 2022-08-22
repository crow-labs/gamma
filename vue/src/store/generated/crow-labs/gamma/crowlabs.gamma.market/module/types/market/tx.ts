/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "crowlabs.gamma.market";

export interface MsgCreateOrder {
  creator: string;
  orderId: string;
  buyerId: string;
  listId: string;
  price: string;
  status: string;
}

export interface MsgCreateOrderResponse {}

export interface MsgUpdateOrder {
  creator: string;
  orderId: string;
  buyerId: string;
  listId: string;
  price: string;
  status: string;
}

export interface MsgUpdateOrderResponse {}

export interface MsgDeleteOrder {
  creator: string;
  orderId: string;
  buyerId: string;
}

export interface MsgDeleteOrderResponse {}

export interface MsgCreateListing {
  creator: string;
  prodId: string;
  listingId: string;
  title: string;
  desc: string;
  price: Coin | undefined;
  status: string;
  quantity: number;
  pendingOrders: string[];
  completedOrders: string[];
}

export interface MsgCreateListingResponse {}

export interface MsgUpdateListing {
  creator: string;
  prodId: string;
  listingId: string;
  title: string;
  desc: string;
  price: Coin | undefined;
  status: string;
  quantity: number;
  pendingOrders: string[];
  completedOrders: string[];
}

export interface MsgUpdateListingResponse {}

export interface MsgDeleteListing {
  creator: string;
  prodId: string;
  listingId: string;
}

export interface MsgDeleteListingResponse {}

const baseMsgCreateOrder: object = {
  creator: "",
  orderId: "",
  buyerId: "",
  listId: "",
  price: "",
  status: "",
};

export const MsgCreateOrder = {
  encode(message: MsgCreateOrder, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    if (message.buyerId !== "") {
      writer.uint32(26).string(message.buyerId);
    }
    if (message.listId !== "") {
      writer.uint32(34).string(message.listId);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        case 3:
          message.buyerId = reader.string();
          break;
        case 4:
          message.listId = reader.string();
          break;
        case 5:
          message.price = reader.string();
          break;
        case 6:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOrder {
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    if (object.listId !== undefined && object.listId !== null) {
      message.listId = String(object.listId);
    } else {
      message.listId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgCreateOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.listId !== undefined && (obj.listId = message.listId);
    message.price !== undefined && (obj.price = message.price);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateOrder>): MsgCreateOrder {
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    if (object.listId !== undefined && object.listId !== null) {
      message.listId = object.listId;
    } else {
      message.listId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgCreateOrderResponse: object = {};

export const MsgCreateOrderResponse = {
  encode(_: MsgCreateOrderResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse;
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

  fromJSON(_: any): MsgCreateOrderResponse {
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse;
    return message;
  },

  toJSON(_: MsgCreateOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateOrderResponse>): MsgCreateOrderResponse {
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse;
    return message;
  },
};

const baseMsgUpdateOrder: object = {
  creator: "",
  orderId: "",
  buyerId: "",
  listId: "",
  price: "",
  status: "",
};

export const MsgUpdateOrder = {
  encode(message: MsgUpdateOrder, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    if (message.buyerId !== "") {
      writer.uint32(26).string(message.buyerId);
    }
    if (message.listId !== "") {
      writer.uint32(34).string(message.listId);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateOrder } as MsgUpdateOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        case 3:
          message.buyerId = reader.string();
          break;
        case 4:
          message.listId = reader.string();
          break;
        case 5:
          message.price = reader.string();
          break;
        case 6:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOrder {
    const message = { ...baseMsgUpdateOrder } as MsgUpdateOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    if (object.listId !== undefined && object.listId !== null) {
      message.listId = String(object.listId);
    } else {
      message.listId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.listId !== undefined && (obj.listId = message.listId);
    message.price !== undefined && (obj.price = message.price);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateOrder>): MsgUpdateOrder {
    const message = { ...baseMsgUpdateOrder } as MsgUpdateOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    if (object.listId !== undefined && object.listId !== null) {
      message.listId = object.listId;
    } else {
      message.listId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgUpdateOrderResponse: object = {};

export const MsgUpdateOrderResponse = {
  encode(_: MsgUpdateOrderResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateOrderResponse } as MsgUpdateOrderResponse;
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

  fromJSON(_: any): MsgUpdateOrderResponse {
    const message = { ...baseMsgUpdateOrderResponse } as MsgUpdateOrderResponse;
    return message;
  },

  toJSON(_: MsgUpdateOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateOrderResponse>): MsgUpdateOrderResponse {
    const message = { ...baseMsgUpdateOrderResponse } as MsgUpdateOrderResponse;
    return message;
  },
};

const baseMsgDeleteOrder: object = { creator: "", orderId: "", buyerId: "" };

export const MsgDeleteOrder = {
  encode(message: MsgDeleteOrder, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    if (message.buyerId !== "") {
      writer.uint32(26).string(message.buyerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteOrder } as MsgDeleteOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
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

  fromJSON(object: any): MsgDeleteOrder {
    const message = { ...baseMsgDeleteOrder } as MsgDeleteOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgDeleteOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteOrder>): MsgDeleteOrder {
    const message = { ...baseMsgDeleteOrder } as MsgDeleteOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgDeleteOrderResponse: object = {};

export const MsgDeleteOrderResponse = {
  encode(_: MsgDeleteOrderResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteOrderResponse } as MsgDeleteOrderResponse;
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

  fromJSON(_: any): MsgDeleteOrderResponse {
    const message = { ...baseMsgDeleteOrderResponse } as MsgDeleteOrderResponse;
    return message;
  },

  toJSON(_: MsgDeleteOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteOrderResponse>): MsgDeleteOrderResponse {
    const message = { ...baseMsgDeleteOrderResponse } as MsgDeleteOrderResponse;
    return message;
  },
};

const baseMsgCreateListing: object = {
  creator: "",
  prodId: "",
  listingId: "",
  title: "",
  desc: "",
  status: "",
  quantity: 0,
  pendingOrders: "",
  completedOrders: "",
};

export const MsgCreateListing = {
  encode(message: MsgCreateListing, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.prodId !== "") {
      writer.uint32(18).string(message.prodId);
    }
    if (message.listingId !== "") {
      writer.uint32(26).string(message.listingId);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.desc !== "") {
      writer.uint32(42).string(message.desc);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(50).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    if (message.quantity !== 0) {
      writer.uint32(64).uint64(message.quantity);
    }
    for (const v of message.pendingOrders) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.completedOrders) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateListing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateListing } as MsgCreateListing;
    message.pendingOrders = [];
    message.completedOrders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.prodId = reader.string();
          break;
        case 3:
          message.listingId = reader.string();
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.desc = reader.string();
          break;
        case 6:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.status = reader.string();
          break;
        case 8:
          message.quantity = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.pendingOrders.push(reader.string());
          break;
        case 10:
          message.completedOrders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateListing {
    const message = { ...baseMsgCreateListing } as MsgCreateListing;
    message.pendingOrders = [];
    message.completedOrders = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgCreateListing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateListing>): MsgCreateListing {
    const message = { ...baseMsgCreateListing } as MsgCreateListing;
    message.pendingOrders = [];
    message.completedOrders = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgCreateListingResponse: object = {};

export const MsgCreateListingResponse = {
  encode(
    _: MsgCreateListingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateListingResponse,
    } as MsgCreateListingResponse;
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

  fromJSON(_: any): MsgCreateListingResponse {
    const message = {
      ...baseMsgCreateListingResponse,
    } as MsgCreateListingResponse;
    return message;
  },

  toJSON(_: MsgCreateListingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateListingResponse>
  ): MsgCreateListingResponse {
    const message = {
      ...baseMsgCreateListingResponse,
    } as MsgCreateListingResponse;
    return message;
  },
};

const baseMsgUpdateListing: object = {
  creator: "",
  prodId: "",
  listingId: "",
  title: "",
  desc: "",
  status: "",
  quantity: 0,
  pendingOrders: "",
  completedOrders: "",
};

export const MsgUpdateListing = {
  encode(message: MsgUpdateListing, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.prodId !== "") {
      writer.uint32(18).string(message.prodId);
    }
    if (message.listingId !== "") {
      writer.uint32(26).string(message.listingId);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.desc !== "") {
      writer.uint32(42).string(message.desc);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(50).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    if (message.quantity !== 0) {
      writer.uint32(64).uint64(message.quantity);
    }
    for (const v of message.pendingOrders) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.completedOrders) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateListing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateListing } as MsgUpdateListing;
    message.pendingOrders = [];
    message.completedOrders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.prodId = reader.string();
          break;
        case 3:
          message.listingId = reader.string();
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.desc = reader.string();
          break;
        case 6:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.status = reader.string();
          break;
        case 8:
          message.quantity = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.pendingOrders.push(reader.string());
          break;
        case 10:
          message.completedOrders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateListing {
    const message = { ...baseMsgUpdateListing } as MsgUpdateListing;
    message.pendingOrders = [];
    message.completedOrders = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateListing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateListing>): MsgUpdateListing {
    const message = { ...baseMsgUpdateListing } as MsgUpdateListing;
    message.pendingOrders = [];
    message.completedOrders = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateListingResponse: object = {};

export const MsgUpdateListingResponse = {
  encode(
    _: MsgUpdateListingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateListingResponse,
    } as MsgUpdateListingResponse;
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

  fromJSON(_: any): MsgUpdateListingResponse {
    const message = {
      ...baseMsgUpdateListingResponse,
    } as MsgUpdateListingResponse;
    return message;
  },

  toJSON(_: MsgUpdateListingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateListingResponse>
  ): MsgUpdateListingResponse {
    const message = {
      ...baseMsgUpdateListingResponse,
    } as MsgUpdateListingResponse;
    return message;
  },
};

const baseMsgDeleteListing: object = { creator: "", prodId: "", listingId: "" };

export const MsgDeleteListing = {
  encode(message: MsgDeleteListing, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.prodId !== "") {
      writer.uint32(18).string(message.prodId);
    }
    if (message.listingId !== "") {
      writer.uint32(26).string(message.listingId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteListing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteListing } as MsgDeleteListing;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.prodId = reader.string();
          break;
        case 3:
          message.listingId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteListing {
    const message = { ...baseMsgDeleteListing } as MsgDeleteListing;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgDeleteListing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.prodId !== undefined && (obj.prodId = message.prodId);
    message.listingId !== undefined && (obj.listingId = message.listingId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteListing>): MsgDeleteListing {
    const message = { ...baseMsgDeleteListing } as MsgDeleteListing;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgDeleteListingResponse: object = {};

export const MsgDeleteListingResponse = {
  encode(
    _: MsgDeleteListingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteListingResponse,
    } as MsgDeleteListingResponse;
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

  fromJSON(_: any): MsgDeleteListingResponse {
    const message = {
      ...baseMsgDeleteListingResponse,
    } as MsgDeleteListingResponse;
    return message;
  },

  toJSON(_: MsgDeleteListingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteListingResponse>
  ): MsgDeleteListingResponse {
    const message = {
      ...baseMsgDeleteListingResponse,
    } as MsgDeleteListingResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
  UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse>;
  DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse>;
  CreateListing(request: MsgCreateListing): Promise<MsgCreateListingResponse>;
  UpdateListing(request: MsgUpdateListing): Promise<MsgUpdateListingResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteListing(request: MsgDeleteListing): Promise<MsgDeleteListingResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse> {
    const data = MsgCreateOrder.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.market.Msg",
      "CreateOrder",
      data
    );
    return promise.then((data) =>
      MsgCreateOrderResponse.decode(new Reader(data))
    );
  }

  UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse> {
    const data = MsgUpdateOrder.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.market.Msg",
      "UpdateOrder",
      data
    );
    return promise.then((data) =>
      MsgUpdateOrderResponse.decode(new Reader(data))
    );
  }

  DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse> {
    const data = MsgDeleteOrder.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.market.Msg",
      "DeleteOrder",
      data
    );
    return promise.then((data) =>
      MsgDeleteOrderResponse.decode(new Reader(data))
    );
  }

  CreateListing(request: MsgCreateListing): Promise<MsgCreateListingResponse> {
    const data = MsgCreateListing.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.market.Msg",
      "CreateListing",
      data
    );
    return promise.then((data) =>
      MsgCreateListingResponse.decode(new Reader(data))
    );
  }

  UpdateListing(request: MsgUpdateListing): Promise<MsgUpdateListingResponse> {
    const data = MsgUpdateListing.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.market.Msg",
      "UpdateListing",
      data
    );
    return promise.then((data) =>
      MsgUpdateListingResponse.decode(new Reader(data))
    );
  }

  DeleteListing(request: MsgDeleteListing): Promise<MsgDeleteListingResponse> {
    const data = MsgDeleteListing.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.market.Msg",
      "DeleteListing",
      data
    );
    return promise.then((data) =>
      MsgDeleteListingResponse.decode(new Reader(data))
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
