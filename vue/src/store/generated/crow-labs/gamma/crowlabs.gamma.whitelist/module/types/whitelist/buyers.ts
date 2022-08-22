/* eslint-disable */
import { Buyer } from "../whitelist/buyer";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.gamma.whitelist";

export interface Buyers {
  buyerId: string;
  buyer: Buyer | undefined;
  creator: string;
}

const baseBuyers: object = { buyerId: "", creator: "" };

export const Buyers = {
  encode(message: Buyers, writer: Writer = Writer.create()): Writer {
    if (message.buyerId !== "") {
      writer.uint32(10).string(message.buyerId);
    }
    if (message.buyer !== undefined) {
      Buyer.encode(message.buyer, writer.uint32(18).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Buyers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuyers } as Buyers;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerId = reader.string();
          break;
        case 2:
          message.buyer = Buyer.decode(reader, reader.uint32());
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

  fromJSON(object: any): Buyers {
    const message = { ...baseBuyers } as Buyers;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Buyers): unknown {
    const obj: any = {};
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.buyer !== undefined &&
      (obj.buyer = message.buyer ? Buyer.toJSON(message.buyer) : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Buyers>): Buyers {
    const message = { ...baseBuyers } as Buyers;
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
