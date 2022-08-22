package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateBuyerIds = "create_buyer_ids"
	TypeMsgUpdateBuyerIds = "update_buyer_ids"
	TypeMsgDeleteBuyerIds = "delete_buyer_ids"
)

var _ sdk.Msg = &MsgCreateBuyerIds{}

func NewMsgCreateBuyerIds(
	creator string,
	accAddr string,
	buyerId string,

) *MsgCreateBuyerIds {
	return &MsgCreateBuyerIds{
		Creator: creator,
		AccAddr: accAddr,
		BuyerId: buyerId,
	}
}

func (msg *MsgCreateBuyerIds) Route() string {
	return RouterKey
}

func (msg *MsgCreateBuyerIds) Type() string {
	return TypeMsgCreateBuyerIds
}

func (msg *MsgCreateBuyerIds) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBuyerIds) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBuyerIds) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBuyerIds{}

func NewMsgUpdateBuyerIds(
	creator string,
	accAddr string,
	buyerId string,

) *MsgUpdateBuyerIds {
	return &MsgUpdateBuyerIds{
		Creator: creator,
		AccAddr: accAddr,
		BuyerId: buyerId,
	}
}

func (msg *MsgUpdateBuyerIds) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBuyerIds) Type() string {
	return TypeMsgUpdateBuyerIds
}

func (msg *MsgUpdateBuyerIds) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBuyerIds) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBuyerIds) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBuyerIds{}

func NewMsgDeleteBuyerIds(
	creator string,
	accAddr string,

) *MsgDeleteBuyerIds {
	return &MsgDeleteBuyerIds{
		Creator: creator,
		AccAddr: accAddr,
	}
}
func (msg *MsgDeleteBuyerIds) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBuyerIds) Type() string {
	return TypeMsgDeleteBuyerIds
}

func (msg *MsgDeleteBuyerIds) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBuyerIds) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBuyerIds) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
