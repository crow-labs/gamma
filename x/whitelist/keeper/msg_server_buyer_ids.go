package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/gamma/x/whitelist/types"
)

func (k msgServer) CreateBuyerIds(goCtx context.Context, msg *types.MsgCreateBuyerIds) (*types.MsgCreateBuyerIdsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetBuyerIds(
		ctx,
		msg.AccAddr,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var buyerIds = types.BuyerIds{
		Creator: msg.Creator,
		AccAddr: msg.AccAddr,
		BuyerId: msg.BuyerId,
	}

	k.SetBuyerIds(
		ctx,
		buyerIds,
	)
	return &types.MsgCreateBuyerIdsResponse{}, nil
}

func (k msgServer) UpdateBuyerIds(goCtx context.Context, msg *types.MsgUpdateBuyerIds) (*types.MsgUpdateBuyerIdsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBuyerIds(
		ctx,
		msg.AccAddr,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var buyerIds = types.BuyerIds{
		Creator: msg.Creator,
		AccAddr: msg.AccAddr,
		BuyerId: msg.BuyerId,
	}

	k.SetBuyerIds(ctx, buyerIds)

	return &types.MsgUpdateBuyerIdsResponse{}, nil
}

func (k msgServer) DeleteBuyerIds(goCtx context.Context, msg *types.MsgDeleteBuyerIds) (*types.MsgDeleteBuyerIdsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBuyerIds(
		ctx,
		msg.AccAddr,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBuyerIds(
		ctx,
		msg.AccAddr,
	)

	return &types.MsgDeleteBuyerIdsResponse{}, nil
}
