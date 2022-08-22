/* eslint-disable */
import { Params } from "../escrow/params";
import { Crow } from "../escrow/crow";
import { Vote } from "../escrow/vote";
import { Dispute } from "../escrow/dispute";
import { Verdict } from "../escrow/verdict";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.gamma.escrow";

/** GenesisState defines the escrow module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  port_id: string;
  crowList: Crow[];
  voteList: Vote[];
  disputeList: Dispute[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  verdictList: Verdict[];
}

const baseGenesisState: object = { port_id: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }
    for (const v of message.crowList) {
      Crow.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.voteList) {
      Vote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.disputeList) {
      Dispute.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.verdictList) {
      Verdict.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.crowList = [];
    message.voteList = [];
    message.disputeList = [];
    message.verdictList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.port_id = reader.string();
          break;
        case 3:
          message.crowList.push(Crow.decode(reader, reader.uint32()));
          break;
        case 4:
          message.voteList.push(Vote.decode(reader, reader.uint32()));
          break;
        case 5:
          message.disputeList.push(Dispute.decode(reader, reader.uint32()));
          break;
        case 6:
          message.verdictList.push(Verdict.decode(reader, reader.uint32()));
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
    message.crowList = [];
    message.voteList = [];
    message.disputeList = [];
    message.verdictList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = String(object.port_id);
    } else {
      message.port_id = "";
    }
    if (object.crowList !== undefined && object.crowList !== null) {
      for (const e of object.crowList) {
        message.crowList.push(Crow.fromJSON(e));
      }
    }
    if (object.voteList !== undefined && object.voteList !== null) {
      for (const e of object.voteList) {
        message.voteList.push(Vote.fromJSON(e));
      }
    }
    if (object.disputeList !== undefined && object.disputeList !== null) {
      for (const e of object.disputeList) {
        message.disputeList.push(Dispute.fromJSON(e));
      }
    }
    if (object.verdictList !== undefined && object.verdictList !== null) {
      for (const e of object.verdictList) {
        message.verdictList.push(Verdict.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    if (message.crowList) {
      obj.crowList = message.crowList.map((e) =>
        e ? Crow.toJSON(e) : undefined
      );
    } else {
      obj.crowList = [];
    }
    if (message.voteList) {
      obj.voteList = message.voteList.map((e) =>
        e ? Vote.toJSON(e) : undefined
      );
    } else {
      obj.voteList = [];
    }
    if (message.disputeList) {
      obj.disputeList = message.disputeList.map((e) =>
        e ? Dispute.toJSON(e) : undefined
      );
    } else {
      obj.disputeList = [];
    }
    if (message.verdictList) {
      obj.verdictList = message.verdictList.map((e) =>
        e ? Verdict.toJSON(e) : undefined
      );
    } else {
      obj.verdictList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.crowList = [];
    message.voteList = [];
    message.disputeList = [];
    message.verdictList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    } else {
      message.port_id = "";
    }
    if (object.crowList !== undefined && object.crowList !== null) {
      for (const e of object.crowList) {
        message.crowList.push(Crow.fromPartial(e));
      }
    }
    if (object.voteList !== undefined && object.voteList !== null) {
      for (const e of object.voteList) {
        message.voteList.push(Vote.fromPartial(e));
      }
    }
    if (object.disputeList !== undefined && object.disputeList !== null) {
      for (const e of object.disputeList) {
        message.disputeList.push(Dispute.fromPartial(e));
      }
    }
    if (object.verdictList !== undefined && object.verdictList !== null) {
      for (const e of object.verdictList) {
        message.verdictList.push(Verdict.fromPartial(e));
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
