package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCrow = "create_crow"
	TypeMsgUpdateCrow = "update_crow"
	TypeMsgDeleteCrow = "delete_crow"
)

var _ sdk.Msg = &MsgCreateCrow{}

func NewMsgCreateCrow(
	creator string,
	listingId string,
	orderId string,
	buyerId string,
	sellerId string,
	buyerCollateral sdk.Coins,
	sellerCollateral sdk.Coins,
	buyerFunds sdk.Coins,
	status string,
	timeout []string,
	disputeId string,

) *MsgCreateCrow {
	return &MsgCreateCrow{
		Creator:          creator,
		ListingId:        listingId,
		OrderId:          orderId,
		BuyerId:          buyerId,
		SellerId:         sellerId,
		BuyerCollateral:  buyerCollateral,
		SellerCollateral: sellerCollateral,
		BuyerFunds:       buyerFunds,
		Status:           status,
		Timeout:          timeout,
		DisputeId:        disputeId,
	}
}

func (msg *MsgCreateCrow) Route() string {
	return RouterKey
}

func (msg *MsgCreateCrow) Type() string {
	return TypeMsgCreateCrow
}

func (msg *MsgCreateCrow) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCrow{}

func NewMsgUpdateCrow(
	creator string,
	listingId string,
	orderId string,
	buyerId string,
	sellerId string,
	buyerCollateral sdk.Coins,
	sellerCollateral sdk.Coins,
	buyerFunds sdk.Coins,
	status string,
	timeout []string,
	disputeId string,

) *MsgUpdateCrow {
	return &MsgUpdateCrow{
		Creator:          creator,
		ListingId:        listingId,
		OrderId:          orderId,
		BuyerId:          buyerId,
		SellerId:         sellerId,
		BuyerCollateral:  buyerCollateral,
		SellerCollateral: sellerCollateral,
		BuyerFunds:       buyerFunds,
		Status:           status,
		Timeout:          timeout,
		DisputeId:        disputeId,
	}
}

func (msg *MsgUpdateCrow) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCrow) Type() string {
	return TypeMsgUpdateCrow
}

func (msg *MsgUpdateCrow) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCrow{}

func NewMsgDeleteCrow(
	creator string,
	listingId string,
	orderId string,

) *MsgDeleteCrow {
	return &MsgDeleteCrow{
		Creator:   creator,
		ListingId: listingId,
		OrderId:   orderId,
	}
}
func (msg *MsgDeleteCrow) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCrow) Type() string {
	return TypeMsgDeleteCrow
}

func (msg *MsgDeleteCrow) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
