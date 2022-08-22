package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/gamma/x/escrow/types"
)

func (k msgServer) CreateDispute(goCtx context.Context, msg *types.MsgCreateDispute) (*types.MsgCreateDisputeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetDispute(
		ctx,
		msg.CrowId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var dispute = types.Dispute{
		Creator:     msg.Creator,
		CrowId:      msg.CrowId,
		DisputeId:   msg.DisputeId,
		Title:       msg.Title,
		Description: msg.Description,
		Evidence:    msg.Evidence,
	}

	k.SetDispute(
		ctx,
		dispute,
	)
	return &types.MsgCreateDisputeResponse{}, nil
}

func (k msgServer) UpdateDispute(goCtx context.Context, msg *types.MsgUpdateDispute) (*types.MsgUpdateDisputeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetDispute(
		ctx,
		msg.CrowId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var dispute = types.Dispute{
		Creator:     msg.Creator,
		CrowId:      msg.CrowId,
		DisputeId:   msg.DisputeId,
		Title:       msg.Title,
		Description: msg.Description,
		Evidence:    msg.Evidence,
	}

	k.SetDispute(ctx, dispute)

	return &types.MsgUpdateDisputeResponse{}, nil
}

func (k msgServer) DeleteDispute(goCtx context.Context, msg *types.MsgDeleteDispute) (*types.MsgDeleteDisputeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetDispute(
		ctx,
		msg.CrowId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDispute(
		ctx,
		msg.CrowId,
	)

	return &types.MsgDeleteDisputeResponse{}, nil
}
