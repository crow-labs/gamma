/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.gamma.whitelist";

export interface BuyerIds {
  accAddr: string;
  buyerId: string;
  creator: string;
}

const baseBuyerIds: object = { accAddr: "", buyerId: "", creator: "" };

export const BuyerIds = {
  encode(message: BuyerIds, writer: Writer = Writer.create()): Writer {
    if (message.accAddr !== "") {
      writer.uint32(10).string(message.accAddr);
    }
    if (message.buyerId !== "") {
      writer.uint32(18).string(message.buyerId);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BuyerIds {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuyerIds } as BuyerIds;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accAddr = reader.string();
          break;
        case 2:
          message.buyerId = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuyerIds {
    const message = { ...baseBuyerIds } as BuyerIds;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: BuyerIds): unknown {
    const obj: any = {};
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<BuyerIds>): BuyerIds {
    const message = { ...baseBuyerIds } as BuyerIds;
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
