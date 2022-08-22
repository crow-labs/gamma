/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.gamma.whitelist";

export interface Voter {
  accAddr: string;
  status: string;
  pendingVotes: string[];
  previousVotes: string[];
  voterId: string;
  creator: string;
}

const baseVoter: object = {
  accAddr: "",
  status: "",
  pendingVotes: "",
  previousVotes: "",
  voterId: "",
  creator: "",
};

export const Voter = {
  encode(message: Voter, writer: Writer = Writer.create()): Writer {
    if (message.accAddr !== "") {
      writer.uint32(10).string(message.accAddr);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    for (const v of message.pendingVotes) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.previousVotes) {
      writer.uint32(34).string(v!);
    }
    if (message.voterId !== "") {
      writer.uint32(42).string(message.voterId);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Voter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVoter } as Voter;
    message.pendingVotes = [];
    message.previousVotes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accAddr = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.pendingVotes.push(reader.string());
          break;
        case 4:
          message.previousVotes.push(reader.string());
          break;
        case 5:
          message.voterId = reader.string();
          break;
        case 6:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Voter {
    const message = { ...baseVoter } as Voter;
    message.pendingVotes = [];
    message.previousVotes = [];
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = String(object.accAddr);
    } else {
      message.accAddr = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.pendingVotes !== undefined && object.pendingVotes !== null) {
      for (const e of object.pendingVotes) {
        message.pendingVotes.push(String(e));
      }
    }
    if (object.previousVotes !== undefined && object.previousVotes !== null) {
      for (const e of object.previousVotes) {
        message.previousVotes.push(String(e));
      }
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Voter): unknown {
    const obj: any = {};
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    message.status !== undefined && (obj.status = message.status);
    if (message.pendingVotes) {
      obj.pendingVotes = message.pendingVotes.map((e) => e);
    } else {
      obj.pendingVotes = [];
    }
    if (message.previousVotes) {
      obj.previousVotes = message.previousVotes.map((e) => e);
    } else {
      obj.previousVotes = [];
    }
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Voter>): Voter {
    const message = { ...baseVoter } as Voter;
    message.pendingVotes = [];
    message.previousVotes = [];
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = object.accAddr;
    } else {
      message.accAddr = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.pendingVotes !== undefined && object.pendingVotes !== null) {
      for (const e of object.pendingVotes) {
        message.pendingVotes.push(e);
      }
    }
    if (object.previousVotes !== undefined && object.previousVotes !== null) {
      for (const e of object.previousVotes) {
        message.previousVotes.push(e);
      }
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
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
