package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/gamma/x/whitelist/types"
)

func (k msgServer) CreateBuyers(goCtx context.Context, msg *types.MsgCreateBuyers) (*types.MsgCreateBuyersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetBuyers(
		ctx,
		msg.BuyerId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var buyers = types.Buyers{
		Creator: msg.Creator,
		BuyerId: msg.BuyerId,
		Buyer:   msg.Buyer,
	}

	k.SetBuyers(
		ctx,
		buyers,
	)
	return &types.MsgCreateBuyersResponse{}, nil
}

func (k msgServer) UpdateBuyers(goCtx context.Context, msg *types.MsgUpdateBuyers) (*types.MsgUpdateBuyersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBuyers(
		ctx,
		msg.BuyerId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var buyers = types.Buyers{
		Creator: msg.Creator,
		BuyerId: msg.BuyerId,
		Buyer:   msg.Buyer,
	}

	k.SetBuyers(ctx, buyers)

	return &types.MsgUpdateBuyersResponse{}, nil
}

func (k msgServer) DeleteBuyers(goCtx context.Context, msg *types.MsgDeleteBuyers) (*types.MsgDeleteBuyersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBuyers(
		ctx,
		msg.BuyerId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBuyers(
		ctx,
		msg.BuyerId,
	)

	return &types.MsgDeleteBuyersResponse{}, nil
}
