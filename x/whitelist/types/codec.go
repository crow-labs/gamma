package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateBuyerIds{}, "whitelist/CreateBuyerIds", nil)
	cdc.RegisterConcrete(&MsgUpdateBuyerIds{}, "whitelist/UpdateBuyerIds", nil)
	cdc.RegisterConcrete(&MsgDeleteBuyerIds{}, "whitelist/DeleteBuyerIds", nil)
	cdc.RegisterConcrete(&MsgCreateBuyers{}, "whitelist/CreateBuyers", nil)
	cdc.RegisterConcrete(&MsgUpdateBuyers{}, "whitelist/UpdateBuyers", nil)
	cdc.RegisterConcrete(&MsgDeleteBuyers{}, "whitelist/DeleteBuyers", nil)
	cdc.RegisterConcrete(&MsgCreateVoter{}, "whitelist/CreateVoter", nil)
	cdc.RegisterConcrete(&MsgUpdateVoter{}, "whitelist/UpdateVoter", nil)
	cdc.RegisterConcrete(&MsgDeleteVoter{}, "whitelist/DeleteVoter", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBuyerIds{},
		&MsgUpdateBuyerIds{},
		&MsgDeleteBuyerIds{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBuyers{},
		&MsgUpdateBuyers{},
		&MsgDeleteBuyers{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateVoter{},
		&MsgUpdateVoter{},
		&MsgDeleteVoter{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
