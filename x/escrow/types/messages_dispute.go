package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDispute = "create_dispute"
	TypeMsgUpdateDispute = "update_dispute"
	TypeMsgDeleteDispute = "delete_dispute"
)

var _ sdk.Msg = &MsgCreateDispute{}

func NewMsgCreateDispute(
	creator string,
	crowId string,
	disputeId string,
	title string,
	description string,
	evidence string,

) *MsgCreateDispute {
	return &MsgCreateDispute{
		Creator:     creator,
		CrowId:      crowId,
		DisputeId:   disputeId,
		Title:       title,
		Description: description,
		Evidence:    evidence,
	}
}

func (msg *MsgCreateDispute) Route() string {
	return RouterKey
}

func (msg *MsgCreateDispute) Type() string {
	return TypeMsgCreateDispute
}

func (msg *MsgCreateDispute) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDispute) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDispute) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDispute{}

func NewMsgUpdateDispute(
	creator string,
	crowId string,
	disputeId string,
	title string,
	description string,
	evidence string,

) *MsgUpdateDispute {
	return &MsgUpdateDispute{
		Creator:     creator,
		CrowId:      crowId,
		DisputeId:   disputeId,
		Title:       title,
		Description: description,
		Evidence:    evidence,
	}
}

func (msg *MsgUpdateDispute) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDispute) Type() string {
	return TypeMsgUpdateDispute
}

func (msg *MsgUpdateDispute) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDispute) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDispute) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDispute{}

func NewMsgDeleteDispute(
	creator string,
	crowId string,

) *MsgDeleteDispute {
	return &MsgDeleteDispute{
		Creator: creator,
		CrowId:  crowId,
	}
}
func (msg *MsgDeleteDispute) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDispute) Type() string {
	return TypeMsgDeleteDispute
}

func (msg *MsgDeleteDispute) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDispute) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDispute) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
