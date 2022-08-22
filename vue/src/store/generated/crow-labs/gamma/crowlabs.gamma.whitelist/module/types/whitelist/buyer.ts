/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.gamma.whitelist";

export interface Buyer {
  orderIds: string[];
  status: string;
}

const baseBuyer: object = { orderIds: "", status: "" };

export const Buyer = {
  encode(message: Buyer, writer: Writer = Writer.create()): Writer {
    for (const v of message.orderIds) {
      writer.uint32(10).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Buyer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuyer } as Buyer;
    message.orderIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderIds.push(reader.string());
          break;
        case 2:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Buyer {
    const message = { ...baseBuyer } as Buyer;
    message.orderIds = [];
    if (object.orderIds !== undefined && object.orderIds !== null) {
      for (const e of object.orderIds) {
        message.orderIds.push(String(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: Buyer): unknown {
    const obj: any = {};
    if (message.orderIds) {
      obj.orderIds = message.orderIds.map((e) => e);
    } else {
      obj.orderIds = [];
    }
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<Buyer>): Buyer {
    const message = { ...baseBuyer } as Buyer;
    message.orderIds = [];
    if (object.orderIds !== undefined && object.orderIds !== null) {
      for (const e of object.orderIds) {
        message.orderIds.push(e);
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
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
