package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateVoter = "create_voter"
	TypeMsgUpdateVoter = "update_voter"
	TypeMsgDeleteVoter = "delete_voter"
)

var _ sdk.Msg = &MsgCreateVoter{}

func NewMsgCreateVoter(
	creator string,
	accAddr string,
	status string,
	pendingVotes []string,
	previousVotes []string,
	voterId string,

) *MsgCreateVoter {
	return &MsgCreateVoter{
		Creator:       creator,
		AccAddr:       accAddr,
		Status:        status,
		PendingVotes:  pendingVotes,
		PreviousVotes: previousVotes,
		VoterId:       voterId,
	}
}

func (msg *MsgCreateVoter) Route() string {
	return RouterKey
}

func (msg *MsgCreateVoter) Type() string {
	return TypeMsgCreateVoter
}

func (msg *MsgCreateVoter) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateVoter) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateVoter) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateVoter{}

func NewMsgUpdateVoter(
	creator string,
	accAddr string,
	status string,
	pendingVotes []string,
	previousVotes []string,
	voterId string,

) *MsgUpdateVoter {
	return &MsgUpdateVoter{
		Creator:       creator,
		AccAddr:       accAddr,
		Status:        status,
		PendingVotes:  pendingVotes,
		PreviousVotes: previousVotes,
		VoterId:       voterId,
	}
}

func (msg *MsgUpdateVoter) Route() string {
	return RouterKey
}

func (msg *MsgUpdateVoter) Type() string {
	return TypeMsgUpdateVoter
}

func (msg *MsgUpdateVoter) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateVoter) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateVoter) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteVoter{}

func NewMsgDeleteVoter(
	creator string,
	accAddr string,

) *MsgDeleteVoter {
	return &MsgDeleteVoter{
		Creator: creator,
		AccAddr: accAddr,
	}
}
func (msg *MsgDeleteVoter) Route() string {
	return RouterKey
}

func (msg *MsgDeleteVoter) Type() string {
	return TypeMsgDeleteVoter
}

func (msg *MsgDeleteVoter) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteVoter) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteVoter) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
