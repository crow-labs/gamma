package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateCrow{}, "escrow/CreateCrow", nil)
	cdc.RegisterConcrete(&MsgUpdateCrow{}, "escrow/UpdateCrow", nil)
	cdc.RegisterConcrete(&MsgDeleteCrow{}, "escrow/DeleteCrow", nil)
	cdc.RegisterConcrete(&MsgCreateVote{}, "escrow/CreateVote", nil)
	cdc.RegisterConcrete(&MsgUpdateVote{}, "escrow/UpdateVote", nil)
	cdc.RegisterConcrete(&MsgDeleteVote{}, "escrow/DeleteVote", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCrow{},
		&MsgUpdateCrow{},
		&MsgDeleteCrow{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateVote{},
		&MsgUpdateVote{},
		&MsgDeleteVote{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
