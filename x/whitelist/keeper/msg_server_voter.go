package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/gamma/x/whitelist/types"
)

func (k msgServer) CreateVoter(goCtx context.Context, msg *types.MsgCreateVoter) (*types.MsgCreateVoterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetVoter(
		ctx,
		msg.AccAddr,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var voter = types.Voter{
		Creator:       msg.Creator,
		AccAddr:       msg.AccAddr,
		Status:        msg.Status,
		PendingVotes:  msg.PendingVotes,
		PreviousVotes: msg.PreviousVotes,
		VoterId:       msg.VoterId,
	}

	k.SetVoter(
		ctx,
		voter,
	)
	return &types.MsgCreateVoterResponse{}, nil
}

func (k msgServer) UpdateVoter(goCtx context.Context, msg *types.MsgUpdateVoter) (*types.MsgUpdateVoterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetVoter(
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

	var voter = types.Voter{
		Creator:       msg.Creator,
		AccAddr:       msg.AccAddr,
		Status:        msg.Status,
		PendingVotes:  msg.PendingVotes,
		PreviousVotes: msg.PreviousVotes,
		VoterId:       msg.VoterId,
	}

	k.SetVoter(ctx, voter)

	return &types.MsgUpdateVoterResponse{}, nil
}

func (k msgServer) DeleteVoter(goCtx context.Context, msg *types.MsgDeleteVoter) (*types.MsgDeleteVoterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetVoter(
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

	k.RemoveVoter(
		ctx,
		msg.AccAddr,
	)

	return &types.MsgDeleteVoterResponse{}, nil
}
