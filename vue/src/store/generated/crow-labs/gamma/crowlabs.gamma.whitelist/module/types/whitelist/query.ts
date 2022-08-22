/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../whitelist/params";
import { BuyerIds } from "../whitelist/buyer_ids";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Buyers } from "../whitelist/buyers";
import { Voter } from "../whitelist/voter";

export const protobufPackage = "crowlabs.gamma.whitelist";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetBuyerIdsRequest {
  accAddr: string;
}

export interface QueryGetBuyerIdsResponse {
  buyerIds: BuyerIds | undefined;
}

export interface QueryAllBuyerIdsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBuyerIdsResponse {
  buyerIds: BuyerIds[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBuyersRequest {
  buyerId: string;
}

export interface QueryGetBuyersResponse {
  buyers: Buyers | undefined;
}

export interface QueryAllBuyersRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBuyersResponse {
  buyers: Buyers[];
  pagination: PageResponse | undefined;
}

export interface QueryGetVoterRequest {
  accAddr: string;
}

export interface QueryGetVoterResponse {
  voter: Voter | undefined;
}

export interface QueryAllVoterRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllVoterResponse {
  voter: Voter[];
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

const baseQueryGetBuyerIdsRequest: object = { accAddr: "" };

export const QueryGetBuyerIdsRequest = {
  encode(
    message: QueryGetBuyerIdsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accAddr !== "") {
      writer.uint32(10).string(message.accAddr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBuyerIdsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBuyerIdsRequest,
    } as QueryGetBuyerIdsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuyerIdsRequest {
    const message = {
      ...baseQueryGetBuyerIdsRequest,
    } as QueryGetBuyerIdsRequest;
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = String(object.accAddr);
    } else {
      message.accAddr = "";
    }
    return message;
  },

  toJSON(message: QueryGetBuyerIdsRequest): unknown {
    const obj: any = {};
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuyerIdsRequest>
  ): QueryGetBuyerIdsRequest {
    const message = {
      ...baseQueryGetBuyerIdsRequest,
    } as QueryGetBuyerIdsRequest;
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = object.accAddr;
    } else {
      message.accAddr = "";
    }
    return message;
  },
};

const baseQueryGetBuyerIdsResponse: object = {};

export const QueryGetBuyerIdsResponse = {
  encode(
    message: QueryGetBuyerIdsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyerIds !== undefined) {
      BuyerIds.encode(message.buyerIds, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBuyerIdsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBuyerIdsResponse,
    } as QueryGetBuyerIdsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerIds = BuyerIds.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuyerIdsResponse {
    const message = {
      ...baseQueryGetBuyerIdsResponse,
    } as QueryGetBuyerIdsResponse;
    if (object.buyerIds !== undefined && object.buyerIds !== null) {
      message.buyerIds = BuyerIds.fromJSON(object.buyerIds);
    } else {
      message.buyerIds = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBuyerIdsResponse): unknown {
    const obj: any = {};
    message.buyerIds !== undefined &&
      (obj.buyerIds = message.buyerIds
        ? BuyerIds.toJSON(message.buyerIds)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuyerIdsResponse>
  ): QueryGetBuyerIdsResponse {
    const message = {
      ...baseQueryGetBuyerIdsResponse,
    } as QueryGetBuyerIdsResponse;
    if (object.buyerIds !== undefined && object.buyerIds !== null) {
      message.buyerIds = BuyerIds.fromPartial(object.buyerIds);
    } else {
      message.buyerIds = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyerIdsRequest: object = {};

export const QueryAllBuyerIdsRequest = {
  encode(
    message: QueryAllBuyerIdsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBuyerIdsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBuyerIdsRequest,
    } as QueryAllBuyerIdsRequest;
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

  fromJSON(object: any): QueryAllBuyerIdsRequest {
    const message = {
      ...baseQueryAllBuyerIdsRequest,
    } as QueryAllBuyerIdsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyerIdsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuyerIdsRequest>
  ): QueryAllBuyerIdsRequest {
    const message = {
      ...baseQueryAllBuyerIdsRequest,
    } as QueryAllBuyerIdsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyerIdsResponse: object = {};

export const QueryAllBuyerIdsResponse = {
  encode(
    message: QueryAllBuyerIdsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.buyerIds) {
      BuyerIds.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBuyerIdsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBuyerIdsResponse,
    } as QueryAllBuyerIdsResponse;
    message.buyerIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerIds.push(BuyerIds.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBuyerIdsResponse {
    const message = {
      ...baseQueryAllBuyerIdsResponse,
    } as QueryAllBuyerIdsResponse;
    message.buyerIds = [];
    if (object.buyerIds !== undefined && object.buyerIds !== null) {
      for (const e of object.buyerIds) {
        message.buyerIds.push(BuyerIds.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyerIdsResponse): unknown {
    const obj: any = {};
    if (message.buyerIds) {
      obj.buyerIds = message.buyerIds.map((e) =>
        e ? BuyerIds.toJSON(e) : undefined
      );
    } else {
      obj.buyerIds = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuyerIdsResponse>
  ): QueryAllBuyerIdsResponse {
    const message = {
      ...baseQueryAllBuyerIdsResponse,
    } as QueryAllBuyerIdsResponse;
    message.buyerIds = [];
    if (object.buyerIds !== undefined && object.buyerIds !== null) {
      for (const e of object.buyerIds) {
        message.buyerIds.push(BuyerIds.fromPartial(e));
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

const baseQueryGetBuyersRequest: object = { buyerId: "" };

export const QueryGetBuyersRequest = {
  encode(
    message: QueryGetBuyersRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyerId !== "") {
      writer.uint32(10).string(message.buyerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBuyersRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBuyersRequest } as QueryGetBuyersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuyersRequest {
    const message = { ...baseQueryGetBuyersRequest } as QueryGetBuyersRequest;
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    return message;
  },

  toJSON(message: QueryGetBuyersRequest): unknown {
    const obj: any = {};
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuyersRequest>
  ): QueryGetBuyersRequest {
    const message = { ...baseQueryGetBuyersRequest } as QueryGetBuyersRequest;
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    return message;
  },
};

const baseQueryGetBuyersResponse: object = {};

export const QueryGetBuyersResponse = {
  encode(
    message: QueryGetBuyersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyers !== undefined) {
      Buyers.encode(message.buyers, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBuyersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBuyersResponse } as QueryGetBuyersResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyers = Buyers.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuyersResponse {
    const message = { ...baseQueryGetBuyersResponse } as QueryGetBuyersResponse;
    if (object.buyers !== undefined && object.buyers !== null) {
      message.buyers = Buyers.fromJSON(object.buyers);
    } else {
      message.buyers = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBuyersResponse): unknown {
    const obj: any = {};
    message.buyers !== undefined &&
      (obj.buyers = message.buyers ? Buyers.toJSON(message.buyers) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuyersResponse>
  ): QueryGetBuyersResponse {
    const message = { ...baseQueryGetBuyersResponse } as QueryGetBuyersResponse;
    if (object.buyers !== undefined && object.buyers !== null) {
      message.buyers = Buyers.fromPartial(object.buyers);
    } else {
      message.buyers = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyersRequest: object = {};

export const QueryAllBuyersRequest = {
  encode(
    message: QueryAllBuyersRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBuyersRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBuyersRequest } as QueryAllBuyersRequest;
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

  fromJSON(object: any): QueryAllBuyersRequest {
    const message = { ...baseQueryAllBuyersRequest } as QueryAllBuyersRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuyersRequest>
  ): QueryAllBuyersRequest {
    const message = { ...baseQueryAllBuyersRequest } as QueryAllBuyersRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyersResponse: object = {};

export const QueryAllBuyersResponse = {
  encode(
    message: QueryAllBuyersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.buyers) {
      Buyers.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBuyersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBuyersResponse } as QueryAllBuyersResponse;
    message.buyers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyers.push(Buyers.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBuyersResponse {
    const message = { ...baseQueryAllBuyersResponse } as QueryAllBuyersResponse;
    message.buyers = [];
    if (object.buyers !== undefined && object.buyers !== null) {
      for (const e of object.buyers) {
        message.buyers.push(Buyers.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyersResponse): unknown {
    const obj: any = {};
    if (message.buyers) {
      obj.buyers = message.buyers.map((e) =>
        e ? Buyers.toJSON(e) : undefined
      );
    } else {
      obj.buyers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuyersResponse>
  ): QueryAllBuyersResponse {
    const message = { ...baseQueryAllBuyersResponse } as QueryAllBuyersResponse;
    message.buyers = [];
    if (object.buyers !== undefined && object.buyers !== null) {
      for (const e of object.buyers) {
        message.buyers.push(Buyers.fromPartial(e));
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

const baseQueryGetVoterRequest: object = { accAddr: "" };

export const QueryGetVoterRequest = {
  encode(
    message: QueryGetVoterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accAddr !== "") {
      writer.uint32(10).string(message.accAddr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVoterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVoterRequest } as QueryGetVoterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVoterRequest {
    const message = { ...baseQueryGetVoterRequest } as QueryGetVoterRequest;
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = String(object.accAddr);
    } else {
      message.accAddr = "";
    }
    return message;
  },

  toJSON(message: QueryGetVoterRequest): unknown {
    const obj: any = {};
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetVoterRequest>): QueryGetVoterRequest {
    const message = { ...baseQueryGetVoterRequest } as QueryGetVoterRequest;
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = object.accAddr;
    } else {
      message.accAddr = "";
    }
    return message;
  },
};

const baseQueryGetVoterResponse: object = {};

export const QueryGetVoterResponse = {
  encode(
    message: QueryGetVoterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.voter !== undefined) {
      Voter.encode(message.voter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVoterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVoterResponse } as QueryGetVoterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = Voter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVoterResponse {
    const message = { ...baseQueryGetVoterResponse } as QueryGetVoterResponse;
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = Voter.fromJSON(object.voter);
    } else {
      message.voter = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetVoterResponse): unknown {
    const obj: any = {};
    message.voter !== undefined &&
      (obj.voter = message.voter ? Voter.toJSON(message.voter) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVoterResponse>
  ): QueryGetVoterResponse {
    const message = { ...baseQueryGetVoterResponse } as QueryGetVoterResponse;
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = Voter.fromPartial(object.voter);
    } else {
      message.voter = undefined;
    }
    return message;
  },
};

const baseQueryAllVoterRequest: object = {};

export const QueryAllVoterRequest = {
  encode(
    message: QueryAllVoterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVoterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVoterRequest } as QueryAllVoterRequest;
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

  fromJSON(object: any): QueryAllVoterRequest {
    const message = { ...baseQueryAllVoterRequest } as QueryAllVoterRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVoterRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllVoterRequest>): QueryAllVoterRequest {
    const message = { ...baseQueryAllVoterRequest } as QueryAllVoterRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllVoterResponse: object = {};

export const QueryAllVoterResponse = {
  encode(
    message: QueryAllVoterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.voter) {
      Voter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVoterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVoterResponse } as QueryAllVoterResponse;
    message.voter = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter.push(Voter.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllVoterResponse {
    const message = { ...baseQueryAllVoterResponse } as QueryAllVoterResponse;
    message.voter = [];
    if (object.voter !== undefined && object.voter !== null) {
      for (const e of object.voter) {
        message.voter.push(Voter.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVoterResponse): unknown {
    const obj: any = {};
    if (message.voter) {
      obj.voter = message.voter.map((e) => (e ? Voter.toJSON(e) : undefined));
    } else {
      obj.voter = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllVoterResponse>
  ): QueryAllVoterResponse {
    const message = { ...baseQueryAllVoterResponse } as QueryAllVoterResponse;
    message.voter = [];
    if (object.voter !== undefined && object.voter !== null) {
      for (const e of object.voter) {
        message.voter.push(Voter.fromPartial(e));
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
  /** Queries a BuyerIds by index. */
  BuyerIds(request: QueryGetBuyerIdsRequest): Promise<QueryGetBuyerIdsResponse>;
  /** Queries a list of BuyerIds items. */
  BuyerIdsAll(
    request: QueryAllBuyerIdsRequest
  ): Promise<QueryAllBuyerIdsResponse>;
  /** Queries a Buyers by index. */
  Buyers(request: QueryGetBuyersRequest): Promise<QueryGetBuyersResponse>;
  /** Queries a list of Buyers items. */
  BuyersAll(request: QueryAllBuyersRequest): Promise<QueryAllBuyersResponse>;
  /** Queries a Voter by index. */
  Voter(request: QueryGetVoterRequest): Promise<QueryGetVoterResponse>;
  /** Queries a list of Voter items. */
  VoterAll(request: QueryAllVoterRequest): Promise<QueryAllVoterResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  BuyerIds(
    request: QueryGetBuyerIdsRequest
  ): Promise<QueryGetBuyerIdsResponse> {
    const data = QueryGetBuyerIdsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Query",
      "BuyerIds",
      data
    );
    return promise.then((data) =>
      QueryGetBuyerIdsResponse.decode(new Reader(data))
    );
  }

  BuyerIdsAll(
    request: QueryAllBuyerIdsRequest
  ): Promise<QueryAllBuyerIdsResponse> {
    const data = QueryAllBuyerIdsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Query",
      "BuyerIdsAll",
      data
    );
    return promise.then((data) =>
      QueryAllBuyerIdsResponse.decode(new Reader(data))
    );
  }

  Buyers(request: QueryGetBuyersRequest): Promise<QueryGetBuyersResponse> {
    const data = QueryGetBuyersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Query",
      "Buyers",
      data
    );
    return promise.then((data) =>
      QueryGetBuyersResponse.decode(new Reader(data))
    );
  }

  BuyersAll(request: QueryAllBuyersRequest): Promise<QueryAllBuyersResponse> {
    const data = QueryAllBuyersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Query",
      "BuyersAll",
      data
    );
    return promise.then((data) =>
      QueryAllBuyersResponse.decode(new Reader(data))
    );
  }

  Voter(request: QueryGetVoterRequest): Promise<QueryGetVoterResponse> {
    const data = QueryGetVoterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Query",
      "Voter",
      data
    );
    return promise.then((data) =>
      QueryGetVoterResponse.decode(new Reader(data))
    );
  }

  VoterAll(request: QueryAllVoterRequest): Promise<QueryAllVoterResponse> {
    const data = QueryAllVoterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.gamma.whitelist.Query",
      "VoterAll",
      data
    );
    return promise.then((data) =>
      QueryAllVoterResponse.decode(new Reader(data))
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
