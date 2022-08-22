package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateOrder{}, "market/CreateOrder", nil)
	cdc.RegisterConcrete(&MsgUpdateOrder{}, "market/UpdateOrder", nil)
	cdc.RegisterConcrete(&MsgDeleteOrder{}, "market/DeleteOrder", nil)
	cdc.RegisterConcrete(&MsgCreateListing{}, "market/CreateListing", nil)
	cdc.RegisterConcrete(&MsgUpdateListing{}, "market/UpdateListing", nil)
	cdc.RegisterConcrete(&MsgDeleteListing{}, "market/DeleteListing", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateOrder{},
		&MsgUpdateOrder{},
		&MsgDeleteOrder{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateListing{},
		&MsgUpdateListing{},
		&MsgDeleteListing{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
