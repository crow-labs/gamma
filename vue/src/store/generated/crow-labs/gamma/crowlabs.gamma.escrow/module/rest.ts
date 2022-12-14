/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface EscrowCrow {
  listingId?: string;
  orderId?: string;
  buyerId?: string;
  sellerId?: string;
  buyerCollateral?: V1Beta1Coin[];
  sellerCollateral?: V1Beta1Coin[];
  buyerFunds?: V1Beta1Coin[];
  status?: string;
  timeout?: string[];
  disputeId?: string;
  creator?: string;
  crowId?: string;
}

export interface EscrowDispute {
  crowId?: string;
  disputeId?: string;
  title?: string;
  description?: string;
  evidence?: string;
  creator?: string;
}

export type EscrowMsgCreateCrowResponse = object;

export type EscrowMsgCreateDisputeResponse = object;

export type EscrowMsgCreateVerdictResponse = object;

export type EscrowMsgCreateVoteResponse = object;

export type EscrowMsgDeleteCrowResponse = object;

export type EscrowMsgDeleteDisputeResponse = object;

export type EscrowMsgDeleteVerdictResponse = object;

export type EscrowMsgDeleteVoteResponse = object;

export type EscrowMsgUpdateCrowResponse = object;

export type EscrowMsgUpdateDisputeResponse = object;

export type EscrowMsgUpdateVerdictResponse = object;

export type EscrowMsgUpdateVoteResponse = object;

/**
 * Params defines the parameters for the module.
 */
export type EscrowParams = object;

export interface EscrowQueryAllCrowResponse {
  crow?: EscrowCrow[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllDisputeResponse {
  dispute?: EscrowDispute[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllVerdictResponse {
  verdict?: EscrowVerdict[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllVoteResponse {
  vote?: EscrowVote[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryGetCrowResponse {
  crow?: EscrowCrow;
}

export interface EscrowQueryGetDisputeResponse {
  dispute?: EscrowDispute;
}

export interface EscrowQueryGetVerdictResponse {
  verdict?: EscrowVerdict;
}

export interface EscrowQueryGetVoteResponse {
  vote?: EscrowVote;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface EscrowQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: EscrowParams;
}

export interface EscrowVerdict {
  crowId?: string;
  disputeId?: string;
  voteIds?: string[];
  resultingVote?: EscrowVote;
  creator?: string;
}

export interface EscrowVote {
  voterId?: string;
  disputeId?: string;
  voteId?: string;
  buyerGuilty?: boolean;
  sellerGuilty?: boolean;
  refundToBuyer?: V1Beta1Coin[];
  sendToSeller?: V1Beta1Coin[];
  buyerPunishment?: string;
  sellerPunishment?: string;
  creator?: string;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title escrow/crow.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryCrowAll
   * @summary Queries a list of Crow items.
   * @request GET:/crow-labs/gamma/escrow/crow
   */
  queryCrowAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllCrowResponse, RpcStatus>({
      path: `/crow-labs/gamma/escrow/crow`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCrow
   * @summary Queries a Crow by index.
   * @request GET:/crow-labs/gamma/escrow/crow/{listingId}/{orderId}
   */
  queryCrow = (listingId: string, orderId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetCrowResponse, RpcStatus>({
      path: `/crow-labs/gamma/escrow/crow/${listingId}/${orderId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDisputeAll
   * @summary Queries a list of Dispute items.
   * @request GET:/crow-labs/gamma/escrow/dispute
   */
  queryDisputeAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllDisputeResponse, RpcStatus>({
      path: `/crow-labs/gamma/escrow/dispute`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDispute
   * @summary Queries a Dispute by index.
   * @request GET:/crow-labs/gamma/escrow/dispute/{crowId}
   */
  queryDispute = (crowId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetDisputeResponse, RpcStatus>({
      path: `/crow-labs/gamma/escrow/dispute/${crowId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/crow-labs/gamma/escrow/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<EscrowQueryParamsResponse, RpcStatus>({
      path: `/crow-labs/gamma/escrow/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVerdictAll
   * @summary Queries a list of Verdict items.
   * @request GET:/crow-labs/gamma/escrow/verdict
   */
  queryVerdictAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllVerdictResponse, RpcStatus>({
      path: `/crow-labs/gamma/escrow/verdict`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVerdict
   * @summary Queries a Verdict by index.
   * @request GET:/crow-labs/gamma/escrow/verdict/{crowId}/{disputeId}
   */
  queryVerdict = (crowId: string, disputeId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetVerdictResponse, RpcStatus>({
      path: `/crow-labs/gamma/escrow/verdict/${crowId}/${disputeId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVoteAll
   * @summary Queries a list of Vote items.
   * @request GET:/crow-labs/gamma/escrow/vote
   */
  queryVoteAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllVoteResponse, RpcStatus>({
      path: `/crow-labs/gamma/escrow/vote`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVote
   * @summary Queries a Vote by index.
   * @request GET:/crow-labs/gamma/escrow/vote/{voterId}/{disputeId}
   */
  queryVote = (voterId: string, disputeId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetVoteResponse, RpcStatus>({
      path: `/crow-labs/gamma/escrow/vote/${voterId}/${disputeId}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
