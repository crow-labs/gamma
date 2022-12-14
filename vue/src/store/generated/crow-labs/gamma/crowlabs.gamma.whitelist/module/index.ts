// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateBuyers } from "./types/whitelist/tx";
import { MsgUpdateBuyers } from "./types/whitelist/tx";
import { MsgDeleteBuyers } from "./types/whitelist/tx";
import { MsgDeleteVoter } from "./types/whitelist/tx";
import { MsgDeleteBuyerIds } from "./types/whitelist/tx";
import { MsgUpdateVoter } from "./types/whitelist/tx";
import { MsgCreateBuyerIds } from "./types/whitelist/tx";
import { MsgCreateVoter } from "./types/whitelist/tx";
import { MsgUpdateBuyerIds } from "./types/whitelist/tx";


const types = [
  ["/crowlabs.gamma.whitelist.MsgCreateBuyers", MsgCreateBuyers],
  ["/crowlabs.gamma.whitelist.MsgUpdateBuyers", MsgUpdateBuyers],
  ["/crowlabs.gamma.whitelist.MsgDeleteBuyers", MsgDeleteBuyers],
  ["/crowlabs.gamma.whitelist.MsgDeleteVoter", MsgDeleteVoter],
  ["/crowlabs.gamma.whitelist.MsgDeleteBuyerIds", MsgDeleteBuyerIds],
  ["/crowlabs.gamma.whitelist.MsgUpdateVoter", MsgUpdateVoter],
  ["/crowlabs.gamma.whitelist.MsgCreateBuyerIds", MsgCreateBuyerIds],
  ["/crowlabs.gamma.whitelist.MsgCreateVoter", MsgCreateVoter],
  ["/crowlabs.gamma.whitelist.MsgUpdateBuyerIds", MsgUpdateBuyerIds],
  
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
    msgCreateBuyers: (data: MsgCreateBuyers): EncodeObject => ({ typeUrl: "/crowlabs.gamma.whitelist.MsgCreateBuyers", value: MsgCreateBuyers.fromPartial( data ) }),
    msgUpdateBuyers: (data: MsgUpdateBuyers): EncodeObject => ({ typeUrl: "/crowlabs.gamma.whitelist.MsgUpdateBuyers", value: MsgUpdateBuyers.fromPartial( data ) }),
    msgDeleteBuyers: (data: MsgDeleteBuyers): EncodeObject => ({ typeUrl: "/crowlabs.gamma.whitelist.MsgDeleteBuyers", value: MsgDeleteBuyers.fromPartial( data ) }),
    msgDeleteVoter: (data: MsgDeleteVoter): EncodeObject => ({ typeUrl: "/crowlabs.gamma.whitelist.MsgDeleteVoter", value: MsgDeleteVoter.fromPartial( data ) }),
    msgDeleteBuyerIds: (data: MsgDeleteBuyerIds): EncodeObject => ({ typeUrl: "/crowlabs.gamma.whitelist.MsgDeleteBuyerIds", value: MsgDeleteBuyerIds.fromPartial( data ) }),
    msgUpdateVoter: (data: MsgUpdateVoter): EncodeObject => ({ typeUrl: "/crowlabs.gamma.whitelist.MsgUpdateVoter", value: MsgUpdateVoter.fromPartial( data ) }),
    msgCreateBuyerIds: (data: MsgCreateBuyerIds): EncodeObject => ({ typeUrl: "/crowlabs.gamma.whitelist.MsgCreateBuyerIds", value: MsgCreateBuyerIds.fromPartial( data ) }),
    msgCreateVoter: (data: MsgCreateVoter): EncodeObject => ({ typeUrl: "/crowlabs.gamma.whitelist.MsgCreateVoter", value: MsgCreateVoter.fromPartial( data ) }),
    msgUpdateBuyerIds: (data: MsgUpdateBuyerIds): EncodeObject => ({ typeUrl: "/crowlabs.gamma.whitelist.MsgUpdateBuyerIds", value: MsgUpdateBuyerIds.fromPartial( data ) }),
    
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
