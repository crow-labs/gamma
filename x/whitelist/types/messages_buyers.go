package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateBuyers = "create_buyers"
	TypeMsgUpdateBuyers = "update_buyers"
	TypeMsgDeleteBuyers = "delete_buyers"
)

var _ sdk.Msg = &MsgCreateBuyers{}

func NewMsgCreateBuyers(
	creator string,
	buyerId string,
	buyer *Buyer,

) *MsgCreateBuyers {
	return &MsgCreateBuyers{
		Creator: creator,
		BuyerId: buyerId,
		Buyer:   buyer,
	}
}

func (msg *MsgCreateBuyers) Route() string {
	return RouterKey
}

func (msg *MsgCreateBuyers) Type() string {
	return TypeMsgCreateBuyers
}

func (msg *MsgCreateBuyers) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBuyers) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBuyers) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBuyers{}

func NewMsgUpdateBuyers(
	creator string,
	buyerId string,
	buyer *Buyer,

) *MsgUpdateBuyers {
	return &MsgUpdateBuyers{
		Creator: creator,
		BuyerId: buyerId,
		Buyer:   buyer,
	}
}

func (msg *MsgUpdateBuyers) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBuyers) Type() string {
	return TypeMsgUpdateBuyers
}

func (msg *MsgUpdateBuyers) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBuyers) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBuyers) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBuyers{}

func NewMsgDeleteBuyers(
	creator string,
	buyerId string,

) *MsgDeleteBuyers {
	return &MsgDeleteBuyers{
		Creator: creator,
		BuyerId: buyerId,
	}
}
func (msg *MsgDeleteBuyers) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBuyers) Type() string {
	return TypeMsgDeleteBuyers
}

func (msg *MsgDeleteBuyers) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBuyers) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBuyers) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
