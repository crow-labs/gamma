/* eslint-disable */
import { Params } from "../whitelist/params";
import { BuyerIds } from "../whitelist/buyer_ids";
import { Buyers } from "../whitelist/buyers";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.gamma.whitelist";

/** GenesisState defines the whitelist module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  buyerIdsList: BuyerIds[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  buyersList: Buyers[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.buyerIdsList) {
      BuyerIds.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.buyersList) {
      Buyers.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.buyerIdsList = [];
    message.buyersList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.buyerIdsList.push(BuyerIds.decode(reader, reader.uint32()));
          break;
        case 3:
          message.buyersList.push(Buyers.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.buyerIdsList = [];
    message.buyersList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.buyerIdsList !== undefined && object.buyerIdsList !== null) {
      for (const e of object.buyerIdsList) {
        message.buyerIdsList.push(BuyerIds.fromJSON(e));
      }
    }
    if (object.buyersList !== undefined && object.buyersList !== null) {
      for (const e of object.buyersList) {
        message.buyersList.push(Buyers.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.buyerIdsList) {
      obj.buyerIdsList = message.buyerIdsList.map((e) =>
        e ? BuyerIds.toJSON(e) : undefined
      );
    } else {
      obj.buyerIdsList = [];
    }
    if (message.buyersList) {
      obj.buyersList = message.buyersList.map((e) =>
        e ? Buyers.toJSON(e) : undefined
      );
    } else {
      obj.buyersList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.buyerIdsList = [];
    message.buyersList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.buyerIdsList !== undefined && object.buyerIdsList !== null) {
      for (const e of object.buyerIdsList) {
        message.buyerIdsList.push(BuyerIds.fromPartial(e));
      }
    }
    if (object.buyersList !== undefined && object.buyersList !== null) {
      for (const e of object.buyersList) {
        message.buyersList.push(Buyers.fromPartial(e));
      }
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
