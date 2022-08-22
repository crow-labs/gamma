/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../whitelist/params";
import { BuyerIds } from "../whitelist/buyer_ids";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

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
