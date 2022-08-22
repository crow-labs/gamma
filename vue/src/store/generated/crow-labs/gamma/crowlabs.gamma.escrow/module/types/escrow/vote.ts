/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.gamma.escrow";

export interface Vote {
  voterId: string;
  disputeId: string;
  voteId: string;
  buyerGuilty: boolean;
  sellerGuilty: boolean;
  refundToBuyer: Coin[];
  sendToSeller: Coin[];
  buyerPunishment: string;
  sellerPunishment: string;
  creator: string;
}

const baseVote: object = {
  voterId: "",
  disputeId: "",
  voteId: "",
  buyerGuilty: false,
  sellerGuilty: false,
  buyerPunishment: "",
  sellerPunishment: "",
  creator: "",
};

export const Vote = {
  encode(message: Vote, writer: Writer = Writer.create()): Writer {
    if (message.voterId !== "") {
      writer.uint32(10).string(message.voterId);
    }
    if (message.disputeId !== "") {
      writer.uint32(18).string(message.disputeId);
    }
    if (message.voteId !== "") {
      writer.uint32(26).string(message.voteId);
    }
    if (message.buyerGuilty === true) {
      writer.uint32(32).bool(message.buyerGuilty);
    }
    if (message.sellerGuilty === true) {
      writer.uint32(40).bool(message.sellerGuilty);
    }
    for (const v of message.refundToBuyer) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.sendToSeller) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.buyerPunishment !== "") {
      writer.uint32(66).string(message.buyerPunishment);
    }
    if (message.sellerPunishment !== "") {
      writer.uint32(74).string(message.sellerPunishment);
    }
    if (message.creator !== "") {
      writer.uint32(82).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVote } as Vote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voterId = reader.string();
          break;
        case 2:
          message.disputeId = reader.string();
          break;
        case 3:
          message.voteId = reader.string();
          break;
        case 4:
          message.buyerGuilty = reader.bool();
          break;
        case 5:
          message.sellerGuilty = reader.bool();
          break;
        case 6:
          message.refundToBuyer.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.sendToSeller.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.buyerPunishment = reader.string();
          break;
        case 9:
          message.sellerPunishment = reader.string();
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

  fromJSON(object: any): Vote {
    const message = { ...baseVote } as Vote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = String(object.voteId);
    } else {
      message.voteId = "";
    }
    if (object.buyerGuilty !== undefined && object.buyerGuilty !== null) {
      message.buyerGuilty = Boolean(object.buyerGuilty);
    } else {
      message.buyerGuilty = false;
    }
    if (object.sellerGuilty !== undefined && object.sellerGuilty !== null) {
      message.sellerGuilty = Boolean(object.sellerGuilty);
    } else {
      message.sellerGuilty = false;
    }
    if (object.refundToBuyer !== undefined && object.refundToBuyer !== null) {
      for (const e of object.refundToBuyer) {
        message.refundToBuyer.push(Coin.fromJSON(e));
      }
    }
    if (object.sendToSeller !== undefined && object.sendToSeller !== null) {
      for (const e of object.sendToSeller) {
        message.sendToSeller.push(Coin.fromJSON(e));
      }
    }
    if (
      object.buyerPunishment !== undefined &&
      object.buyerPunishment !== null
    ) {
      message.buyerPunishment = String(object.buyerPunishment);
    } else {
      message.buyerPunishment = "";
    }
    if (
      object.sellerPunishment !== undefined &&
      object.sellerPunishment !== null
    ) {
      message.sellerPunishment = String(object.sellerPunishment);
    } else {
      message.sellerPunishment = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.voteId !== undefined && (obj.voteId = message.voteId);
    message.buyerGuilty !== undefined &&
      (obj.buyerGuilty = message.buyerGuilty);
    message.sellerGuilty !== undefined &&
      (obj.sellerGuilty = message.sellerGuilty);
    if (message.refundToBuyer) {
      obj.refundToBuyer = message.refundToBuyer.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.refundToBuyer = [];
    }
    if (message.sendToSeller) {
      obj.sendToSeller = message.sendToSeller.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.sendToSeller = [];
    }
    message.buyerPunishment !== undefined &&
      (obj.buyerPunishment = message.buyerPunishment);
    message.sellerPunishment !== undefined &&
      (obj.sellerPunishment = message.sellerPunishment);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = { ...baseVote } as Vote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = object.voteId;
    } else {
      message.voteId = "";
    }
    if (object.buyerGuilty !== undefined && object.buyerGuilty !== null) {
      message.buyerGuilty = object.buyerGuilty;
    } else {
      message.buyerGuilty = false;
    }
    if (object.sellerGuilty !== undefined && object.sellerGuilty !== null) {
      message.sellerGuilty = object.sellerGuilty;
    } else {
      message.sellerGuilty = false;
    }
    if (object.refundToBuyer !== undefined && object.refundToBuyer !== null) {
      for (const e of object.refundToBuyer) {
        message.refundToBuyer.push(Coin.fromPartial(e));
      }
    }
    if (object.sendToSeller !== undefined && object.sendToSeller !== null) {
      for (const e of object.sendToSeller) {
        message.sendToSeller.push(Coin.fromPartial(e));
      }
    }
    if (
      object.buyerPunishment !== undefined &&
      object.buyerPunishment !== null
    ) {
      message.buyerPunishment = object.buyerPunishment;
    } else {
      message.buyerPunishment = "";
    }
    if (
      object.sellerPunishment !== undefined &&
      object.sellerPunishment !== null
    ) {
      message.sellerPunishment = object.sellerPunishment;
    } else {
      message.sellerPunishment = "";
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
