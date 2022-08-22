/* eslint-disable */
import { Vote } from "../escrow/vote";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.gamma.escrow";

export interface Verdict {
  crowId: string;
  disputeId: string;
  voteIds: string[];
  resultingVote: Vote | undefined;
  creator: string;
}

const baseVerdict: object = {
  crowId: "",
  disputeId: "",
  voteIds: "",
  creator: "",
};

export const Verdict = {
  encode(message: Verdict, writer: Writer = Writer.create()): Writer {
    if (message.crowId !== "") {
      writer.uint32(10).string(message.crowId);
    }
    if (message.disputeId !== "") {
      writer.uint32(18).string(message.disputeId);
    }
    for (const v of message.voteIds) {
      writer.uint32(26).string(v!);
    }
    if (message.resultingVote !== undefined) {
      Vote.encode(message.resultingVote, writer.uint32(34).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Verdict {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVerdict } as Verdict;
    message.voteIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = reader.string();
          break;
        case 2:
          message.disputeId = reader.string();
          break;
        case 3:
          message.voteIds.push(reader.string());
          break;
        case 4:
          message.resultingVote = Vote.decode(reader, reader.uint32());
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Verdict {
    const message = { ...baseVerdict } as Verdict;
    message.voteIds = [];
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = String(object.crowId);
    } else {
      message.crowId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    if (object.voteIds !== undefined && object.voteIds !== null) {
      for (const e of object.voteIds) {
        message.voteIds.push(String(e));
      }
    }
    if (object.resultingVote !== undefined && object.resultingVote !== null) {
      message.resultingVote = Vote.fromJSON(object.resultingVote);
    } else {
      message.resultingVote = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Verdict): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    if (message.voteIds) {
      obj.voteIds = message.voteIds.map((e) => e);
    } else {
      obj.voteIds = [];
    }
    message.resultingVote !== undefined &&
      (obj.resultingVote = message.resultingVote
        ? Vote.toJSON(message.resultingVote)
        : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Verdict>): Verdict {
    const message = { ...baseVerdict } as Verdict;
    message.voteIds = [];
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    if (object.voteIds !== undefined && object.voteIds !== null) {
      for (const e of object.voteIds) {
        message.voteIds.push(e);
      }
    }
    if (object.resultingVote !== undefined && object.resultingVote !== null) {
      message.resultingVote = Vote.fromPartial(object.resultingVote);
    } else {
      message.resultingVote = undefined;
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
