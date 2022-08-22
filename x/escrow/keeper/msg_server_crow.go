package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/gamma/x/escrow/types"
)

func (k msgServer) CreateCrow(goCtx context.Context, msg *types.MsgCreateCrow) (*types.MsgCreateCrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetCrow(
		ctx,
		msg.ListingId,
		msg.OrderId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var crow = types.Crow{
		Creator:          msg.Creator,
		ListingId:        msg.ListingId,
		OrderId:          msg.OrderId,
		BuyerId:          msg.BuyerId,
		SellerId:         msg.SellerId,
		BuyerCollateral:  msg.BuyerCollateral,
		SellerCollateral: msg.SellerCollateral,
		BuyerFunds:       msg.BuyerFunds,
		Status:           msg.Status,
		Timeout:          msg.Timeout,
		DisputeId:        msg.DisputeId,
	}

	k.SetCrow(
		ctx,
		crow,
	)
	return &types.MsgCreateCrowResponse{}, nil
}

func (k msgServer) UpdateCrow(goCtx context.Context, msg *types.MsgUpdateCrow) (*types.MsgUpdateCrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCrow(
		ctx,
		msg.ListingId,
		msg.OrderId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var crow = types.Crow{
		Creator:          msg.Creator,
		ListingId:        msg.ListingId,
		OrderId:          msg.OrderId,
		BuyerId:          msg.BuyerId,
		SellerId:         msg.SellerId,
		BuyerCollateral:  msg.BuyerCollateral,
		SellerCollateral: msg.SellerCollateral,
		BuyerFunds:       msg.BuyerFunds,
		Status:           msg.Status,
		Timeout:          msg.Timeout,
		DisputeId:        msg.DisputeId,
	}

	k.SetCrow(ctx, crow)

	return &types.MsgUpdateCrowResponse{}, nil
}

func (k msgServer) DeleteCrow(goCtx context.Context, msg *types.MsgDeleteCrow) (*types.MsgDeleteCrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCrow(
		ctx,
		msg.ListingId,
		msg.OrderId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCrow(
		ctx,
		msg.ListingId,
		msg.OrderId,
	)

	return &types.MsgDeleteCrowResponse{}, nil
}
