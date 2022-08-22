// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateVote } from "./types/escrow/tx";
import { MsgUpdateVote } from "./types/escrow/tx";
import { MsgDeleteVote } from "./types/escrow/tx";
import { MsgCreateCrow } from "./types/escrow/tx";
import { MsgDeleteCrow } from "./types/escrow/tx";
import { MsgUpdateCrow } from "./types/escrow/tx";


const types = [
  ["/crowlabs.gamma.escrow.MsgCreateVote", MsgCreateVote],
  ["/crowlabs.gamma.escrow.MsgUpdateVote", MsgUpdateVote],
  ["/crowlabs.gamma.escrow.MsgDeleteVote", MsgDeleteVote],
  ["/crowlabs.gamma.escrow.MsgCreateCrow", MsgCreateCrow],
  ["/crowlabs.gamma.escrow.MsgDeleteCrow", MsgDeleteCrow],
  ["/crowlabs.gamma.escrow.MsgUpdateCrow", MsgUpdateCrow],
  
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
    msgCreateVote: (data: MsgCreateVote): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgCreateVote", value: MsgCreateVote.fromPartial( data ) }),
    msgUpdateVote: (data: MsgUpdateVote): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgUpdateVote", value: MsgUpdateVote.fromPartial( data ) }),
    msgDeleteVote: (data: MsgDeleteVote): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgDeleteVote", value: MsgDeleteVote.fromPartial( data ) }),
    msgCreateCrow: (data: MsgCreateCrow): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgCreateCrow", value: MsgCreateCrow.fromPartial( data ) }),
    msgDeleteCrow: (data: MsgDeleteCrow): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgDeleteCrow", value: MsgDeleteCrow.fromPartial( data ) }),
    msgUpdateCrow: (data: MsgUpdateCrow): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgUpdateCrow", value: MsgUpdateCrow.fromPartial( data ) }),
    
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
