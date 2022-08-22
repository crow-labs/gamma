package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/gamma/x/market/types"
)

func (k msgServer) CreateListing(goCtx context.Context, msg *types.MsgCreateListing) (*types.MsgCreateListingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetListing(
		ctx,
		msg.ProdId,
		msg.ListingId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var listing = types.Listing{
		Creator:         msg.Creator,
		ProdId:          msg.ProdId,
		ListingId:       msg.ListingId,
		Title:           msg.Title,
		Desc:            msg.Desc,
		Price:           msg.Price,
		Status:          msg.Status,
		Quantity:        msg.Quantity,
		PendingOrders:   msg.PendingOrders,
		CompletedOrders: msg.CompletedOrders,
	}

	k.SetListing(
		ctx,
		listing,
	)
	return &types.MsgCreateListingResponse{}, nil
}

func (k msgServer) UpdateListing(goCtx context.Context, msg *types.MsgUpdateListing) (*types.MsgUpdateListingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetListing(
		ctx,
		msg.ProdId,
		msg.ListingId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var listing = types.Listing{
		Creator:         msg.Creator,
		ProdId:          msg.ProdId,
		ListingId:       msg.ListingId,
		Title:           msg.Title,
		Desc:            msg.Desc,
		Price:           msg.Price,
		Status:          msg.Status,
		Quantity:        msg.Quantity,
		PendingOrders:   msg.PendingOrders,
		CompletedOrders: msg.CompletedOrders,
	}

	k.SetListing(ctx, listing)

	return &types.MsgUpdateListingResponse{}, nil
}

func (k msgServer) DeleteListing(goCtx context.Context, msg *types.MsgDeleteListing) (*types.MsgDeleteListingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetListing(
		ctx,
		msg.ProdId,
		msg.ListingId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveListing(
		ctx,
		msg.ProdId,
		msg.ListingId,
	)

	return &types.MsgDeleteListingResponse{}, nil
}
