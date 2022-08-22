// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteCrow } from "./types/escrow/tx";
import { MsgUpdateVote } from "./types/escrow/tx";
import { MsgCreateDispute } from "./types/escrow/tx";
import { MsgUpdateVerdict } from "./types/escrow/tx";
import { MsgDeleteVerdict } from "./types/escrow/tx";
import { MsgDeleteVote } from "./types/escrow/tx";
import { MsgUpdateDispute } from "./types/escrow/tx";
import { MsgCreateVote } from "./types/escrow/tx";
import { MsgUpdateCrow } from "./types/escrow/tx";
import { MsgDeleteDispute } from "./types/escrow/tx";
import { MsgCreateCrow } from "./types/escrow/tx";
import { MsgCreateVerdict } from "./types/escrow/tx";


const types = [
  ["/crowlabs.gamma.escrow.MsgDeleteCrow", MsgDeleteCrow],
  ["/crowlabs.gamma.escrow.MsgUpdateVote", MsgUpdateVote],
  ["/crowlabs.gamma.escrow.MsgCreateDispute", MsgCreateDispute],
  ["/crowlabs.gamma.escrow.MsgUpdateVerdict", MsgUpdateVerdict],
  ["/crowlabs.gamma.escrow.MsgDeleteVerdict", MsgDeleteVerdict],
  ["/crowlabs.gamma.escrow.MsgDeleteVote", MsgDeleteVote],
  ["/crowlabs.gamma.escrow.MsgUpdateDispute", MsgUpdateDispute],
  ["/crowlabs.gamma.escrow.MsgCreateVote", MsgCreateVote],
  ["/crowlabs.gamma.escrow.MsgUpdateCrow", MsgUpdateCrow],
  ["/crowlabs.gamma.escrow.MsgDeleteDispute", MsgDeleteDispute],
  ["/crowlabs.gamma.escrow.MsgCreateCrow", MsgCreateCrow],
  ["/crowlabs.gamma.escrow.MsgCreateVerdict", MsgCreateVerdict],
  
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
    msgDeleteCrow: (data: MsgDeleteCrow): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgDeleteCrow", value: MsgDeleteCrow.fromPartial( data ) }),
    msgUpdateVote: (data: MsgUpdateVote): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgUpdateVote", value: MsgUpdateVote.fromPartial( data ) }),
    msgCreateDispute: (data: MsgCreateDispute): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgCreateDispute", value: MsgCreateDispute.fromPartial( data ) }),
    msgUpdateVerdict: (data: MsgUpdateVerdict): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgUpdateVerdict", value: MsgUpdateVerdict.fromPartial( data ) }),
    msgDeleteVerdict: (data: MsgDeleteVerdict): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgDeleteVerdict", value: MsgDeleteVerdict.fromPartial( data ) }),
    msgDeleteVote: (data: MsgDeleteVote): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgDeleteVote", value: MsgDeleteVote.fromPartial( data ) }),
    msgUpdateDispute: (data: MsgUpdateDispute): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgUpdateDispute", value: MsgUpdateDispute.fromPartial( data ) }),
    msgCreateVote: (data: MsgCreateVote): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgCreateVote", value: MsgCreateVote.fromPartial( data ) }),
    msgUpdateCrow: (data: MsgUpdateCrow): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgUpdateCrow", value: MsgUpdateCrow.fromPartial( data ) }),
    msgDeleteDispute: (data: MsgDeleteDispute): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgDeleteDispute", value: MsgDeleteDispute.fromPartial( data ) }),
    msgCreateCrow: (data: MsgCreateCrow): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgCreateCrow", value: MsgCreateCrow.fromPartial( data ) }),
    msgCreateVerdict: (data: MsgCreateVerdict): EncodeObject => ({ typeUrl: "/crowlabs.gamma.escrow.MsgCreateVerdict", value: MsgCreateVerdict.fromPartial( data ) }),
    
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
