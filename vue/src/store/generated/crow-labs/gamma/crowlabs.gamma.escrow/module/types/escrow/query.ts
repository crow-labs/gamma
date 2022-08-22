/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../escrow/params";
import { Crow } from "../escrow/crow";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Vote } from "../escrow/vote";
import { Dispute } from "../escrow/dispute";
import { Verdict } from "../escrow/verdict";

export const protobufPackage = "crowlabs.gamma.escrow";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetCrowRequest {
  listingId: string;
  orderId: string;
}

export interface QueryGetCrowResponse {
  crow: Crow | undefined;
}

export interface QueryAllCrowRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCrowResponse {
  crow: Crow[];
  pagination: PageResponse | undefined;
}

export interface QueryGetVoteRequest {
  voterId: string;
  disputeId: string;
}

export interface QueryGetVoteResponse {
  vote: Vote | undefined;
}

export interface QueryAllVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllVoteResponse {
  vote: Vote[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDisputeRequest {
  crowId: string;
}

export interface QueryGetDisputeResponse {
  dispute: Dispute | undefined;
}

export interface QueryAllDisputeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDisputeResponse {
  dispute: Dispute[];
  pagination: PageResponse | undefined;
}

export interface QueryGetVerdictRequest {
  crowId: string;
  disputeId: string;
}

export interface QueryGetVerdictResponse {
  verdict: Verdict | undefined;
}

export interface QueryAllVerdictRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllVerdictResponse {
  verdict: Verdict[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetCrowRequest: object = { listingId: "", orderId: "" };

export const QueryGetCrowRequest = {
  encode(
    message: QueryGetCrowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.listingId !== "") {
      writer.uint32(10).string(message.listingId);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCrowRequest } as QueryGetCrowRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listingId = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCrowRequest {
    const message = { ...baseQueryGetCrowRequest } as QueryGetCrowRequest;
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    return message;
  },

  toJSON(message: QueryGetCrowRequest): unknown {
    const obj: any = {};
    message.listingId !== undefined && (obj.listingId = message.listingId);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCrowRequest>): QueryGetCrowRequest {
    const message = { ...baseQueryGetCrowRequest } as QueryGetCrowRequest;
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    return message;
  },
};

const baseQueryGetCrowResponse: object = {};

export const QueryGetCrowResponse = {
  encode(
    message: QueryGetCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.crow !== undefined) {
      Crow.encode(message.crow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCrowResponse } as QueryGetCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crow = Crow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCrowResponse {
    const message = { ...baseQueryGetCrowResponse } as QueryGetCrowResponse;
    if (object.crow !== undefined && object.crow !== null) {
      message.crow = Crow.fromJSON(object.crow);
    } else {
      message.crow = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCrowResponse): unknown {
    const obj: any = {};
    message.crow !== undefined &&
      (obj.crow = message.crow ? Crow.toJSON(message.crow) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCrowResponse>): QueryGetCrowResponse {
    const message = { ...baseQueryGetCrowResponse } as QueryGetCrowResponse;
    if (object.crow !== undefined && object.crow !== null) {
      message.crow = Crow.fromPartial(object.crow);
    } else {
      message.crow = undefined;
    }
    return message;
  },
};

const baseQueryAllCrowRequest: object = {};

export const QueryAllCrowRequest = {
  encode(
    message: QueryAllCrowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCrowRequest } as QueryAllCrowRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCrowRequest {
    const message = { ...baseQueryAllCrowRequest } as QueryAllCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCrowRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllCrowRequest>): QueryAllCrowRequest {
    const message = { ...baseQueryAllCrowRequest } as QueryAllCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCrowResponse: object = {};

export const QueryAllCrowResponse = {
  encode(
    message: QueryAllCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.crow) {
      Crow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCrowResponse } as QueryAllCrowResponse;
    message.crow = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crow.push(Crow.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCrowResponse {
    const message = { ...baseQueryAllCrowResponse } as QueryAllCrowResponse;
    message.crow = [];
    if (object.crow !== undefined && object.crow !== null) {
      for (const e of object.crow) {
        message.crow.push(Crow.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCrowResponse): unknown {
    const obj: any = {};
    if (message.crow) {
      obj.crow = message.crow.map((e) => (e ? Crow.toJSON(e) : undefined));
    } else {
      obj.crow = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllCrowResponse>): QueryAllCrowResponse {
    const message = { ...baseQueryAllCrowResponse } as QueryAllCrowResponse;
    message.crow = [];
    if (object.crow !== undefined && object.crow !== null) {
      for (const e of object.crow) {
        message.crow.push(Crow.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetVoteRequest: object = { voterId: "", disputeId: "" };

export const QueryGetVoteRequest = {
  encode(
    message: QueryGetVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.voterId !== "") {
      writer.uint32(10).string(message.voterId);
    }
    if (message.disputeId !== "") {
      writer.uint32(18).string(message.disputeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVoteRequest } as QueryGetVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voterId = reader.string();
          break;
        case 2:
          message.disputeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVoteRequest {
    const message = { ...baseQueryGetVoteRequest } as QueryGetVoteRequest;
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
    return message;
  },

  toJSON(message: QueryGetVoteRequest): unknown {
    const obj: any = {};
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetVoteRequest>): QueryGetVoteRequest {
    const message = { ...baseQueryGetVoteRequest } as QueryGetVoteRequest;
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
    return message;
  },
};

const baseQueryGetVoteResponse: object = {};

export const QueryGetVoteResponse = {
  encode(
    message: QueryGetVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVoteResponse } as QueryGetVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVoteResponse {
    const message = { ...baseQueryGetVoteResponse } as QueryGetVoteResponse;
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromJSON(object.vote);
    } else {
      message.vote = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetVoteResponse): unknown {
    const obj: any = {};
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetVoteResponse>): QueryGetVoteResponse {
    const message = { ...baseQueryGetVoteResponse } as QueryGetVoteResponse;
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromPartial(object.vote);
    } else {
      message.vote = undefined;
    }
    return message;
  },
};

const baseQueryAllVoteRequest: object = {};

export const QueryAllVoteRequest = {
  encode(
    message: QueryAllVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVoteRequest {
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllVoteRequest>): QueryAllVoteRequest {
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllVoteResponse: object = {};

export const QueryAllVoteResponse = {
  encode(
    message: QueryAllVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.vote) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
    message.vote = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVoteResponse {
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
    message.vote = [];
    if (object.vote !== undefined && object.vote !== null) {
      for (const e of object.vote) {
        message.vote.push(Vote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVoteResponse): unknown {
    const obj: any = {};
    if (message.vote) {
      obj.vote = message.vote.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.vote = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllVoteResponse>): QueryAllVoteResponse {
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
    message.vote = [];
    if (object.vote !== undefined && object.vote !== null) {
      for (const e of object.vote) {
        message.vote.push(Vote.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetDisputeRequest: object = { crowId: "" };

export const QueryGetDisputeRequest = {
  encode(
    message: QueryGetDisputeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.crowId !== "") {
      writer.uint32(10).string(message.crowId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDisputeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDisputeRequest } as QueryGetDisputeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDisputeRequest {
    const message = { ...baseQueryGetDisputeRequest } as QueryGetDisputeRequest;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = String(object.crowId);
    } else {
      message.crowId = "";
    }
    return message;
  },

  toJSON(message: QueryGetDisputeRequest): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDisputeRequest>
  ): QueryGetDisputeRequest {
    const message = { ...baseQueryGetDisputeRequest } as QueryGetDisputeRequest;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = "";
    }
    return message;
  },
};

const baseQueryGetDisputeResponse: object = {};

export const QueryGetDisputeResponse = {
  encode(
    message: QueryGetDisputeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.dispute !== undefined) {
      Dispute.encode(message.dispute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDisputeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDisputeResponse,
    } as QueryGetDisputeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dispute = Dispute.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDisputeResponse {
    const message = {
      ...baseQueryGetDisputeResponse,
    } as QueryGetDisputeResponse;
    if (object.dispute !== undefined && object.dispute !== null) {
      message.dispute = Dispute.fromJSON(object.dispute);
    } else {
      message.dispute = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDisputeResponse): unknown {
    const obj: any = {};
    message.dispute !== undefined &&
      (obj.dispute = message.dispute
        ? Dispute.toJSON(message.dispute)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDisputeResponse>
  ): QueryGetDisputeResponse {
    const message = {
      ...baseQueryGetDisputeResponse,
    } as QueryGetDisputeResponse;
    if (object.dispute !== undefined && object.dispute !== null) {
      message.dispute = Dispute.fromPartial(object.dispute);
    } else {
      message.dispute = undefined;
    }
    return message;
  },
};

const baseQueryAllDisputeRequest: object = {};

export const QueryAllDisputeRequest = {
  encode(
    message: QueryAllDisputeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDisputeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllDisputeRequest } as QueryAllDisputeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDisputeRequest {
    const message = { ...baseQueryAllDisputeRequest } as QueryAllDisputeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDisputeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDisputeRequest>
  ): QueryAllDisputeRequest {
    const message = { ...baseQueryAllDisputeRequest } as QueryAllDisputeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDisputeResponse: object = {};

export const QueryAllDisputeResponse = {
  encode(
    message: QueryAllDisputeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.dispute) {
      Dispute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDisputeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDisputeResponse,
    } as QueryAllDisputeResponse;
    message.dispute = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dispute.push(Dispute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDisputeResponse {
    const message = {
      ...baseQueryAllDisputeResponse,
    } as QueryAllDisputeResponse;
    message.dispute = [];
    if (object.dispute !== undefined && object.dispute !== null) {
      for (const e of object.dispute) {
        message.dispute.push(Dispute.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDisputeResponse): unknown {
    const obj: any = {};
    if (message.dispute) {
      obj.dispute = message.dispute.map((e) =>
        e ? Dispute.toJSON(e) : undefined
      );
    } else {
      obj.dispute = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDisputeResponse>
  ): QueryAllDisputeResponse {
    const message = {
      ...baseQueryAllDisputeResponse,
    } as QueryAllDisputeResponse;
    message.dispute = [];
    if (object.dispute !== undefined && object.dispute !== null) {
      for (const e of object.dispute) {
        message.dispute.push(Dispute.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetVerdictRequest: object = { crowId: "", disputeId: "" };

export const QueryGetVerdictRequest = {
  encode(
    message: QueryGetVerdictRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.crowId !== "") {
      writer.uint32(10).string(message.crowId);
    }
    if (message.disputeId !== "") {
      writer.uint32(18).string(message.disputeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVerdictRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVerdictRequest } as QueryGetVerdictRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = reader.string();
          break;
        case 2:
          message.disputeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVerdictRequest {
    const message = { ...baseQueryGetVerdictRequest } as QueryGetVerdictRequest;
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
    return message;
  },

  toJSON(message: QueryGetVerdictRequest): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVerdictRequest>
  ): QueryGetVerdictRequest {
    const message = { ...baseQueryGetVerdictRequest } as QueryGetVerdictRequest;
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
    return message;
  },
};

const baseQueryGetVerdictResponse: object = {};

export const QueryGetVerdictResponse = {
  encode(
    message: QueryGetVerdictResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.verdict !== undefined) {
      Verdict.encode(message.verdict, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVerdictResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetVerdictResponse,
    } as QueryGetVerdictResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verdict = Verdict.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVerdictResponse {
    const message = {
      ...baseQueryGetVerdictResponse,
    } as QueryGetVerdictResponse;
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = Verdict.fromJSON(object.verdict);
    } else {
      message.verdict = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetVerdictResponse): unknown {
    const obj: any = {};
    message.verdict !== undefined &&
      (obj.verdict = message.verdict
        ? Verdict.toJSON(message.verdict)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVerdictResponse>
  ): QueryGetVerdictResponse {
    const message = {
      ...baseQueryGetVerdictResponse,
    } as QueryGetVerdictResponse;
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = Verdict.fromPartial(object.verdict);
    } else {
      message.verdict = undefined;
    }
    return message;
  },
};

const baseQueryAllVerdictRequest: object = {};

export const QueryAllVerdictRequest = {
  encode(
    message: QueryAllVerdictRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVerdictRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVerdictRequest } as QueryAllVerdictRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVerdictRequest {
    const message = { ...baseQueryAllVerdictRequest } as QueryAllVerdictRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVerdictRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllVerdictRequest>
  ): QueryAllVerdictRequest {
    const message = { ...baseQueryAllVerdictRequest } as QueryAllVerdictRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllVerdictResponse: object = {};

export const QueryAllVerdictResponse = {
  encode(
    message: QueryAllVerdictResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.verdict) {
      Verdict.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVerdictResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllVerdictResponse,
    } as QueryAllVerdictResponse;
    message.verdict = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verdict.push(Verdict.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVerdictResponse {
    const message = {
      ...baseQueryAllVerdictResponse,
    } as QueryAllVerdictResponse;
    message.verdict = [];
    if (object.verdict !== undefined && object.verdict !== null) {
      for (const e of object.verdict) {
        message.verdict.push(Verdict.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVerdictResponse): unknown {
    const obj: any = {};
    if (message.verdict) {
      obj.verdict = message.verdict.map((e) =>
        e ? Verdict.toJSON(e) : undefined
      );
    } else {
      obj.verdict = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllVerdictResponse>
  ): QueryAllVerdictResponse {
    const message = {
      ...baseQueryAllVerdictResponse,
    } as QueryAllVerdictResponse;
    message.verdict = [];
    if (object.verdict !== undefined && object.verdict !== null) {
      for (const e of object.verdict) {
        message.verdict.push(Verdict.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Crow by index. */
  Crow(request: QueryGetCrowRequest): Promise<QueryGetCrowResponse>;
  /** Queries a list of Crow items. */
  CrowAll(request: QueryAllCrowRequest): Promise<QueryAllCrowResponse>;
  /** Queries a Vote by index. */
  Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse>;
  /** Queries a list of Vote items. */
  VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse>;
  /** Queries a Dispute by index. */
  Dispute(request: QueryGetDisputeRequest): Promise<QueryGetDisputeResponse>;
  /** Queries a list of Dispute items. */
  DisputeAll(request: QueryAllDisputeRequest): Promise<QueryAllDisputeResponse>;
  /** Queries a Verdict by index. */
  Verdict(request: QueryGetVerdictRequest): Promise<QueryGetVerdictResponse>;
  /** Queries a list of Verdict items. */
  VerdictAll(request: QueryAllVerdictRequest): Promise<QueryAllVerdictResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Crow(request: QueryGetCrowRequest): Promise<QueryGetCrowResponse> {
    const data = QueryGetCrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Query",
      "Crow",
      data
    );
    return promise.then((data) =>
      QueryGetCrowResponse.decode(new Reader(data))
    );
  }

  CrowAll(request: QueryAllCrowRequest): Promise<QueryAllCrowResponse> {
    const data = QueryAllCrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Query",
      "CrowAll",
      data
    );
    return promise.then((data) =>
      QueryAllCrowResponse.decode(new Reader(data))
    );
  }

  Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse> {
    const data = QueryGetVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Query",
      "Vote",
      data
    );
    return promise.then((data) =>
      QueryGetVoteResponse.decode(new Reader(data))
    );
  }

  VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse> {
    const data = QueryAllVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Query",
      "VoteAll",
      data
    );
    return promise.then((data) =>
      QueryAllVoteResponse.decode(new Reader(data))
    );
  }

  Dispute(request: QueryGetDisputeRequest): Promise<QueryGetDisputeResponse> {
    const data = QueryGetDisputeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Query",
      "Dispute",
      data
    );
    return promise.then((data) =>
      QueryGetDisputeResponse.decode(new Reader(data))
    );
  }

  DisputeAll(
    request: QueryAllDisputeRequest
  ): Promise<QueryAllDisputeResponse> {
    const data = QueryAllDisputeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Query",
      "DisputeAll",
      data
    );
    return promise.then((data) =>
      QueryAllDisputeResponse.decode(new Reader(data))
    );
  }

  Verdict(request: QueryGetVerdictRequest): Promise<QueryGetVerdictResponse> {
    const data = QueryGetVerdictRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Query",
      "Verdict",
      data
    );
    return promise.then((data) =>
      QueryGetVerdictResponse.decode(new Reader(data))
    );
  }

  VerdictAll(
    request: QueryAllVerdictRequest
  ): Promise<QueryAllVerdictResponse> {
    const data = QueryAllVerdictRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.escrow.Query",
      "VerdictAll",
      data
    );
    return promise.then((data) =>
      QueryAllVerdictResponse.decode(new Reader(data))
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
