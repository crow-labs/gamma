// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateListing } from "./types/market/tx";
import { MsgCreateOrder } from "./types/market/tx";
import { MsgUpdateOrder } from "./types/market/tx";
import { MsgDeleteOrder } from "./types/market/tx";
import { MsgCreateListing } from "./types/market/tx";
import { MsgDeleteListing } from "./types/market/tx";


const types = [
  ["/crowlabs.gamma.market.MsgUpdateListing", MsgUpdateListing],
  ["/crowlabs.gamma.market.MsgCreateOrder", MsgCreateOrder],
  ["/crowlabs.gamma.market.MsgUpdateOrder", MsgUpdateOrder],
  ["/crowlabs.gamma.market.MsgDeleteOrder", MsgDeleteOrder],
  ["/crowlabs.gamma.market.MsgCreateListing", MsgCreateListing],
  ["/crowlabs.gamma.market.MsgDeleteListing", MsgDeleteListing],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUpdateListing: (data: MsgUpdateListing): EncodeObject => ({ typeUrl: "/crowlabs.gamma.market.MsgUpdateListing", value: MsgUpdateListing.fromPartial( data ) }),
    msgCreateOrder: (data: MsgCreateOrder): EncodeObject => ({ typeUrl: "/crowlabs.gamma.market.MsgCreateOrder", value: MsgCreateOrder.fromPartial( data ) }),
    msgUpdateOrder: (data: MsgUpdateOrder): EncodeObject => ({ typeUrl: "/crowlabs.gamma.market.MsgUpdateOrder", value: MsgUpdateOrder.fromPartial( data ) }),
    msgDeleteOrder: (data: MsgDeleteOrder): EncodeObject => ({ typeUrl: "/crowlabs.gamma.market.MsgDeleteOrder", value: MsgDeleteOrder.fromPartial( data ) }),
    msgCreateListing: (data: MsgCreateListing): EncodeObject => ({ typeUrl: "/crowlabs.gamma.market.MsgCreateListing", value: MsgCreateListing.fromPartial( data ) }),
    msgDeleteListing: (data: MsgDeleteListing): EncodeObject => ({ typeUrl: "/crowlabs.gamma.market.MsgDeleteListing", value: MsgDeleteListing.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
